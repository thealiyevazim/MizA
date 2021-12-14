import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {State} from 'react-native-track-player';
import {RootState} from '../configureStore';

export interface Music {
  album: string;
  author: string;
  blur: string;
  cover: string;
  duration: string;
  fileName: string;
  genre: string;
  title: string;
  url: string;
}

export interface InitialState {
  musics: Music[];
  currentMusic: Music | null;
}

let initialState: InitialState = {musics: [], currentMusic: null};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    musicLoaded: (state, action: PayloadAction<Music[]>) => {
      return {...state, musics: action.payload};
    },
    setMusic: (state, action: PayloadAction<Music>) => {
      return {...state, currentMusic: action.payload};
    },
    setNextMusic: state => {
      let currentMusic = null;
      if (state.currentMusic == null) {
        return state;
      }
      let currentIndex = state.musics.findIndex(
        e => e.url === state.currentMusic?.url,
      );
      if (currentIndex + 1 >= state.musics.length) {
        currentIndex = 0;
      } else {
        currentMusic = state.musics[currentIndex + 1];
      }

      return {...state, currentMusic};
    },
  },
});

export let selectMusics = (state: RootState) => state.music.musics;

export let selectCurrentMusic = (state: RootState) => state.music.currentMusic;

export let {musicLoaded, setMusic, setNextMusic} = musicSlice.actions;

export default musicSlice.reducer;
