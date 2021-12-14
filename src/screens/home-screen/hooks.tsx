import TrackPlayer, {State} from 'react-native-track-player';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Music, musicLoaded, selectMusics, setMusic} from '../../store/slices/musicSclice';
import Permissions, {PERMISSIONS} from 'react-native-permissions';
//@ts-ignore
import MusicFiles from 'react-native-get-music-files';
import {useEffect} from 'react';
import {
  selectAppLoading,
  toggleAppLoading,
} from '../../store/slices/loadingSlice';

export let useHomeData = () => {
  let dispatch = useAppDispatch();
  let loading = useAppSelector(selectAppLoading);
  let musics = useAppSelector(selectMusics);

  let effect = async () => {
    await TrackPlayer.setupPlayer({});
    let res = await Permissions.request(
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    );
  };

  useEffect(() => {
    effect();
  }, []);
  //@ts-ignore
  let loadMusics = () => {
    toggleLoading();
    MusicFiles.getAll({
      blured: true,
      artist: true,
      duration: true,
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 10000,
      fields: [
        'title',
        'albumTitle',
        'genre',
        'lyrics',
        'artwork',
        'duration',
        'cover',
      ],
    })
      //@ts-ignore
      .then((tracks: Music[]) => {
        console.log(tracks);
        dispatch(musicLoaded(tracks));
      })
      //@ts-ignore
      .catch(error => {
        console.log(error);
      })
      .finally(() => toggleLoading());
  };

  let onMusicPress = async ({
    url,
    album,
    author: artist,
    duration,
    genre,
    title,
  }: Music) => {
    const state = await TrackPlayer.getState();
    dispatch(setMusic(
      {url, album, artist, duration: parseInt(duration), title, genre}
    ))
    if (state === State.Playing) {
      TrackPlayer.reset();
    }
    TrackPlayer.add([
      {url, album, artist, duration: parseInt(duration), title, genre},
    ]);
    TrackPlayer.play();
  };

  let toggleLoading = () => dispatch(toggleAppLoading());


  return {
    onMusicPress,
    musics,
    loadMusics,
    toggleLoading,
    loading,
  };
};
