import { SafeAreaView, StyleSheet} from 'react-native'

import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#000', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}
export default NewPostScreen
const styles = StyleSheet.create({})