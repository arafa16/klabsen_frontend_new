import { useDispatch, useSelector } from "react-redux";
import { createTipeNotifications, deleteTipeNotifications, getTipeNotifications, getTipeNotificationsById, getTipeNotificationsTable, resetTipeNotification, updateTipeNotifications } from "../../stores/features/tipeNotificationSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataTipeNotificationSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipeNotification
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetTipeNotification());
            }
        }
    })

    useEffect(()=>{
        dispatch(getTipeNotifications());
    },[])

    return {dataResult}
}

export const getDataTipeNotificationTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipeNotification
    );

    useEffect(()=>{
        dispatch(getTipeNotificationsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetTipeNotification());
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

export const createDataTipeNotification = () => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeNotification
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeNotification');
                dispatch(resetTipeNotification());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipeNotifications({
            name, code, isActive
        }));
    }

    return {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const updateDataTipeNotification = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeNotification
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeNotification');
                dispatch(resetTipeNotification());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getTipeNotificationsById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setCode(data && data.code);
                setIsActive(data && data.isActive ? '1' : '0');
                dispatch(resetTipeNotification());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeNotification');
                dispatch(resetTipeNotification());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateTipeNotifications({
            uuid, name, code, isActive
        }));
    }

    return {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading}
}

export const deleteDataTipeNotification = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.tipeNotification
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/tipeNotification');
                dispatch(resetTipeNotification());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteTipeNotifications({uuid}));
    }

    return {deleteData, isLoading}
}