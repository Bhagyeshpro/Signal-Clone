import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Message from '../components/Message/Message'
import Home from "../screens/Home";

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>
            <Home/>
        </View>
        )
};

const styles = StyleSheet.create({
   page: {
       flex: 1,
   },

})