import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { USERS } from '../../data/users'


const Stories = () => {
  return (
    <View style={{ marginBottom: 13}}>
        <ScrollView 
        horizontal 
        showHorizonScrollIndicator={false}
        >
        {USERS.map((story, index) => (
            <View key={`story-${index}`}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image 
                    source={{ uri: story.image}}
                    style={styles.story}
                    />
                    <Text style={styles.userName}>
                        {story.user.length > 10 ? `${story.user.slice(0, 10)}..` 
                        : 
                        story.user
                    }
                    </Text>
                </TouchableOpacity>
            </View>

        ))}
        </ScrollView>
    </View>
  )
}
export default Stories
const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
    userName: {
        color: 'white',
        marginTop: 8,
    }
})