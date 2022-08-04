import { View, Text } from 'react-native'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

//Data
import { POSTS } from '../data/posts'
import { bottomTabIcons } from '../data/bottomTabIcons'

// screens
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
import BottomTabs from '../components/Home/BottomTabs'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header />
      <Stories />
        <Divider style={{marginBottom: 10}} width={1} orientation='vertical' />
        {POSTS.map((item, index) => (
          <Post key={`post-${index}`} post={item}/>
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}/>
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