import React, { useEffect, useState } from "react";
import { DeviceEventEmitter, FlatList, StyleSheet, Text, View } from "react-native";
import MusicFiles from 'react-native-get-music-files'
import Permissions, { PERMISSIONS } from 'react-native-permissions'
import TrackPlayer, { State } from 'react-native-track-player';

const App = () => {

  const [musics, setMusics] = useState([]);

  let effect = async () => {
    await TrackPlayer.setupPlayer({})
    let res = await Permissions.request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    console.log(res);
    // DeviceEventEmitter.addListener(
    //   'onBatchReceived',
    //   (params) => {
    //     console.log(params);
    //     setMusics(params)
    //   }
    // )
    MusicFiles.getAll({
      blured: true, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
      fields: ['title', 'albumTitle', 'genre', 'lyrics', 'artwork', 'duration'] // for iOs Version
    }).then(tracks => {
      console.log(tracks);
      setMusics(tracks)
    }).catch(error => {
      console.log(error);
    })
    return () => {
      DeviceEventEmitter.removeAllListeners();
    }
  }

  useEffect(() => {
    effect()
  }, [])

  let onMusicPress = async (el) => {
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
        TrackPlayer.reset();
    };
    TrackPlayer.add([el])
    TrackPlayer.play();
  }

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={true}
        initialNumToRender={10}
        viewabilityConfig={
          {
            itemVisiblePercentThreshold: 50
          }
        }
        data={musics}
        renderItem={
          (({ item }) => (<Text onPress={() => onMusicPress(item)}>{item.title}</Text>))
        }
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})