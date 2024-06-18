
import {ethers} from "ethers";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractAbi = [];

export const getContract = (type) => {
    const contract =new ethers.Contract(contractAddress,contractAbi, type);
    return contract;
}

