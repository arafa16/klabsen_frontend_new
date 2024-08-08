import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersTable, resetUsers } from "../../stores/features/user2Slice";
import { getUsers } from "../../stores/features/userSlice";

export const getDataUserTable = () => {
    const [datas, setDatas] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [statusCode, setStatusCode] = useState(1);
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user2
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDatas(data);
                countData(data.count);
                dispatch(resetUsers());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getUsersTable({
            limit, 
            page, 
            statusCode, 
            search
        }));
    },[page, limit, statusCode, search])

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

    return {
        datas,
        page, setPage,
        limit,setLimit,
        search, setSearch,
        allPage, 
        statusCode, setStatusCode, 
        nextPage, 
        prevPage
    }
}

export const getDataUser = () => {
    const [datas, setDatas] = useState([]);
    const dispatch = useDispatch();

    const {data, isLoading, isSuccess} = useSelector(
        (state : any) => state.user
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDatas(data);
                dispatch(resetUsers());
            }
        }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getUsers());
    },[])

    return {datas}
}