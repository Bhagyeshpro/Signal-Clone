import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core';

import styles from "./styles";

export default function ChatRoomItems({ chatRoom }) {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => { 
    navigation.navigate("ChatRoom");
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />

      {chatRoom.newMessages && <View style={styles.badge}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>}

      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
          {user.gender && <View style={styles.genderBadge}>
            <Text style={styles.genderBadgeText}>{user.gender}</Text>
          </View>}
        </View>
      </View>
    </Pressable>
  )
};

