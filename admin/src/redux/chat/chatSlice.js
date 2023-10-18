import { createSlice } from "@reduxjs/toolkit";

const initChat = {
  chatRooms: [],
  messages: [],
};

const chatSlice = createSlice({
  initialState: initChat,
  name: "chat",
  reducers: {
    fetchAllChatRoomStart(state) {
      state.loading = true;
    },
    fetchAllChatRoomSuccessfully(state, action) {
      state.loading = false;
      state.chatRooms = action.payload;
    },
    fetchAllChatRoomFailed(state) {
      state.loading = false;
    },
    getRoomMessage(state, action) {
      state.messages = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;

export const selectChatRoomList = (state) => state.chat.chatRooms;
export const selectMessage = (state) => state.chat.messages;

const chatReducer = chatSlice.reducer;

export default chatReducer;
