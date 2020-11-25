import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { SizeClassIOS } from "expo/build/ScreenOrientation/ScreenOrientation";

const colors = StyleSheet.create({
  Txtred: { color: "#EB5A62" },
});

const utils = StyleSheet.create({
  fullScreen: { flex: 1 },
  fullScreenCenter: { flex: 1, justifyContent: "center", alignItems: "center" },
  flexCenter: { justifyContent: "center", alignItems: "center" },
  authContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  androidTop: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  section: { paddingHorizontal: 20, paddingVertical: 10 },
  width100: { width: "100%" },
  input: {
    borderBottomColor: "#EB5A62",
    borderBottomWidth: 2,
    marginVertical: 20,
    fontSize: 16,
  },
  textarea: {
    borderWidth: 2,
    borderColor: "#eb5a62",
    marginVertical: 20,
    fontSize: 16,
    padding: 6,
    textAlignVertical: "top",
  },
  title: { fontSize: 28 },
  btn: {
    borderWidth: 2,
    borderColor: "#EB5A62",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: "25%",
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },
});

export default utils;
