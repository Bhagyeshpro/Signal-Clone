import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View, Text, useWindowDimensions, Pressable, Image, StyleSheet } from 'react-native'

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable style={[styles.container, {width}]}>
      <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg"}} style={styles.image} />
      <Text style={styles.text}>Home</Text>
      <Pressable style={styles.rightContainer}>
        <Feather name="camera" size={20} color="white" style={{marginHorizontal: 5}} />
        <Feather name="edit-2" size={20} color="white" style={{marginHorizontal: 5}} />
      </Pressable>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
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
  },
  rightContainer: {
    width: "20%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },

})

export default HomeHeader
