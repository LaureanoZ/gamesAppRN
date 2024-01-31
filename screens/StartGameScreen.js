import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { PrimaryButton } from '../components/PrimaryButton'

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numerInput}
            maxLength={3}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0 ,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numerInput: {
        height: 50,
        fontSize: 32,
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

})
