import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPelanggarans, resetPelanggarans } from "../../stores/features/pelanggaranSlice";

export const getPelanggaran = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pelanggaran
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                resetPelanggarans();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getPelanggarans());
    },[])

    return {dataResult}
}