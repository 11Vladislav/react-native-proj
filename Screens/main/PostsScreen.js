import React from "react";
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Image, 
        } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function PostsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Публикации   
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.logoutBtn}
            onPress={() => navigation.navigate("Login")}>        
            <MaterialIcons 
              name="logout" size={24}
              style={styles.logout}/> 
            </TouchableOpacity> 
      </View>
      <View style={styles.userContainer}>
        <Image
           style={styles.image}
           source={require("../../assets/images/photo-user-small.jpg")}
          >
        </Image>
        <View style={styles.userTextWrapper}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userMail}>example@example.com</Text>
        </View>   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 375,
    maxHeight: 812,
  },
  logoutBtn:{
    marginLeft: "auto", 
    maxWidth: 24,
    backgroundColor: "transparent",
    borderColor: "none",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 44,
    padding: 11,
    maxHeight: 44,
    borderBottomWidth: 1,
    borderColor: "#c3c3c3",
  },
  wrapper:{
    marginLeft: "35%",
    maxWidth: 175,
  },
  logout:{
    color: "#c3c3c3",
  },
  title:{
    textAlign: "center",
    color: "#212121",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
  },
  userContainer:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginLeft: 16,
    maxWidth: 171,
    maxHeight: 60,
  },
  image:{
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  userName:{
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userMail:{
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  userTextWrapper:{
    marginLeft: 8,
  }
});

