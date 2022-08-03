import { View, Text } from 'react-native'
import { SafeAreaView, StyleSheet } from 'react-native'

// screens
import Header from '../components/Home/Header'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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