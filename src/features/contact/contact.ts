import { useDispatch, useSelector } from "react-redux";
import { getContacts, resetContact } from "../../stores/features/contactSlice";
import { useEffect, useState } from "react";

export const getDataContactSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.contact
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetContact());
            }
        }
    })

    useEffect(()=>{
        dispatch(getContacts());
    },[])

    return {dataResult}
}