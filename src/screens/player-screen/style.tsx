import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.backGroundColor,
  },

  controller: {
    marginHorizontal: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },

  item: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Ubuntu-Regular',
  },

  infoBox: {
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderColor: COLORS.white,
  },
});
