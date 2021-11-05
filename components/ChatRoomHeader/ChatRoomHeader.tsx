import { Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { View, Text, useWindowDimensions, Pressable, Image, StyleSheet } from 'react-native'

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  console.log(props);
  

  return (
    <View style={[styles.container, { width: width - 30}]}>
      <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg"}} style={styles.image} />
      <Text style={styles.text}>{props.children}</Text>
      <View style={styles.rightContainer}>
        <FontAwesome name="video-camera" size={20} color="white" style={{marginHorizontal: 7}} />        
        <FontAwesome5 name="phone-alt" size={20} color="white" style={{marginHorizontal: 7}} />
        <Entypo name="dots-three-vertical" size={20} color="white" style={{marginHorizontal: 7}} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    flex: 1,
    marginLeft: 15,
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  image:{
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 0,
  },
  rightContainer: {
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 70,
  },

})

export default ChatRoomHeader;
