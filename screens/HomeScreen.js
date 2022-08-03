import { View, Text } from 'react-native'
import { SafeAreaView, StyleSheet } from 'react-native'

// screens
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen