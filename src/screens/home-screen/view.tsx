import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {RefreshIcon} from '../../assets/icons/icons';
//@ts-ignore
import PlayerImg from '../../assets/images/playing.png';
import {COLORS} from '../../constants/colors';
import {itemLength, milliSec, titleLength} from '../../utils/musicUtils';
import {useHomeData} from './hooks';
import {styles} from './style';

const HomeView = () => {
  let {musics, loadMusics, onMusicPress, loading} = useHomeData();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Tracks</Text>
        <TouchableOpacity onPress={loadMusics}>
          <RefreshIcon fill={COLORS.tabColor} />
        </TouchableOpacity>
      </View>
      <FlatList
        removeClippedSubviews={true}
        initialNumToRender={10}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        data={musics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.music}
            onPress={() => onMusicPress(item)}>
            <View style={styles.imgBox}>
              <Image source={PlayerImg} style={styles.img} />
              <View style={styles.box}>
                <Text style={styles.musicName}>
                  {titleLength(item.title ? item.title : 'unnamed')}
                </Text>
                <Text style={styles.musicArtist}>
                  {itemLength(item.author ? item.fileName : item.fileName)}
                </Text>
              </View>
            </View>
            <Text style={styles.musicDuration}>{milliSec(item.duration)}</Text>
          </TouchableOpacity>
        )}
      />
      {loading && (
        <View style={styles.modal}>
          <AnimatedLottieView
            source={require('../../assets/lottie/animation.json')}
            autoPlay
            loop            
          />
        </View>
      )}
    </View>
  );
};

export default HomeView;
