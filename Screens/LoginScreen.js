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
} from "react-native";

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const initialState = {
  email: "",
  password: "",
};

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./../assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function LoginScreen() {
    console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isReady, setIsReady] = useState(false)

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

if (!isReady) {
  return <AppLoading startAsync={loadFonts}
    onFinish={() =>
    setIsReady(true)}
    onError={console.warn}
  />
}

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
        source={require("./../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height" }
          >
            <View style={styles.wrapper}>   
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
                <View>
                <Text style={styles.title}>Войти</Text>            
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
             <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity> 
                <Text style={styles.redirText}>Нет аккаунта? Зарегистрироваться</Text>                   
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
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        textAlign: "left",
        fontFamily: "Roboto-Regular",
    },
    wrapper: {
        marginTop: "50%",
        backgroundColor: "#fff",
        width: 375,
        height: 489,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
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
    