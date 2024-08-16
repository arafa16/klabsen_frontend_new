import { useDispatch, useSelector } from "react-redux";
import { getPenempatans, resetPenempatan } from "../../stores/features/penempatanSlice";
import { useEffect, useState } from "react";

export const getDataPenempatanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.penempatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetPenempatan());
            }
        }
    })

    useEffect(()=>{
        dispatch(getPenempatans());
    },[])

    return {dataResult}
}