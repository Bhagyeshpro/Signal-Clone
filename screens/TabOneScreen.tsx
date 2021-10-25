import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"}} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>7</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Mark Zuggerberg</Text>
          <Text style={styles.text}>11:52 PM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>I am the CEO bitch! I am the CEO bitch! I am the CEO bitch!</Text>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding: 10, //Padding in all directions
  },
  badge: {
    borderRadius: 50,
    height: 17,
    width: 17, 
    backgroundColor: "#3777f0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 1,
    position: "absolute",
    left: 47,
    borderWidth: .7,
    borderColor: "#Fff",
    top: 12,
  },
  badgeText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },


  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  name: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    color: "gray",
  },
  image: {  
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },
})