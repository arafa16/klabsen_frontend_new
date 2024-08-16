import { useDispatch, useSelector } from "react-redux";
import { getStatusPerkawinans } from "../../stores/features/statusPerkawinanSlice";
import { useEffect, useState } from "react";

export const getDataStatusPerkawinanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.statusPerkawinan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
            }
        }
    })

    useEffect(()=>{
        dispatch(getStatusPerkawinans());
    },[])

    return {dataResult}
}