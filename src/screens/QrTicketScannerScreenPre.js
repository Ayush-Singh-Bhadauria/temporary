import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CupertinoHeaderWithActionButton1 from "../components/CupertinoHeaderWithActionButton1";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";

function QrTicketScannerScreenPre(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithActionButton1
        title="Title"
        rightText=" Contact"
        title="Event Easy"
        style={styles.cupertinoHeaderWithActionButton1}
      ></CupertinoHeaderWithActionButton1>
      <CupertinoButtonInfo1
        caption="Start Scanning"
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo1>
      <Text style={styles.qrTicketScanner}>QR Ticket Scanner</Text>
      <Image
        source={require("../assets/images/Barcode_Scanner_free_icons_designed_by_Pixel_perfect.jpeg")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
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
  qrTicketScanner: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35,
    marginTop: -206,
    marginLeft: 43
  },
  image2: {
    width: 200,
    height: 200,
    marginTop: -260,
    marginLeft: 87
  }
});

export default QrTicketScannerScreenPre;
