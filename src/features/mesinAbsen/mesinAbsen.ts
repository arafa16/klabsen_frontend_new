import { useDispatch, useSelector } from "react-redux";
import { createMesinAbsens, deleteMesinAbsens, getMesinAbsensById, getMesinAbsensTable, resetMesinAbsen, updateMesinAbsens } from "../../stores/features/mesinAbsenSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataMesinAbsenTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    );

    useEffect(()=>{
        dispatch(getMesinAbsensTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetMesinAbsen());
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

export const createDataMesinAbsen = () => {
    const [name, setName] = useState('');
    const [ipMesin, setIpMesin] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createMesinAbsens({
            name, ipMesin, code, isActive
        }));
    }

    return {createDataSetting, name, setName, ipMesin, setIpMesin, code, setCode, isActive, setIsActive, isLoading}
}

export const updateDataMesinAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [ipMesin, setIpMesin] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getMesinAbsensById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setIpMesin(data && data.ipMesin);
                setCode(data && data.code);
                setIsActive(data && data.isActive ? '1' : '0');
                dispatch(resetMesinAbsen());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateMesinAbsens({
            uuid, name, ipMesin, code, isActive
        }));
    }

    return {changeDataSetting, name, setName, ipMesin, setIpMesin, code, setCode, isActive, setIsActive, isLoading}
}

export const deleteDataMesinAbsen = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.mesinAbsen
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/mesinAbsen');
                dispatch(resetMesinAbsen());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deleteMesinAbsens({uuid}));
    }

    return {deleteData, isLoading}
}