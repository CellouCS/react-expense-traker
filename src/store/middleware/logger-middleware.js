import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpense,
  setIncome,
  incrementCountActionPerformed,
} from "store/expense/expense-slice";
export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  //   predicate: () => {
  //     return true; // log all actions
  //   },
  matcher: isAnyOf(addExpense, setIncome),
  effect: async (action, listenerAPI) => {
    console.log(action);
    listenerAPI.dispatch(incrementCountActionPerformed());
    console.log(listenerAPI.getState());
  },
});
