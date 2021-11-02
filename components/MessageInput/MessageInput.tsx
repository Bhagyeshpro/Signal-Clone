import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import {FontAwesome5,Feather, Ionicons, Foundation } from '@expo/vector-icons';
import Colors from '../../constants/Colors'

const InputContainer = () => {

    const [message, setMessage] = useState("");

    const sendingMessage = () => {
        console.warn("Sending : ", message);
        
        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("Plus Clicked");
    }
    
    const onPress = () => {
        if(message) {
            sendingMessage();   
        }else {
            onPlusClicked();
        }
    }
    return (
        <KeyboardAvoidingView 
            style={styles.root}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100} 
        >
            <View style={styles.inputContainer}>
                <FontAwesome5 name="smile" size={24} color="#595959" style={styles.icon} />
                <TextInput
                    placeholder={"Message..."}
                    value={message}
                    onChangeText={setMessage}
                    style={styles.inputText}
                />
                <Feather name="camera" size={24} color="#595959" style={styles.icon} />
                <Ionicons name="mic-outline" size={24} color="#595959" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="send" size={18} color="white" /> : <Foundation name="plus" size={20} color="white" style={styles.icon} />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}
export default InputContainer;

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 10,
    },
    inputContainer: {
        backgroundColor: "#f2f2f2",
        flex: 1,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#dedede",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 45,
        height: 45,
        backgroundColor: Colors.blue,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",  
        fontSize: 30,
    },
    inputText:{
        flex: 1,
        marginHorizontal: 5,
    },
})
