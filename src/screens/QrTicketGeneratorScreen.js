import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CupertinoHeaderWithActionButton1 from "../components/CupertinoHeaderWithActionButton1";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function QrTicketGeneratorScreen(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithActionButton1
        title="Title"
        rightText="Contact"
        title="Event Easy"
        style={styles.cupertinoHeaderWithActionButton1}
      ></CupertinoHeaderWithActionButton1>
      <CupertinoButtonInfo1
        caption="Choose Input File"
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo1>
      <CupertinoButtonInfo
        caption="Choose Output Folder"
        style={styles.cupertinoButtonInfo2}
      ></CupertinoButtonInfo>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/download_(1).jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.qrTicketGenerator}>QR Ticket Generator</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton1: {
    height: 44,
    width: 375,
    marginTop: 46,
    marginLeft: 1
  },
  cupertinoButtonInfo1: {
    width: 174,
    height: 44,
    marginTop: 416,
    marginLeft: 100
  },
  cupertinoButtonInfo2: {
    width: 174,
    height: 44,
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 101
  },
  image: {
    top: 0,
    left: 58,
    width: 200,
    height: 200,
    position: "absolute"
  },
  qrTicketGenerator: {
    top: 186,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35
  },
  imageStack: {
    width: 317,
    height: 228,
    marginTop: -452,
    marginLeft: 30
  }
});

export default QrTicketGeneratorScreen;
