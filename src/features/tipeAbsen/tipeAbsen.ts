import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTipeAbsens, resetTipeAbsens } from "../../stores/features/tipeAbsenSlice";

export const getTipeAbsen = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess} = useSelector(
        (state : any) => state.tipeAbsen
    );

    useEffect(()=>{
        if(data && isSuccess){
            setDataResult(data);
            resetTipeAbsens();
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getTipeAbsens());
    },[])

    return {dataResult}
}