import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJabatans, resetJabatan } from "../../stores/features/jabatanSlice";

export const getDataJabatanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jabatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetJabatan());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getJabatans());
    },[])

    return {dataResult}
}