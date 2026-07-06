import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        count: 0,
    },
    reducers: {
        addCount: (state) => {
            state.count++;
        },
        minusCount: (state) => {
            if (state.count > 0) {
                state.count--;
            }
        }
    },
});
export const {
    addCount,
    minusCount
} = todoSlice.actions;

export default todoSlice.reducer;