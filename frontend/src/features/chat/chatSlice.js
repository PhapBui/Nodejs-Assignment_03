import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, saveToStorage } from "../../util/localStorage";

const roomId = getFromStorage("roomId", null);

// Initial chat state
const initState = { roomId: roomId, messages: [] };

export const chatSlice = createSlice({
  name: "chat",
  initialState: initState,
  reducers: {
    createNewRoom(state, action) {
      state.roomId = action.payload._id;
      saveToStorage("roomId", state.roomId);
    },
    getRoom(state, action) {
      state.messages = action.payload.messages;
      state.roomId = action.payload._id;
      saveToStorage("roomId", state.roomId);
    },
  },
});

// Action creators are generated for each case reducer function
export const chatActions = chatSlice.actions;

// Selector
export const selectRoomId = (state) => state.chat.roomId;
export const selectMessages = (state) => state.chat.messages;

const chatReducer = chatSlice.reducer;

export default chatReducer;
