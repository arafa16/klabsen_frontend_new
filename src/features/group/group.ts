import { useDispatch, useSelector } from "react-redux";
import { getGroups, resetGroups } from "../../stores/features/groupSlice";
import { useEffect, useState } from "react";

export const getDataGroupSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.group
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetGroups());
            }
        }
    })

    useEffect(()=>{
        dispatch(getGroups());
    },[])

    return {dataResult}
}