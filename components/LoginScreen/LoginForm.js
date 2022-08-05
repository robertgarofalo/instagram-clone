import { useState } from 'react'

import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const LoginForm = () => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'You password has to have at least 6 characters')
    })

  return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{ email: '', password: ''}}
        onSubmit={values => {
            console.log(values)
        }}
        validationSchema={LoginFormSchema}
        validationOnMounts
        >
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
             <>
                <View style={[styles.inputField,
                {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                }]} >
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Phone number, username or email'
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
                <Text style={{color: '#6BB0F5'}}>Forgot password?</Text>
            </View>
            <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={{color: '#6BB0F5'}}> Sign up</Text>
                </TouchableOpacity>
            </View>
        </>
            )}
        </Formik>
    </View>
  )
}
export default LoginForm
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