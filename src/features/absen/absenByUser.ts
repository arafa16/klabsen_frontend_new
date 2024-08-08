import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getInOutsByUser, resetInOuts } from '../../stores/features/inOutSlice';

export const getAbsenByUser = (datas:any) => {
    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState<any>([]);

    const {data, message, isSuccess, isLoading, isError} = useSelector(
        (state: any) => state.inOut
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetInOuts());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(datas.uuid !== undefined){
            dispatch(getInOutsByUser({uuid:datas.uuid}));
        }
    },[datas]);

    return {dataResult}
}

export const getAbsenById = (uuid:any) => {
    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState<any>([]);

    const {data, message, isSuccess, isLoading, isError} = useSelector(
        (state: any) => state.inOut
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetInOuts());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        if(uuid !== undefined){
            dispatch(getInOutsByUser({uuid}));
        }
    },[uuid]);

    return {dataResult}
}