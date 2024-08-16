import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getPendapatansTableById, 
    getPendapatansTable,
    getPendapatansById, 
    resetPendapatans } from "../../stores/features/pendapatanSlice";
import qrcode from 'qrcode';

export const getDataPendapatansTableById = (datas:any) => {
    const [id, setId] =useState<any>(null);
    const [type, setType] = useState<any>(1);
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    useEffect(()=>{
        setId(datas.me && datas.me.uuid);
        setType(datas.type);
    },[datas])
    
    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendapatan
    );

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetPendapatans());
            }
        }
    },[data]);

    useEffect(()=>{
        if(id !== null){
            dispatch(getPendapatansTableById({limit, page, id, type, search}));
        }
    },[limit, page, id, type, search]);

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

    return {id, setId, type, setType, search, setSearch, dataResult, setDataResult, limit, setLimit, page, setPage, nextPage, prevPage, allPage}
}

export const getDataPendapatansTable = () => {
    const [dataResult, setDataResult] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();
    
    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.pendapatan
    );

    

    useEffect(()=>{
        if(data && isSuccess){
            if(!isLoading){
                setDataResult(data);
                countData(data.count);
                dispatch(resetPendapatans());
            }
        }
    },[data]);

    useEffect(()=>{
        dispatch(getPendapatansTable({limit, page, search}));
    },[limit, page, search]);

    const reload = () => {
        dispatch(getPendapatansTable({limit, page, search}));
    }

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

    return {reload, search, setSearch, dataResult, setDataResult, limit, setLimit, page, setPage, nextPage, prevPage, allPage}
}

export const getDataPendapatansById = (datas:any) => {
    const [id, setId] = useState(datas && datas.id)
    const [linkQr, setLinkQr] = useState('');
    const [data, setData] = useState<any>([]);
    const [totalPendapatan, setTotalPendapatan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);

    const dispatch = useDispatch();

    const generateQR = async (text:any) => {
        try {
            setLinkQr(await qrcode.toDataURL(text))
        } catch (err) {
            console.error(err)
        }
    }

    const {data:pendapatan, isSuccess:isPendapatanSuccess, isLoading:isPendapatanLoading} = useSelector(
        (state : any) => state.pendapatan
    )

    useEffect(()=>{
        if(pendapatan && isPendapatanSuccess){
            if(!isPendapatanLoading){
                setData(pendapatan);
                const totalPengeluaran = Number(pendapatan.zakat) + Number(pendapatan.iuranKoperasi) + Number(pendapatan.potonganPinjaman) + Number(pendapatan.potonganJht) + Number(pendapatan.potonganBpjs)
                                        +Number(pendapatan.potonganPensiun) + Number(pendapatan.adjustmentMinus) + Number(pendapatan.pph21) + Number(pendapatan.tunjanganJht)
                                        +Number(pendapatan.tunjanganPensiun) + Number(pendapatan.tunjanganJkk) + Number(pendapatan.tunjanganJkm) + Number(pendapatan.tunjanganBpjs)
                                        +Number(pendapatan.tax);
                
                const totalPendapatan =  Number(pendapatan.basicSalary) + Number(pendapatan.tunjanganJabatan) + Number(pendapatan.incentive) + Number(pendapatan.kjk)
                                        +Number(pendapatan.rapel) + Number(pendapatan.adjustment) + Number(pendapatan.overtimeAllowance) + Number(pendapatan.tunjanganJht)
                                        +Number(pendapatan.tunjanganPensiun) + Number(pendapatan.tunjanganJkk)+ Number(pendapatan.tunjanganJkm) + Number(pendapatan.tunjanganBpjs)
                                        +Number(pendapatan.tax);
                                        
                setTotalPendapatan(totalPendapatan);
                setTotalPengeluaran(totalPengeluaran);
                generateQR(import.meta.env.VITE_REACT_APP_URL+'/pendapatan/slip/'+pendapatan.uuid);
            }
        }
    },[pendapatan, isPendapatanSuccess, isPendapatanLoading])

    

    useEffect(()=>{
        dispatch(getPendapatansById({id}))
    },[id]);

    return {data, totalPendapatan, totalPengeluaran, generateQR, linkQr}
}