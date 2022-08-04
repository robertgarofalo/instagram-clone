import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { Divider } from 'react-native-elements'

// import { bottomTabIcons } from '../../data/bottomTabIcons' 

const BottomTabs = ({ icons }) => {

    const [ activeTab, setActiveTab ] = useState('Home')

    const Icon = ({ icon, index }) => (
        
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image key={`icon-${index}`} 
                source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
                style={{width: 32, height: 32, borderRadius: icon.name === 'Profile' ? 50 : 0}}/>
            </TouchableOpacity>
    )

  return (
      <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical'/>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', height: 50, paddingTop: 10}}>
      {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
          ))}
    </View>
    </View>
  )
}
export default BottomTabs
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    }
})