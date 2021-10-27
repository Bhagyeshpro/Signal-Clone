import { StyleSheet } from "react-native";


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
  genderBadge: {
    height: 15,
    width: 30,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  genderBadgeText: {
    color: "#fff",
    fontSize: 12,
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})


export default styles;