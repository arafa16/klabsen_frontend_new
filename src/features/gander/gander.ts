import { useDispatch, useSelector } from "react-redux";
import { getGanders, resetGander } from "../../stores/features/ganderSlice";
import { useEffect, useState } from "react";

export const getDataGanderSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.gander
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetGander());
            }
        }
    })

    useEffect(()=>{
        dispatch(getGanders());
    },[])

    return {dataResult}
}