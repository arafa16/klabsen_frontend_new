import { useDispatch, useSelector } from "react-redux";
import { getBanks, resetBank } from "../../stores/features/bankSlice";
import { useEffect, useState } from "react";

export const getDataBankSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.bank
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetBank());
            }
        }
    })

    useEffect(()=>{
        dispatch(getBanks());
    },[])

    return {dataResult}
}