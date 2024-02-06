import axios from "axios"
import swal from "sweetalert"
const useDeleteOne = ()=>{

    const Delete = async(url)=>{
        try {
            const response = await axios.delete(url)
            if(response){
                swal("User Deleted SuccessFully!!!")
            }
        } catch (error) {
            return error
        }
    }
    return {Delete}
    
}
export {useDeleteOne}