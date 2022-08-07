import { useState, useEffect } from 'react'

import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { postFooterIcons } from '../../data/postFooterIcons'
import { db, firebase } from '../../firebase'

const Post = ({ post }) => {
   
    const handleLike = post => {
        const currentLikeStatus = !post.likes_by_users.includes(
            firebase.auth().currentUser.email
        ) 

        db.collection('users')
        .doc(post.ownerEmail)
        .collection('posts')
        .doc(post.id)
        .update({
            likes_by_users: currentLikeStatus ? firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
            :
            firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email)
        }).then(() => {
            console.log('Document successfully updated')
        }).catch(error => {
            console.log('error updating document - ', error)
        })
    }


  return (
    <View style={styles.postContainer}>
        <PostHeader post={post} />
        <PostImage post={post}/>
        <View style={{ marginHorizontal: 10, marginTop: 10}}>
            <PostFooter post={post} handleLike={handleLike}/>
            <Likes post={post}/>
            <Caption post={post} />
            <CommentsSection post={post}/>
        </View>
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View style={styles.headerContainer}>
            <View style={styles.userContainer}>
                <Image
                style={styles.userProfileImage}  
                source={{
                        uri: post.profile_picture
                    }} />
                <Text style={styles.userName}>{post.user}</Text>
            </View>
            <View>
                <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
            </View>
        </View>
)

const PostImage = ({ post }) => (
    <View style={styles.postImageContainer}>
        <Image 
        style={styles.postImage}
        source={{
            uri: post.imageUrl
        }}
        />
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

// Post icons
const PostFooter = ({handleLike, post}) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row'}}>
            {/* Like button */}
            <TouchableOpacity onPress={() => handleLike(post)}>
                <Image 
                style={styles.footerIcon} 
                source={{ uri: post.likes_by_users.includes(firebase.auth().currentUser.email) 
                    ? postFooterIcons[0].likedImageUrl 
                    : postFooterIcons[0].imageUrl}}
                
                />
            </TouchableOpacity>
            <Icon imgStyle={styles.footerIcon} 
            imgUrl={postFooterIcons[1].imageUrl}
                />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
        </View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
        
    </View>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4}}>
        <Text style={{color: 'white', fontWeight: '600'}}>{post.likes_by_users.length.toLocaleString('en')}</Text>
    </View>
        
)

const Caption = ({ post }) => (
    <View style={{marginTop: 5}} >
        <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600', marginRight: 5}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => {

    const [showAllComments, setShowAllComments] = useState(null)

    if (post.comments.length === 0){
        return null
    }
    
    return (
        <View style={{marginBottom: 20}}>
          { !showAllComments && <Text style={{color: 'grey', marginTop: 10}} onPress={() => setShowAllComments(true)}>
                { post.comments.length === 1 ? `View comment` : `View all ${post.comments.length} comments`}
            </Text>
            }
            {
             showAllComments && post.comments.map((comment, index) => (
                <Text key={`comment-${index}`} style={{color: 'white', marginTop: 10}}>
                    <Text style={{fontWeight: '600', marginRight: 5}}>{comment.user}</Text>
                    <Text> {comment.comment}</Text>
                </Text>
                 ))
            }

        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    postContainer: {
    // marginBottom: 100
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    userProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: 'orange',
        borderWidth: 2,
        marginRight: 8,
    },
    userName: {
        color: 'white',
    },
    postImageContainer: {
        height: 350,
    },
    postImage: {
        // width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    footerIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
})