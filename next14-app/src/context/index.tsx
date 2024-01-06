//centralized to data for whole application and share this data to all pages,compnents
//steps 1-create context, 2-create wrapper, 3-export function to deliver context
'use client'
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({children}: {
    children: React.ReactNode
  }) {
    const [name,setName] = useState("Qasir");
    return(
        <AppContext.Provider value={{
            name,
            setName
        }}>
            {children}
        </AppContext.Provider>
    );
  }

export default function useAppContext() {
    return useContext(AppContext);
}