import { StyleSheet, Text, View, Image } from 'react-native'

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
        <PostHeader post={post} />
        <PostImage post={post}/>
        <Text style={{color: 'white'}}>Hello there</Text>
        {/* BOTTOM BAR */}
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
                <Text style={{color: 'white'}}>...</Text>
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
    postImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})