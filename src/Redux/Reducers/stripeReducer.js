import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { stripePaymentCheckout} from "../Actions/stripeAction";

const StripePaymentReducer = createSlice({
  name: "stripe",
  initialState: {
    loader: false,
    error: "",
    success: "",
  },

  extraReducers: {
    /* -------------------------- User Signup -------------------------- */
    [stripePaymentCheckout.pending]: (state, action) => {
      state.loader = true;
    },
    [stripePaymentCheckout.fulfilled]: (state, action) => {
      state.loader = false;
    },
    [stripePaymentCheckout.rejected]: (state, action) => {
      state.loader = false;
      toast.error(action.payload.message);
    },
  },
});

// export default
export default StripePaymentReducer.reducer;
