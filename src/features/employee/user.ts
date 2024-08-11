import { useDispatch, useSelector } from "react-redux";
import { getUsers, resetUsers, downloadUsers} from "../../stores/features/userSlice";
import { useState, useEffect } from "react";

export const exportUser = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState<any>(null)

    const {message:messageUser, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && messageUser){
            if(!isLoading){
                setMessage(resetUsers);
                dispatch(getUsers());
            }
        }
    },[messageUser, isSuccess, isLoading])

    const downloadUser = async(datas:any) => {
        dispatch(downloadUsers({
          code:datas.statusCode,
          name:datas.name
        }));
    }

    return {downloadUser, message, isLoading}
}