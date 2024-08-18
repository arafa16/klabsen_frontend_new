import { useDispatch, useSelector } from "react-redux";
import { createTipePendapatans, deleteTipePendapatans, getTipePendapatans, getTipePendapatansById, getTipePendapatansTable, resetTipePendapatan, updateTipePendapatans } from "../../stores/features/tipePendapatanSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataTipePendapatanSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipePendapatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetTipePendapatan());
            }
        }
    })

    useEffect(()=>{
        dispatch(getTipePendapatans());
    },[])

    return {dataResult}
}

export const getDataTipePendapatanTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipePendapatan
    );

    useEffect(()=>{
        dispatch(getTipePendapatansTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetTipePendapatan());
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

export const createDataTipePendapatan = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipePendapatan
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipePendapatan');
                dispatch(resetTipePendapatan());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipePendapatans({
            name, code, isActive
        }));
    }

    return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const updateDataTipePendapatan = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipePendapatan
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipePendapatan');
                dispatch(resetTipePendapatan());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getTipePendapatansById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setCode(data && data.code);
                setIsActive(data && data.isActive ? '1' : '0');
                dispatch(resetTipePendapatan());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipePendapatan');
                dispatch(resetTipePendapatan());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipePendapatans({
            uuid, name, code, isActive
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const deleteDataTipePendapatan = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipePendapatan
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipePendapatan');
                dispatch(resetTipePendapatan());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteTipePendapatans({uuid}));
    }

    return {deleteData, isLoading}
}