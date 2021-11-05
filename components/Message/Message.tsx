import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const Message = ({ message }) => {
    
    const myID = "u1";

    const isMe = message.user.id == myID;

    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer ]}>
            <Text style={{color: isMe ? "#000" : "#fff"  }}>{message.content}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
    },
    leftContainer: {
    backgroundColor: Colors.blue,
    marginLeft: 10,
    marginRight: "auto",
    },
    rightContainer:{
    backgroundColor: Colors.grey,
    marginLeft: "auto",
    marginRight: 10,
    },
})

export default Message;
