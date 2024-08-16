import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPendidikans, resetPendidikan } from "../../stores/features/pendidikanSlice";

export const getDataPendidikanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendidikan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                resetPendidikan();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getPendidikans());
    },[])

    return {dataResult}
}