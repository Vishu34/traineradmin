import { useState } from "react"
import axios from "axios"

const useFetchOnce = (url)=>{
    const [data , setData] = useState([])
    const [loading , setLoading ]= useState(true)
    const [error , setError]= useState({
        status: false,
        message : ""
    })
    const Fetch = async(id)=>{
        try {
            setLoading(true)
            setError(
                {
                    status : false,
                    message : ""
                }
            )
            const response = await axios.get(`${url}${id}`) //fetching the data
            setData(response.data)
            setLoading(false)
        } catch (error) {
            setError({
                status : true,
                message : error.message
            })
            setLoading(false)
        }
    }
    return [Fetch, data , loading , error]
}

export {useFetchOnce}