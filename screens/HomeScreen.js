import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  FontAwesome6,
  Zocial,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../constants/colors";
import ToolbarHome from "../components/ToolbarHome";
import { useNavigation } from "@react-navigation/native";
import CheckBalance from "../components/CheckBalance";
import BottomCorousel from "../components/BottomCorousel";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [balance, setCheckBalance] = useState(false);
  return (
    <SafeAreaView>
      <ToolbarHome />
      <ScrollView
        style={{
          backgroundColor: colors.gray,
          padding: 10,
          height: "100%",
        }}
      >
        <CheckBalance />
        <View style={{ marginTop: 10, gap: 8, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Send")}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <Fontisto name="wallet" size={32} color={colors.blueColor} />
            <Text style={{ fontSize: 16 }}>Send Money</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <MaterialCommunityIcons
              name="file-document-outline"
              size={40}
              color={colors.blueColor}
              style={{ transform: [{ rotateY: "180deg" }] }}
            />

            <Text style={{ fontSize: 16 }}>Bill Pay</Text>
          </View>
        </View>
        <View style={{ marginTop: 4, gap: 8, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <MaterialCommunityIcons
              name="bank-transfer-out"
              size={42}
              color={colors.blueColor}
            />
            <Text numberOfLines={1} style={{ fontSize: 14 }}>
              Banking
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <Fontisto name="wallet" size={32} color={colors.blueColor} />
            <Text style={{ fontSize: 16 }}>Send Money</Text>
          </View>
        </View>
        <View style={{ marginTop: 4, gap: 8, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <Image
              style={{ height: 40, resizeMode: "contain" }}
              source={require("../assets/gvt.png")}
            />
            <Text numberOfLines={1} style={{ fontSize: 14, width: "100%" }}>
              Goverment Payment
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: -5,
                top: -5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>New</Text>
            </View>
            <Image
              style={{ height: 40, resizeMode: "contain" }}
              source={require("../assets/lipa.png")}
            />
            <Text style={{ fontSize: 14, color: colors.blueColor }}>
              Lipa Kwa simu
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 4, gap: 8, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <Zocial name="cart" size={32} color={colors.blueColor} />
            <Text style={{ fontSize: 16 }}>Send Money</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <Fontisto name="world-o" size={32} color={colors.blueColor} />
            <Text numberOfLines={1} style={{ fontSize: 14, width: "100%" }}>
              International Remitance
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 4, gap: 8, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: -5,
                top: -5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>New</Text>
            </View>
            <FontAwesome6
              name="hand-holding-dollar"
              size={34}
              color={colors.blueColor}
            />
            <Text style={{ fontSize: 14, color: colors.blueColor }}>
              Financial Services
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 12,
              borderRadius: 4,
              height: 90,
            }}
          ></View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <BottomCorousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
