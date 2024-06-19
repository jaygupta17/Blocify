"use client"

import { useWeb3 } from "@/context"

export const ConnectBtn = () =>{
    const {connect , isConnected,account} =useWeb3()
    return(
        <div className="flex justify-center items-center">
                <button className="bg-blue-600 text-white/90 px-4 py-2" onClick={()=>{
                    if (isConnected) {
                        return
                    }
                    connect()
                }}>{isConnected ? account : "Connect" }</button>
        </div>
    )
}