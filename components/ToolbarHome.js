import { useNavigation } from "@react-navigation/native";
import React from "react";
import colors from "../constants/colors";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ToolbarHome = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.blueColor} />
      <View
        style={{
          backgroundColor: colors.blueColor,
          padding: 12,
          height: 80,
          marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 40, resizeMode: "contain" }}
          source={require("../assets/logo.png")}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              gap: 4,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: 6 }}>
              <AntDesign name="staro" size={26} color={colors.yellowColor} />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginHorizontal: 6 }}>
              <Fontisto name="bell" size={26} color={colors.yellowColor} />
            </TouchableOpacity>
          </View>
        </View>

        <View />
      </View>
    </>
  );
};

export default ToolbarHome;
