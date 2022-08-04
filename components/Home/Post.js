import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { postFooterIcons } from '../../data/postFooterIcons'

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
        <PostHeader post={post} />
        <PostImage post={post}/>
        <View style={{ marginHorizontal: 10, marginTop: 10}}>
            <PostFooter post={post}/>
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
            uri: post.imageURL
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
const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row'}}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl}/>
        </View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
        
    </View>
)

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