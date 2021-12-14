import { useEffect } from 'react';
import TrackPlayer, { State } from 'react-native-track-player';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCurrentMusic, setNextMusic } from '../../store/slices/musicSclice';

export let usePlayerData = () => {
  let dispatch = useAppDispatch();
  let music = useAppSelector(selectCurrentMusic);
  useEffect(() => {
    TrackPlayer.reset();
    if (!music) {
      return;
    }
    let {url, album, author: artist, duration, title, genre} = music;
    TrackPlayer.add([
      {url, album, artist, duration: parseInt(duration), title, genre},
    ]);
    TrackPlayer.play();
  }, [music]);

  let playMusic = async () => {
    if (!music) {
      return;
    }
    let {url, album, author: artist, duration, title, genre} = music;
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      TrackPlayer.pause();
    } else TrackPlayer.play();
    TrackPlayer.add([
      {url, album, artist, duration: parseInt(duration), title, genre},
    ]);
  };

  let onNextPlay = async () => {
    dispatch(setNextMusic());
  };

  return {
    music,
    onNextPlay,
    playMusic,
  };
};
