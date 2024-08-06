import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getStatusInout, resetStatusInout } from "../../stores/features/statusInoutSlice";

export const getStatusInOut = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess} = useSelector(
        (state : any) => state.statusInout
    );

    useEffect(()=>{
        if(data && isSuccess){
            setDataResult(data);
            dispatch(resetStatusInout());
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getStatusInout());
    },[])

    return {dataResult}
}