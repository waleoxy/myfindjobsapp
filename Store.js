import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  isDetailJob: false,
  detailJob: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_DETAIL_ON": {
      const jobData = action.payload;
      console.log("jb", jobData);
      return { ...state, isDetailJob: true, detailJob: jobData };
    }

    default:
      return state;
  }
};
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
