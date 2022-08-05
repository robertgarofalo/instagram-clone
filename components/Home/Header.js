import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../../firebase'

// const handleSignout = () => {
//     firebase.auth().signOut().then(
//         console.log('signed out')
//     )
// }

const handleSignout = async () => {
    try {
        await firebase.auth().signOut().then(
            console.log('Signed out successfully')
        )
    } catch (error) {
        console.log(error)
    }
}

const Header = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignout}>
        <Image 
        style={styles.logo} 
        source={require('../../assets/logo.png')} 
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('NewPostScreen')}>
            <Image 
            style={styles.icon} 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
            }} 
            />
      </TouchableOpacity>
      <TouchableOpacity>
            <Image 
            style={styles.icon} 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
            }} 
            />
      </TouchableOpacity>
      <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
            <Image 
            style={styles.icon} 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
            }} 
            />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconContainer: {
        flexDirection: 'row'
    },
    logo: {
        width: 100, 
        height: 50,
        resizeMode: 'contain'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 20,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 25,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})
export default Header