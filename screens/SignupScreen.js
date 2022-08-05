import { Image, StyleSheet, Text, View } from 'react-native'
import SignupForm from '../components/SignupScreen/SignupForm'

const SignupScreen = () => {

    const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
  
    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100}}
            />
        </View>
        <SignupForm />

    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})