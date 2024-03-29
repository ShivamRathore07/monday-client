import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// SIGNUP USERS
export const updatePrice = createAsyncThunk(
  "price/updatePrice",
  async ({ obj, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/price/64212a2eb090a91a90ce806e`,
        obj,
        {
          withCredentials: true,
        }
      );
      if (response.data.result) {
        navigate("/");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//GET ONE DATA
export const getOneData = createAsyncThunk(
  "price/getOneData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/price/${data}`, {
        withCredentials: true,
      });
      return response.data.price;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
