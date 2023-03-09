import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Reducers/userReducer";
import priceReducer from "./Reducers/priceReducer"
import stripePaymentReducer from "./Reducers/stripeReducer"

export const store = configureStore({
    reducer: {
      // reducer
      userReducer,
      priceReducer,
      stripePaymentReducer,
    },
  });


