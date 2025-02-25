import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});


export const useLoading = () => {
  const dispatch = useDispatch();
  return {
    showLoading: () => dispatch(loadingSlice.actions.showLoading()),
    hideLoading: () => dispatch(loadingSlice.actions.hideLoading()),
  };
};

export default loadingSlice.reducer;
