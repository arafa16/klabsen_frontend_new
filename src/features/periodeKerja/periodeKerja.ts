import { useDispatch, useSelector } from "react-redux";
import { createPeriodeKerjas, deletePeriodeKerjas, getPeriodeKerjas, getPeriodeKerjasById, getPeriodeKerjasTable, resetPeriodeKerja, updatePeriodeKerjas } from "../../stores/features/periodeKerjaSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const getDataPeriodeKerjaSelect = () => {
    const [dataResult, setDataResult] = useState([]);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.group
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetPeriodeKerja());
            }
        }
    })

    useEffect(()=>{
        dispatch(getPeriodeKerjas());
    },[])

    return {dataResult}
}

export const getDataPeriodeKerjaTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    );

    useEffect(()=>{
        dispatch(getPeriodeKerjasTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetPeriodeKerja());
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

export const createDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [bulan, setBulan] = useState('');
    const [tahun, setTahun] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [jumlahHari, setJumlahHari] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createPeriodeKerjas({
            name:name,
            bulan:bulan,
            tahun:tahun,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalSelesai,
            jumlahHari:jumlahHari,
            code:code,
            isActive:isActive
        }));
    }

    return {
        createDataSetting, 
        name, setName, 
        bulan, setBulan,
        tahun, setTahun,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        jumlahHari, setJumlahHari,
        code, setCode, 
        isActive, setIsActive, 
        isLoading
    }
}

export const updateDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const [name, setName] = useState('');
    const [bulan, setBulan] = useState('');
    const [tahun, setTahun] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [jumlahHari, setJumlahHari] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    useEffect(()=>{
        dispatch(getPeriodeKerjasById({uuid}));
    },[uuid]);

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setName(data && data.name);
                setBulan(data && data.bulan);
                setTahun(data && data.tahun);
                setTanggalMulai(data && data.tanggalMulai);
                setTanggalSelesai(data && data.tanggalSelesai);
                setJumlahHari(data && data.jumlahHari)
                setCode(data && data.code)
                setIsActive(data && data.isActive ? '1' : '0')
                dispatch(resetPeriodeKerja());
            }
        }
    },[data, isSuccess, isLoading]);

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePeriodeKerjas({
            uuid:uuid,
            name:name,
            bulan:bulan,
            tahun:tahun,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalSelesai,
            jumlahHari:jumlahHari,
            code:code,
            isActive:isActive
        }));
    }

    return {
        changeDataSetting, 
        name, setName, 
        bulan, setBulan,
        tahun, setTahun,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        jumlahHari, setJumlahHari,
        code, setCode, 
        isActive, setIsActive, 
        isLoading
    }
}

export const deleteDataPeriodeKerja = (datas:any) => {
    const [uuid, setUuid] = useState(datas && datas.uuid);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isSuccess, message, isLoading} = useSelector(
        (state : any) => state.periodeKerja
    )

    useEffect(()=>{
        if(isSuccess && message){
            if(!isLoading){
                navigate('/periodeKerja');
                dispatch(resetPeriodeKerja());
            }
        }
    },[isSuccess, message, isLoading])

    const deleteData = () => {
        dispatch(deletePeriodeKerjas({uuid}));
    }

    return {deleteData, isLoading}
}