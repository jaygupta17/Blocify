"use client";
import { ContractTransactionReceipt, Network, ethers } from "ethers";
import { createContext, useContext, useState ,useEffect } from "react";
import Web3Modal from "web3modal";
import { contractAbi,contractAddress } from "./constants";


const getContract = (type) => {
    const contract = new ethers.Contract(contractAddress,contractAbi,type);
    return contract;
}

export const Web3Context = createContext();
export const Web3Provider = ({children}) => {
    const [account , setAccount] = useState();
    const [isConnected , setIsConnected] = useState(false)
    //create post,etc. functions
    const createPost = async (post) => {
        const {img,descr,id} = post;
        const web3modal = new Web3Modal(id,addr)
        const connection =await web3modal.connect()
        const provider =new ethers.BrowserProvider(connection)
        const signer =await provider.getSigner()
        const contract = getContract(signer);
        try {
            const transaction = await contract.createPost(id,account,img,descr)
            await transaction.wait()
            console.log("success", transaction);
        } catch (error) {
            console.log("fail",error);
        }
    }
    const getposts = async () => {
        const provider = new ethers.JsonRpcProvider()
        const contract = getContract(provider);
        const posts =await contract.userToPosts(account,1);
        console.log(posts);
        return posts;
    }

    const checkIfWalletConnected= async () =>{
        try{
            if (!window.ethereum) {
                return alert("Install metamask")
            }
            const accounts = await window.ethereum.request({method:"eth_accounts",})
            if (accounts.length) {
                setAccount(accounts[0])
                setIsConnected(true)
            }else{
                setIsConnected(false)
            }
        }catch (error) {
            console.log(error);
            setIsConnected(false)
        }
    }

    const connect =async () =>{
       try {
        if (window.ethereum == undefined) {
            setIsConnected(false)
            return alert('Install Metamask')
        }
        const accounts = await window.ethereum.request({method:"eth_requestAccounts",})
            if (accounts.length) {
                setAccount(accounts[0])
                setIsConnected(true)
            }else{
                setIsConnected(false)
            }
       } catch (error) {
        setIsConnected(false)
        console.log(error);
       }
    }

    useEffect(()=>{
        checkIfWalletConnected()
    },[])
    return(
        <Web3Context.Provider value={{account,isConnected,createPost,getposts,connect}}>
            {children}
        </Web3Context.Provider>
    )
}

export const useWeb3 = () => useContext(Web3Context);
