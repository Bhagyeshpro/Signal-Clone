import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Message from '../components/Message/Message'
import Home from "../screens/Home";
import chatRoomData from "../assets/SignalAssets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useNavigation, useRoute } from '@react-navigation/core';


export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    console.warn("Displaying id: ", route.params?.id);

    navigation.setOptions({title : "Mihir Paunikar"})

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