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
  const [password, setPassword] = useState("");
  return (
    <KeyboardAwareScrollView contentContainerStyle={utils.fullScreen}>
      <SafeAreaView style={utils.fullScreen}>
        <View style={[utils.androidTop, utils.authContainer]}>
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
              placeholder="Password"
              secureTextEntry={true}
              style={utils.input}
              onChangeText={(text) => {
                setPassword(text);
              }}
              value={password}
            />
          </View>

          <View style={[utils.section, utils.flexCenter]}>
            <TouchableOpacity
              onPress={async () => {
                try {
                  const response = await axios.get(
                    "https://express-airbnb-api.herokuapp.com/user/log_in",
                    { email, password },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  //console.log(response.data);
                  const userToken = response.data.token;
                  setToken(userToken);
                  alert("Succes, you're logged in !");
                } catch (error) {
                  console.log(error.message);
                  alert("Error, try again");
                }
              }}
            >
              <Text style={utils.btn}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text>Create an account</Text>
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
