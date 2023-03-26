import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    message: ''
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action) => {
            console.log('show alert:', action.payload);
            state.show = true;
            state.message = action.payload;
        },
        hideAlert: state => {
            state.show = false;
            state.message = '';
        }
    }
});

export const {showAlert, hideAlert} = alertSlice.actions;
export default alertSlice.reducer;