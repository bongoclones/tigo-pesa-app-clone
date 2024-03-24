import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import colors from "../constants/colors";

export const views1 = [
  //change imgurl to url you wnt
  {
    imgUrl: "https://picsum.photos/200/300?random=1",
    title: "TANQR, new payment system",
    description:
      "Make payment to merchants from all nextworks and banks through the new payment system of TANQR (Tanzania Quick Response Code",
  },
  {
    imgUrl: "https://picsum.photos/200/300?random=3",
    title: "Nivushe Plus",
    description:
      "This is bigger and better!! Unlock what you are worth with More Money from Nivushe Plus.",
  },
  {
    imgUrl: "https://picsum.photos/200/300?random=5",
    title: "Tigo Pesa Mastercard",
    description: "MPYA!!! Malipo kidigitali na Tigo Pesa MasterCard! ",
  },
  {
    imgUrl: "https://picsum.photos/200/300?random=7",
    title: "No Levy on Transfers",
    description:
      "The goverment has removed levy on transfers effective 1st july",
  },
  {
    imgUrl: "https://picsum.photos/200/300?random=9",
    title: "Pay Tip",
    description:
      "NEW DIGITAL TIP!! Now customers can a Tip to a waiter/waitress when paying for products and services",
  },

  {
    imgUrl: "https://picsum.photos/200/300?random=9",
    title: "LiPA kwa simu",
    description:
      "Now all bussiness are enjoying the new merchant payment solution Lipa Kwa Simu, which enables bussness to receive payments from all networks",
  },
];

const BottomCorousel = () => {
  const width = Dimensions.get("window").width;
  return (
    <Carousel
      // ref={(c) => { this. = c; }}
      data={views1}
      loop={true}
      renderItem={ItemCard}
      sliderWidth={width}
      autoplay={true}
      firstItem={1}
      autoplayInterval={3000}
      itemWidth={width}
      slideStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

const ItemCard = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 4,
        marginTop: 10,
        padding: 10,
        width: "95%",
        backgroundColor: colors.blueColor,
        flexDirection: "row",
        marginBottom: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{ color: colors.yellowColor, fontSize: 22, fontWeight: "700" }}
        >
          {item.title}
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{item.description}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* <Image
          style={{ height: 100, width: 100, resizeMode: "contain" }}
          source={{ uri: item.imgUrl }}
        /> */}
      </View>
    </View>
  );
};

export default BottomCorousel;
