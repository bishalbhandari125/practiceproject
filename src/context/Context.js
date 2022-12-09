import React,{useState , useEffect} from 'react'
import axios from 'axios'

const rootUrl = 'https://localhost:5000';

const DataContext = React.createContext();

const DataProvider = ({children}) => {
    const [details , setDetails] = useState({})

    return(
        <DataContext.Provider value={{}}>{children}</DataContext.Provider>
    )

}
export { DataContext , DataProvider }