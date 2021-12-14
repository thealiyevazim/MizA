import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { COLORS } from "./src/constants/colors";
import AppRouter from "./src/routes/AppRouter";
import { persistor, store } from "./src/store/configureStore";

const App = () => {
  StatusBar.setBackgroundColor(COLORS.backGroundColor);
  StatusBar.setBarStyle("light-content");
  StatusBar.setHidden(false, 'fade')
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <AppRouter />
      </PersistGate>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  height: {
    height: "100%"
  }
})