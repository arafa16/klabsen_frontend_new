import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createTipeAbsens, deleteTipeAbsens, getTipeAbsens, getTipeAbsensById, getTipeAbsensTable, resetTipeAbsen, updateTipeAbsens } from "../../stores/features/tipeAbsenSlice";
import { useNavigate } from "react-router-dom";

export const getTipeAbsen = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch(); 

    const {data, isSuccess} = useSelector(
        (state : any) => state.tipeAbsen
    );

    useEffect(()=>{
        if(data && isSuccess){
            setDataResult(data);
            resetTipeAbsen();
        }
    },[data, isSuccess])

    useEffect(()=>{
        dispatch(getTipeAbsens());
    },[])

    return {dataResult}
}

export const getDataTipeAbsenTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipeAbsen
    );

    useEffect(()=>{
        dispatch(getTipeAbsensTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetTipeAbsen());
            }
        }
    },[data, isSuccess, isLoading]);

    //table
    const countData = (allData : any) =>{
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const nextPage = () => {
        if(page < allPage){
            const count = page + 1;
            setPage(count);
        }
    }

    const prevPage = () => {
        if(page > 1){
            const count = page - 1;
            setPage(count);
        }
    }

    return {dataResult, nextPage, prevPage, page, allPage}
}

export const createDataTipeAbsen = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isSelect, setIsSelect] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeAbsen');
                dispatch(resetTipeAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipeAbsens({
            name, isSelect, code, isActive
        }));
    }

    return {createDataSetting, name, setName, isSelect, setIsSelect, code, setCode, isActive, setIsActive, isLoading}
}

export const updateDataTipeAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isSelect, setIsSelect] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeAbsen');
                dispatch(resetTipeAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getTipeAbsensById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setCode(data && data.code);
                setIsSelect(data && data.isSelect ? '1' : '0');
                setIsActive(data && data.isActive ? '1' : '0');
                dispatch(resetTipeAbsen());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeAbsen');
                dispatch(resetTipeAbsen());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipeAbsens({
            uuid, isSelect, name, code, isActive
        }));
    }

    return {changeDataSetting, name, setName, isSelect, setIsSelect, code, setCode, isActive, setIsActive, isLoading}
}

export const deleteDataTipeAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeAbsen');
                dispatch(resetTipeAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteTipeAbsens({uuid}));
    }

    return {deleteData, isLoading}
}