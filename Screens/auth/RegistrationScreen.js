import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Image, 
} from "react-native";

import { Entypo } from '@expo/vector-icons';

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);


  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

    return (
     <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapper}>
                <View style={styles.picAdd}>
                  <Image
                      style={styles.userPic}
                      source={require("../../assets/images/photo-user.jpg")}
                      >
                  </Image>
                 <TouchableOpacity style={styles.addBtn}>
                    <Entypo name="cross" size={25} color="#BDBDBD"/>
                  </TouchableOpacity>   
                </View>    
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
                <View>
                <Text style={styles.title}>Регистрация</Text>        
                    <TextInput
                      style={styles.input}
                      placeholder={"Логин"}
                      placeholderTextColor={"#BDBDBD"}
                      onFocus={() => setIsShowKeyboard(true)}
                      value={state.login}
                      onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, login: value }))
                  }
                    />       
                </View>
                <View style={{ marginTop: 16 }}>      
                    <TextInput
                      style={styles.input}
                      value={state.email}
                      placeholder={"Адрес электронной почты"}
                      placeholderTextColor={"#BDBDBD"}
                      onFocus={() => setIsShowKeyboard(true)}
                      onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, email: value }))
                  }
                    />       
                </View>    
            <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  value={state.password}        
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))
                      }        
                />
          </View>
                <TouchableOpacity activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}>
             <Text style={styles.btnTitle}
              onPress={() => navigation.navigate("PostsScreen")}
             >Зарегистрироваться
             </Text>
           </TouchableOpacity> 
              <Text style={styles.redirText}
                onPress={() => navigation.navigate("Login")}>
                Уже есть аккаунт? Войти  
              </Text>         
            </View>          
          </View>
        </KeyboardAvoidingView>    
      </ImageBackground>
      </View>
    </TouchableWithoutFeedback>     
    );

}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
   },
    input: {
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        textAlign: "left",
        padding: 16,
        fontFamily: "Roboto-Regular",
    },
    wrapper: {
        marginTop: "50%",
        backgroundColor: "#fff",
        width: 375,
        height: 549,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
  picAdd: {
      position: "relative",
      marginTop: -60,
      marginLeft: 128,
      alignItems: "flex-end",
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    userPic:{
      borderRadius: 16,
      width: 120,
      height: 120,
    },
    addBtn: {
      position: "absolute",
      top: 81, 
      right: -12,
      backgroundColor: "#fff",
      borderRadius: "50%",
    },
    form: {
         marginHorizontal: 16,
    },
    title: {
        color: "#212121",
        marginTop: 32,
        marginBottom: 32,
        fontSize: 30,
        fontWeight: 500,
        textAlign: "center",
        placeholderTextColor: "#BDBDBD",
        fontFamily: "Roboto-Regular",
    },
    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
            ...Platform.select({
      ios: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
          },
      }),
  },
    btnTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
  },
  redirText: {
      marginTop: 16,
      fontSize: 16,
      textAlign: "center",
      color: "#1B4371",
    },
});
