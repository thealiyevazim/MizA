import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../configureStore';

let initialState: boolean = false;

let loadingSlice = createSlice({
  initialState,
  name: 'loading',
  reducers: {
    toggleAppLoading: state => {
      return !state;
    },
  },
});

export default loadingSlice.reducer;
export let {toggleAppLoading} = loadingSlice.actions;
export let selectAppLoading = (state: RootState) => state.loading;