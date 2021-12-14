import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {HomeIcon, PlayerIcon} from '../../assets/icons/icons';
import {COLORS} from '../../constants/colors';
import {ROUTES} from '../../constants/routes';
import {STRINGS} from '../../constants/strings';
import {HomeScreen} from '../home-screen';
import {PlayerScreen} from '../player-screen';

let Tab = createBottomTabNavigator();

const TabNavigation = () => {
  let renderTabIcon = useCallback((Component: React.FC<SvgProps>) => {
    return (props: {focused: boolean; color: string; size: number}) => {
      let {color, focused, size} = props;

      return <Component fill={color} width={size} height={size} />;
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        headerShown: false,
        tabBarActiveTintColor: COLORS.tabColor,
        tabBarInactiveTintColor: COLORS.white,
        tabBarActiveBackgroundColor: COLORS.backGroundColor,
        tabBarInactiveBackgroundColor: COLORS.backGroundColor,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: renderTabIcon(HomeIcon),
          tabBarLabel: STRINGS.HOME,
        }}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: renderTabIcon(PlayerIcon),
          tabBarLabel: STRINGS.PLAYER,
        }}
        name={ROUTES.PLAYER_SCREEN}
        component={PlayerScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: COLORS.backGroundColor,
    borderWidth: 1,
    height: 70,
  },

  label: {
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Ubuntu-Medium',
    marginBottom: 7,
  },
});
