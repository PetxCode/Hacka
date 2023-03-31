import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface loginClient {
  email: string;
  password: string;
}

interface userData {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  _id:any
}
interface predict {
  teamAScore : string;
  teamBScore : string;
  amount : number
}



const initialState = {
  Client: {} as any | null,
  Predict: {} as predict | null,
};

const ReduxState = createSlice({
  name: "easyPay",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },
    Predict: (state, { payload }: PayloadAction<predict>) => {
      state.Predict = payload;
    },
    logOut: (state) => {
      state.Client = null;
    },
  },
});

export const { registerClient, logOut , Predict } = ReduxState.actions;

export default ReduxState.reducer;
