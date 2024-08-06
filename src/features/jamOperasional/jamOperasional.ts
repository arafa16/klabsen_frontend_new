import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJamOperasionals, resetJamOperasionals } from '../../stores/features/jamOperasionalSlice';

export const getJamOperasional = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jamOperasional
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetJamOperasionals());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getJamOperasionals());
    },[])

    return {dataResult}
}