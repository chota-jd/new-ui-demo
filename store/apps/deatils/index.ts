import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetails } from "@/utils/firebase";
import { deleteBasicDeatils, getbasicDeatils, updateBasicDeatils } from "@/utils/firebase";

export const fetchBasicDeatils = createAsyncThunk(
    "appDeatils/fetchBasicDeatils",
    async () => {
      return await getbasicDeatils();
    }
  );

  export const removeBasicDeatils = createAsyncThunk(
    "appDeatils/removeBasicDeatils",
    async (detailsId: string) => {
        // await deleteBasicDeatils(detailsId);
        return detailsId;
    }
);

  export const editBasicDeatils = createAsyncThunk(
    "appDeatils/editBasicDeatils",
    async ({ detailsId, updatedBasicDeatils }: { detailsId: string; updatedBasicDeatils: Partial<IDetails> }) => {
      await updateBasicDeatils(detailsId, updatedBasicDeatils);
      return { detailsId, updatedBasicDeatils };
    }
  );

  // BasicDeatils slice
export const appBasicDeatilsSlice = createSlice({
    name: "appDeatils",
    initialState: {
        deatils: null as IDetails[] | null,
    },
    reducers: {
      setmedialoadingTrue: (state) => {
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchBasicDeatils.pending, (state, action) => {
        console.log('fetchBasicDeatils.pending action');
      });
  
      //basicDeatils fetched
      builder.addCase(fetchBasicDeatils.fulfilled, (state, action) => {
        state.deatils = action.payload;
        console.log('basicDeatils fetched :', action.payload);
      });
      builder.addCase(fetchBasicDeatils.rejected, (state, action) => {
        console.log('basicDeatils fetching failed:', action.error.message);
      });
  
      //basicDeatils removed
      builder.addCase(removeBasicDeatils.fulfilled, (state, action) => {
        deleteBasicDeatils(action.payload);
        if (state.deatils) {
          state.deatils = state.deatils.filter(
            (deatils) => deatils.id !== action.payload
          );
        }
        console.log('BasicDeatils removed :', action.payload);
      });
  
      //basicDeatils edit
      builder.addCase(editBasicDeatils.fulfilled, (state, action) => {
        if (state.deatils) {
          const { detailsId, updatedBasicDeatils } = action.payload;
          const index = state.deatils.findIndex((deatils) => deatils.id === detailsId);
          if (index !== -1) {
            state.deatils[index] = {
              ...state.deatils[index],
              ...updatedBasicDeatils,
            };
          }
        }
        console.log('basicDeatils edit :', action.payload);
      });
  
    },
  });
  
  export const { setmedialoadingTrue } = appBasicDeatilsSlice.actions;
  export default appBasicDeatilsSlice.reducer;
  


