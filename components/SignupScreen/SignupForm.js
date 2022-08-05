import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity, Alert } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import { db, firebase } from '../../firebase'

const SignupForm = () => {

    const navigation = useNavigation()

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required(2, 'A username is required'),
        password: Yup.string().required().min(6, 'You password has to have at least 6 characters')
    })

    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
    }

    const onSignup = async (email, username, password) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log('Firebase user created successfully', email, password)
            db.collection('users').add({
                owner_uid: authUser.user.uid,
                username,
                email: authUser.user.email,
                profilePic: await getRandomProfilePicture()
                })
            // navigation.navigate('Home')

        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    

  return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{ email: '', username: '', password: ''}}
        onSubmit={values => {
            onSignup(values.email, values.username, values.password)
        }}
        validationSchema={SignupFormSchema}
        validationOnMounts
        >
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
             <>
                <View style={[styles.inputField,
                {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                }]} >
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    values={values.email}
                    />
                </View>

                <View style={[styles.inputField,
                {borderColor: values.username.length < 1 || values.username.length >= 2 ? '#ccc' : 'red'
                }]} >
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Username'
                    autoCapitalize='none'
                    keyboardType='default'
                    textContentType='username'
                    autoFocus
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    values={values.username}
                    />
                </View>

                <View style={[styles.inputField, 
                {borderColor: values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red'
            }
                ]} >
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    values={values.password}
                    />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30}}>
            </View>
            <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{color: '#6BB0F5'}}> Login</Text>
                </TouchableOpacity>
            </View>
        </>
            )}
        </Formik>
    </View>
  )
}
export default SignupForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20
    },
    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    }
})