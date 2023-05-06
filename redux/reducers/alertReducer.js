import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: {
    successAlertActive: false,
    errorAlertActive: false,
    warningAlertActive: false
  }
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setSuccessAlert: (state) => {
      state.alerts.successAlertActive = !state.alerts.successAlertActive
    },
    setErrorAlert: (state) => {
      state.alerts.errorAlertActive = !state.alerts.errorAlertActive
    },
    setWarningAlert: (state) => {
      state.alerts.warningAlertActive = !state.alerts.warningAlertActive
    },
  },
});

export const { setSuccessAlert, setErrorAlert, setWarningAlert } = alertSlice.actions;

export default alertSlice.reducer;
