import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../constants/routes';
import TabNavigation from '../screens/tabs';

let Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.TABS} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
