import { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import { useNavigation } from '@react-navigation/native'

import { db, firebase } from '../../firebase'

const PLACEHOLDER_IMG = 'https://via.placeholder.com/150'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.'),

})

const FormikPostUploader = () => {
    const navigation = useNavigation()
    const [ thumbnailUrl, setThumbnailUrl ] = useState(PLACEHOLDER_IMG)
    const [ currentLoggedInUser, setCurrentLoggedInUser ] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = 
        db.collection('users')
        .where('owner_uid', '==', user.uid)
        .limit(1)
        .onSnapshot(
            snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profilePic
                })
            })
        )
        return unsubscribe
    }

    useEffect(() => {
        getUsername()
    }, [])

    const uploadPostToFirebase = (caption, imageUrl) => {
       const unsubscribe = db.collection('users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
            imageUrl: imageUrl,
            user: currentLoggedInUser.username,
            profilePicture: currentLoggedInUser.profilePicture,
            ownerUid: firebase.auth().currentUser.uid,
            caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likes_by_users: [],
            comments: []
        })
        .then(() => navigation.goBack())

        return unsubscribe
    }

  return (
    <Formik
    initialValues={{caption: '', imageUrl: ''}}
    onSubmit={values => {
        uploadPostToFirebase(values.caption, values.imageUrl)
    }}
    validationSchema={uploadPostSchema}
    valudateOnMount={true}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <>
            <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }} style={{width: 100, height: 100}}/>
            
                <View style={{ flex: 1, marginLeft: 12}}>
                    <TextInput
                    style={{ color: 'white', fontSize: 20 }} 
                    placeholder='Write a caption...' 
                    placeholderTextColor='grey'
                    multiline
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                    />
                    {errors.caption && (
                    <Text style={{ fontSize: 10, color: 'red'}}>
                        {errors.caption}
                    </Text>
                )}
                    
                </View>
            </View>
            <Divider width={0.2} orientation='vertical'/>
             <TextInput 
                onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                style={{ color: 'white', fontSize: 18 }}
                placeholder='Edit Image Url' 
                placeholderTextColor='grey'
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />
                {errors.imageUrl && (
                    <Text style={{ fontSize: 10, color: 'red'}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
            </>
        )}

    </Formik>
  )
}
export default FormikPostUploader
const styles = StyleSheet.create({})