import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Message from '../components/Message/Message'
import Home from "../screens/Home";
import chatRoomData from "../assets/SignalAssets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item })  => <Message message={item}/>}
                inverted
           />
           <MessageInput/>    
        </SafeAreaView>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})