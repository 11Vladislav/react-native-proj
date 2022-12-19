import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
    return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./../assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
           <View style={styles.wrapper}>    
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}>
                <View>
                <Text style={styles.title}>Регистрация</Text>        
                  <TextInput style={styles.input}
                    placeholder={"Логин"}
                    onFocus={() => setIsShowKeyboard(true)} />       
                </View>
                <View style={{ marginTop: 16 }}>      
                  <TextInput style={styles.input}
                    placeholder={"Адрес электронной почты"}
                    onFocus={() => setIsShowKeyboard(true)}/>       
                </View>    
            <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
              placeholder={"Пароль"}
              onFocus={() => setIsShowKeyboard(true)}      
            />
          </View>
                <TouchableOpacity activeOpacity={0.8}
                  style={styles.btn}
                  onPress={keyboardHide}>
             <Text style={styles.btnTitle}>Зарегистрироваться</Text>
           </TouchableOpacity> 
          </View>
          </View>
        </KeyboardAvoidingView>    
      </ImageBackground>
    </View>
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
   },
    input: {
        borderWidth: 1,
        borderColor: "#E8E8E8",
        height: 50,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        textAlign: "center",
    },
    wrapper: {
        marginTop: "50%",
        backgroundColor: "#fff",
        width: "100%",
        height: 549,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    form: {
         marginHorizontal: 16,
    },
    title: {
        color: "#212121",
        marginTop: 92,
        marginBottom: 32,
        fontSize: 30,
        fontWeight: 500,
        textAlign: "center",
        placeholderTextColor: "#BDBDBD",
    },
    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        borderRadius: 100,
        marginTop: 43,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 16,
  },
    btnTitle: {
        color: "#fff",
        fontSize: 16,
  },
});
