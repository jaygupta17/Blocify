"use client";

import { ethers } from "ethers";
import { createContext, useContext, useState } from "react";

const Web3Context = createContext();
export const Web3Provider = ({children}) => {
    const [account , setAccount] = useState({name:"jay"})
    // const connect = () =>{
    //     if (window.ethereum == undefined) {
    //         return alert('Install Metamask')
    //     }
    //     const provider = ethers.BrowserProvider(window.ethereum);
    //     provider.send("eth_requestAccounts" , []).the
    // }
    return(
        <Web3Context.Provider value={{account}}>
            {children}
        </Web3Context.Provider>
    )
}

export const useWeb3 = () => useContext(Web3Context);
