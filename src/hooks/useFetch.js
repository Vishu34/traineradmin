
import {useState, useEffect} from "react"
import axios from "axios"
import { useDebounce } from "./useDebounce"
const useFetch = (url,params)=>{
    // console.log("query fired")
    const [data , setData] = useState([])
    const [loading , setLoading ]= useState(true)
    const [error , setError]= useState({
        status: false,
        message : ""
    })
    const debouncedParams = useDebounce(params ,  1000) //using debounce to add delay in api calls 
    useEffect(()=>{
            ;(async()=>{  //iife to create a async function
            try {
                setLoading(true)
                setError(
                    {
                        status : false,
                        message : ""
                    }
                )
                const response = await axios.get(url,params) //fetching the data
                setData(response.data)
                setLoading(false)
            } catch (error) {
                setError({
                    status : true,
                    message : error.message
                })
                setLoading(false)
            }
        })()   
    },[debouncedParams])
    return [data , error , loading]
}
export {useFetch}