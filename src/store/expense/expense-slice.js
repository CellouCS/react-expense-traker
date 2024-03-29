import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000, //initial amount of money in the account
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
    },
    incrementCountActionPerformed: (state, action) => {
      state.countActionPerformed++;
    },
  },
});

export const { addExpense, setIncome, incrementCountActionPerformed } =
  expenseSlice.actions;
