import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ChatRoom from '../components/ChatRoomItems';

import chatRoomData from "../assets/SignalAssets/dummy-data/ChatRooms"
import ChatRoomItems from '../components/ChatRoomItems';

import Messages from "../components/Message/Message";

const chatRoom1 = chatRoomData[8];
const chatRoom2 = chatRoomData[1];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>

      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItems chatRoom={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <FlatList
            data={chatRoomData}
            renderItem={({ item }) => <ChatRoomItems chatRoom={item} />}
            showsVerticalScrollIndicator={false}
            horizontal
          />}
      />
    </View>


  );
}

const styles = StyleSheet.create({
  page: {
  },
})