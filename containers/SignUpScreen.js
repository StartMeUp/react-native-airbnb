import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import utils from "../assets/style";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [description, setDescription] = useState("");
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <View style={[utils.androidTop]}>
          <View style={[utils.section, utils.flexCenter]}>
            <Image
              source={require("../assets/airbnb-icon.webp")}
              style={styles.logo}
            />
            <Text style={utils.title}>Sign in</Text>
          </View>

          <View style={[utils.section, utils.width100]}>
            <TextInput
              placeholder="email"
              style={utils.input}
              onChangeText={(text) => {
                setEmail(text.toLowerCase());
              }}
              value={email}
            />

            <TextInput
              placeholder="username"
              style={utils.input}
              onChangeText={(text) => {
                setUsername(text);
              }}
              value={username}
            />

            <TextInput
              placeholder="describe yourself"
              style={utils.textarea}
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => {
                setDescription(text);
              }}
              value={description}
            />

            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={utils.input}
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
            />

            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={utils.input}
              onChangeText={(text) => {
                setPasswordCheck(text);
              }}
              value={passwordCheck}
            />
          </View>

          <View style={[utils.section, utils.flexCenter]}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  if (password !== passwordCheck) {
                    alert("Passwords must match !");
                  } else {
                    const response = await axios.post(
                      "https://express-airbnb-api.herokuapp.com/user/sign_up",
                      { email, password, username, description },
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    console.log("response =>", response.data);
                    const userToken = response.data.token;
                    setToken(userToken);
                    alert("Succes, you're logged in !");
                  }
                } catch (error) {
                  //console.log(error.message);
                  alert(error.message);
                }
              }}
            >
              <Text style={utils.btn}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text>Already have an account ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: { height: 100, width: 100, marginBottom: 30 },
});
