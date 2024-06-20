import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/2530852.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.eventEasy}>Event Easy</Text>
        <CupertinoButtonInfo
          caption="START"
          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 774,
    height: 649,
    marginTop: 81,
    marginLeft: -199
  },
  image_imageStyle: {},
  eventEasy: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 50,
    marginTop: 398,
    marginLeft: 267
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 169,
    borderRadius: 36,
    marginTop: 20,
    marginLeft: 304
  }
});

export default SplashScreen;
