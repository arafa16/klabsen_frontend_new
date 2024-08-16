import { useDispatch, useSelector } from "react-redux";
import { getGolonganDarahs, resetGolonganDarah } from "../../stores/features/golonganDarahSlice";
import { useEffect, useState } from "react";

export const getDataGolonganDarahSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.golonganDarah
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetGolonganDarah());
            }
        }
    })

    useEffect(()=>{
        dispatch(getGolonganDarahs());
    },[])

    return {dataResult}
}