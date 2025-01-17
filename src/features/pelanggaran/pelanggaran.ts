import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createPelanggarans, deletePelanggarans, getPelanggarans, getPelanggaransById, getPelanggaransTable, resetPelanggaran, updatePelanggarans } from "../../stores/features/pelanggaranSlice";
import { useNavigate } from "react-router-dom";

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
                resetPelanggaran();
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        dispatch(getPelanggarans());
    },[])

    return {dataResult}
}

export const getDataPelanggaranTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pelanggaran
    );

    useEffect(()=>{
        dispatch(getPelanggaransTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetPelanggaran());
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

export const createDataPelanggaran = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.pelanggaran
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/pelanggaran');
                dispatch(resetPelanggaran());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPelanggarans({
            name, code, isActive
        }));
    }

    return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const updateDataPelanggaran = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.pelanggaran
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/pelanggaran');
                dispatch(resetPelanggaran());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getPelanggaransById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setCode(data && data.code);
                setIsActive(data && data.isActive ? '1' : '0');
                dispatch(resetPelanggaran());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/pelanggaran');
                dispatch(resetPelanggaran());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePelanggarans({
            uuid, name, code, isActive
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const deleteDataPelanggaran = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.pelanggaran
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/pelanggaran');
                dispatch(resetPelanggaran());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deletePelanggarans({uuid}));
    }

    return {deleteData, isLoading}
}