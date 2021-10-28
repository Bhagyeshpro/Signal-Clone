import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Message = () => {
    const isMe = "true";

    return (
        <View style={[styles.container]}>
            <Text style={styles.text}>Message</Text>
        </View>
    )

}
export default Message;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
    },
    container: {
        backgroundColor: "#3777f0",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: "75%",
        marginLeft: "calc(100% - 240px)",

    }
})