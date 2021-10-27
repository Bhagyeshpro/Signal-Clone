import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import ChatRoom from '../components/ChatRoom';

import chatRoomData from "../assets/SignalAssets/dummy-data/ChatRooms";

const chatRoom1 = chatRoomData[8];
const chatRoom2 = chatRoomData[1];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoom chatRoom={chatRoom1} name={'a'}/>
      <ChatRoom chatRoom={chatRoom2}/>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  page: {
  }, 
})