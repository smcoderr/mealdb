import { createContext, useReducer } from "react";

const DispatchContext = createContext();
const StateContext = createContext();
const AppProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const reducer = (state, action) => {
    // console.log('action',action.payload.img)
    switch (action.type) {
      case "add_to_cart":
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };

      default: {
        return state
      }
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
//   console.log('state', state)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
export { AppProvider, DispatchContext, StateContext };
