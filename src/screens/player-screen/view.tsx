import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  NextTrackIcon,
  PauseIcon,
  PlayIcon,
  PreviousTrackIcon,
} from '../../assets/icons/icons';
import PlayerImg from '../../assets/images/playing.png';
import {COLORS} from '../../constants/colors';
import {usePlayerData} from './hooks';
import {styles} from './style';

const PlayerView = () => {
  const [playIcon, setPlayIcon] = useState(true);
  let {playMusic, music, onNextPlay} = usePlayerData();
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Image source={PlayerImg} style={styles.image} />
        <Text style={styles.item}>
          {music.title ? music?.fileName : 'unnamed'}
        </Text>
        <Text style={styles.item}>
          {music.author ? music.fileName : music.fileName}
        </Text>
      </View>
      <View style={styles.controller}>
        <TouchableOpacity hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}>
          <PreviousTrackIcon fill={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPlayIcon(!playIcon);
            playMusic(music);
          }}
          hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}>
          {playIcon ? (
            <PauseIcon fill={COLORS.white} />
          ) : (
            <PlayIcon fill={COLORS.white} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNextPlay()}
          hitSlop={{left: 20, right: 20, top: 20, bottom: 20}}>
          <NextTrackIcon fill={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerView;
