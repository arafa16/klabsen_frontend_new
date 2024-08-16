import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJamOperasionalGroups, resetJamOperasionalGroup } from '../../stores/features/jamOperasionalGroupSlice';

export const getDataJamOperasionalGroup = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.jamOperasionalGroup
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetJamOperasionalGroup());
            }
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getJamOperasionalGroups());
    },[])

    return {dataResult}
}