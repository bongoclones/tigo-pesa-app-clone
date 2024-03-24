import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import { Fontisto } from "@expo/vector-icons";

const CheckBalance = () => {
  const navigation = useNavigation();
  const [balance, setCheckBalance] = useState(false);
  const [balanceView, setBalanceView] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleConfirm = () => {
    setLoading(true);
    setTimeout(function () {
      setBalanceView(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
          position: "absolute",
        }}
      >
        <Modal
          animationType="fade"
          transparent
          visible={balance}
          onRequestClose={() => setCheckBalance(!balance)}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setCheckBalance(false);
              setBalanceView(false);
            }}
          >
            <View style={styles.centeredView}>
              {loading && (
                <ActivityIndicator
                  style={[
                    styles.modalView,
                    {
                      backgroundColor: balanceView ? colors.yellow : "white",
                      width: "95%",
                      height: 220,
                    },
                  ]}
                  size="large"
                  color={colors.blueColor}
                />
              )}
              {balanceView && !loading && (
                <View
                  style={[
                    styles.modalView,
                    {
                      backgroundColor: balanceView ? colors.yellow : "white",
                    },
                  ]}
                >
                  <Fontisto
                    style={{ marginVertical: 10 }}
                    name="wallet"
                    size={40}
                    color={colors.blueColor}
                  />

                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      color: colors.blueColor,
                    }}
                  >
                    Your Balance is:
                  </Text>
                  <Text
                    style={{
                      marginTop: 12,
                      fontSize: 28,
                      fontWeight: "500",
                      color: colors.blueColor,
                    }}
                  >
                    Tsh 35,667
                  </Text>
                </View>
              )}

              {!balanceView && !loading && (
                <View style={[styles.modalView, { backgroundColor: "white" }]}>
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    Check Balance
                  </Text>
                  <Text
                    style={{ marginTop: 12, fontSize: 18, fontWeight: "500" }}
                  >
                    Tigo pesa PIN
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 12,
                      marginVertical: 10,
                    }}
                  >
                    <TextInput
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        height: 45,
                        width: 45,
                      }}
                    />
                    <TextInput
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        height: 45,
                        width: 45,
                      }}
                    />
                    <TextInput
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        height: 45,
                        width: 45,
                      }}
                    />
                    <TextInput
                      style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        height: 45,
                        width: 45,
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: "row", gap: 12 }}>
                    <Pressable
                      style={{
                        borderRadius: 4,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: "gray",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => setCheckBalance(false)}
                    >
                      <Text style={{ color: "white", fontSize: 16 }}>
                        CANCEL
                      </Text>
                    </Pressable>
                    <Pressable
                      style={{
                        borderRadius: 4,
                        padding: 10,
                        elevation: 2,
                        backgroundColor: "green",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={handleConfirm}
                    >
                      <Text style={{ color: "white", fontSize: 16 }}>
                        CONFIRM
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}

              {balanceView && (
                <Text
                  style={{
                    marginTop: 12,
                    color: "white",
                    fontSize: 20,
                    fontWeight: "400",
                    letterSpacing: 1,
                  }}
                >
                  Tap anywhere to close
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>

      <TouchableOpacity
        onPress={() => setCheckBalance(true)}
        style={{
          backgroundColor: colors.yellowColor,
          paddingVertical: 10,

          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          gap: 8,
        }}
      >
        <Fontisto name="wallet" size={24} color={colors.blueColor} />
        <Text style={{ fontSize: 14, color: colors.blueColor }}>
          Check Balance (Free)
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CheckBalance;
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
