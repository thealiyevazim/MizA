import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {PlayerScreen} from '../player-screen';

export const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.backGroundColor,
  },

  music: {
    opacity: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: COLORS.boxColor,
    elevation: 5,
    shadowColor: COLORS.tabColor,
    shadowOpacity: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: COLORS.backGroundColor,
  },

  musicName: {
    fontSize: 15,
    color: COLORS.white,
    alignSelf: 'flex-start',
    fontFamily: 'Ubuntu-Regular',
  },

  musicArtist: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.white,
    alignSelf: 'flex-start',
    fontFamily: 'Ubuntu-Regular',
  },

  musicDuration: {
    fontSize: 14,
    color: COLORS.white,
    alignSelf: 'flex-end',
    fontFamily: 'Ubuntu-Medium',
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },

  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  box: {
    alignItems: 'flex-start',
  },

  imgBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTxt: {
    fontSize: 25,
    marginVertical: 20,
    color: COLORS.tabColor,
    fontFamily: 'Ubuntu-Medium',
  },

  header: {
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
