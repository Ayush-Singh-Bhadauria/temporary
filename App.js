import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import SplashScreen from "./src/screens/SplashScreen";
import Homescreen from "./src/screens/Homescreen";
import QrTicketGeneratorScreen from "./src/screens/QrTicketGeneratorScreen";
import QrTicketScannerScreenPre from "./src/screens/QrTicketScannerScreenPre";

const DrawerNavigation = createDrawerNavigator({
  SplashScreen: SplashScreen,
  Homescreen: Homescreen,
  QrTicketGeneratorScreen: QrTicketGeneratorScreen,
  QrTicketScannerScreenPre: QrTicketScannerScreenPre
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    SplashScreen: SplashScreen,
    Homescreen: Homescreen,
    QrTicketGeneratorScreen: QrTicketGeneratorScreen,
    QrTicketScannerScreenPre: QrTicketScannerScreenPre
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
