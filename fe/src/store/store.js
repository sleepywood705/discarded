import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태 설정
const persistedUser = localStorage.getItem('user');
const initialState = {
  isLoggedIn: persistedUser ? true : false,
  user: persistedUser ? JSON.parse(persistedUser) : null,
};

// 로그인 상태를 관리하는 슬라이스 추가
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // 로컬 스토리지에 저장
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user'); // 로컬 스토리지에서 제거
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  }
});

export default store;