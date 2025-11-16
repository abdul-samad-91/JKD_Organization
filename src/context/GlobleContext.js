"use client";
import { createContext, useContext,  useReducer,  useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // const [theme , setTheme] = useState('light')
    const initialState = {
      theme:'light',
      email:'',
      role:'',
      job:true
    }

    const reducer = (state, action) => {
      switch (action.type) {
        // case 'TOGGLE_THEME':
        //   return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'SET_EMAIL':
          return { ...state, email: action.payload };
        case 'SET_ROLE':
          return { ...state, role: action.payload };
        case 'JOB':
          return { ...state, job: action.payload };
        default:
          return state;
      }
    };

    const [state , dispatch] = useReducer(reducer,initialState);


  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
