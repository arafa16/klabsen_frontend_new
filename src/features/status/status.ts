import { useDispatch, useSelector } from "react-redux";
import { getStatus, resetStatus } from "../../stores/features/statusSlice";
import { useEffect, useState } from "react";

export const getDataStatusSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.status
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetStatus());
            }
        }
    })

    useEffect(()=>{
        dispatch(getStatus());
    },[])

    return {dataResult}
}