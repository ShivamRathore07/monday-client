import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//GET ONE DATA
export const stripePaymentCheckout = createAsyncThunk(
    "stripe/stripePaymentCheckout",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/payment/create-checkout-session`,data,{
          withCredentials: true
        });
        if(response.data.url){
            window.location.href=response.data.url
        }
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );