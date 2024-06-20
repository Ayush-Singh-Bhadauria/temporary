import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithActionButton from "../components/CupertinoHeaderWithActionButton";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";

function Homescreen(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithActionButton
        leftIconName="ios-arrow-back"
        leftText="Back"
        leftIcon="ios-options"
        leftText=" "
        title="Event Easy"
        rightText="Contact"
        style={styles.cupertinoHeaderWithActionButton}
      ></CupertinoHeaderWithActionButton>
      <CupertinoButtonInfo1
        caption="QR Ticket Generator "
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo1>
      <CupertinoButtonInfo1
        caption="QR Ticket Scanner "
        style={styles.cupertinoButtonInfo2}
      ></CupertinoButtonInfo1>
      <CupertinoButtonInfo1
        caption="More Coming Soon....."
        style={styles.cupertinoButtonInfo3}
      ></CupertinoButtonInfo1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithActionButton: {
    height: 44,
    width: 375,
    marginTop: 46,
    alignSelf: "center"
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 349,
    marginTop: 32,
    marginLeft: 13
  },
  cupertinoButtonInfo2: {
    height: 44,
    width: 349,
    marginTop: 15,
    marginLeft: 13
  },
  cupertinoButtonInfo3: {
    height: 44,
    width: 349,
    marginTop: 12,
    marginLeft: 13
  }
});

export default Homescreen;
