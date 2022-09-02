import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RK from "store/reducer-keys";
import requestHelper, { RequestStuation as RS } from "helpers/request-helper";
import IGameServiceState from "./entities/IGameServiceState";

const initialState: IGameServiceState = {
  data: null,
  loading: RS.PENDING,
  current_req_id: "",
  error: null,
};

export const fetchGameList = createAsyncThunk(
  RK.Game.FETCH_LIST,
  async (_, { rejectWithValue }) => {
    try {
      const list = await requestHelper.get(
        "/games?page=1&page_size=10&ordering=released"
      );
      return list.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const GamesSlice = createSlice({
  name: RK.Game._,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGameList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = RS.FINISHED;
    });

    builder.addCase(fetchGameList.pending, (state) => {
      state.loading = RS.PENDING;
    });

    builder.addCase(fetchGameList.rejected, (state, action) => {
      state.error = action.error;
      state.loading = RS.ERROR;
    });
  },
});

export default GamesSlice.reducer;
