import type { StoreSlice } from '@/app/providers/store/rtk-types';
import type { ICharacters } from '../types/characters-types';
import { createSlice } from '@reduxjs/toolkit';
import { charactersTC } from '../service/characters.service';

const initialState: StoreSlice<ICharacters[]> = {
    data: [],
    error: '',
    loading: false,
};

const charactersSlice = createSlice({
    name: "characters/slice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(charactersTC.pending, (state) => {
                state.loading = true;
            })
            .addCase(charactersTC.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(charactersTC.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Что-то пошло не так';
            })

    }
});

export default charactersSlice.reducer;