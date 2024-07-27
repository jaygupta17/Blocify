import {Web3Provider as Web3Default} from "./context";

export const Web3Provider = ({children}) => {
    return(
        <Web3Default>
            {children}
        </Web3Default>
    )
}