import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { 
  getEvents, 
  getEventsByMonth, 
  getEventsTable, 
  createEvents, 
  getEventsById,
  updateEvents,
  deleteEvents,
  resetEvents } from "../../stores/features/eventSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { getTipeEvents, resetTipeEvents } from '../../stores/features/tipeEventSlice';

export const eventDataDate = () => {
  const [datas, setDatas] = useState<any>([]);

  const dispatch = useDispatch();

  const {data, isSuccess, isLoading} = useSelector(
    (state : any) => state.event
  )

  useEffect(()=>{
    if(isSuccess && data){
      if(!isLoading){
        setDatas(data);
        dispatch(resetEvents());
      }
    }
  },[data, isSuccess, isLoading])

  useEffect(()=>{
      dispatch(getEvents());
  },[]);

  return {datas}
}

export const eventData = () => {
    const [dataEvents, setDataEvents] = useState<any>([]);
    const [bulan, setBulan] = useState(dayjs(Date.now()).format("M"));
    const [tahun, setTahun] = useState(dayjs(Date.now()).format("YYYY"));
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();
    // get data event

    const {data, isSuccess} = useSelector(
      (state : any) => state.event
    )

    useEffect(()=>{
        dispatch(getEventsByMonth({
          bulan:bulan,
          tahun:tahun,
          limit:limit,
          page:page,
        }));
    },[bulan, tahun, limit, page]);

    useEffect(()=>{
        if(isSuccess && data){
          setDataEvents(data.rows);
          countData(data.count);
          dispatch(resetEvents());
        }
    },[data, isSuccess])

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

    return {dataEvents, page, limit, nextPage, prevPage, allPage}
}

export const eventTable = () => {
  const dispatch = useDispatch();
  const [dataResult, setDataResult] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);

  const {data, isSuccess, isLoading} = useSelector(
      (state : any) => state.event
  )

  useEffect(()=>{
      dispatch(getEventsTable({
          limit, page
      }));
  },[limit, page]);

  useEffect(()=>{
      if(isSuccess && data){
          if(!isLoading){
            setDataResult(data);
            dispatch(resetEvents());
            countData(data.count);
          }
      }
  },[data, isSuccess, isLoading])

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
    dataResult, 
    limit, setLimit, 
    page, setPage, 
    nextPage,
    prevPage,
    allPage
  }
}

export const createDataEvent = () => {
  const [name, setName] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalSelesai, setTanggalSelesai] = useState('');
  const [tipeEventId, setTipeEventId] = useState('');
  const [dataTipeEvents, setDataTipeEvents] = useState([]);
  const [code, setCode] = useState('');
  const [isActive, setIsActive] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
      (state : any) => state.event
  )

  const {data, isSuccess, isLoading} = useSelector(
      (state : any) => state.tipeEvent
  )

  useEffect(()=>{
      if(data && isSuccess){
          if(!isLoading){
              setDataTipeEvents(data);
              dispatch(resetTipeEvents());
          }
      }
  },[data, isSuccess, isLoading])

  useEffect(()=>{
      dispatch(getTipeEvents());
  },[])

  useEffect(()=>{
      if(isEventSuccess && messageEvent){
          if(!isEventLoading){
              navigate('/event');
              dispatch(resetEvents());
          }
      }
  },[isEventSuccess, messageEvent, isEventLoading])

  const submitEvent = (e : any) => {
      e.preventDefault();
      dispatch(createEvents({
          name, 
          bulan:dayjs(tanggalMulai).format('M'),
          tahun:dayjs(tanggalMulai).format('YYYY'),
          tanggalMulai, 
          tanggalSelesai, 
          tipeEventId, 
          code, 
          isActive
      }));
  }

  return {
    name, setName,
    tanggalMulai, setTanggalMulai,
    tanggalSelesai, setTanggalSelesai,
    tipeEventId, setTipeEventId,
    dataTipeEvents, setDataTipeEvents,
    code, setCode,
    isActive, setIsActive,
    submitEvent
  }
}

export const updateDataEvent = (props:any) => {
    const {id} = props;
    const [name, setName] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [tipeEventId, setTipeEventId] = useState('');
    const [dataTipeEvents, setDataTipeEvents] = useState([]);
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');
    const [message, setMessage] = useState<any>(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data: dataEvent, isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
      (state : any) => state.event
    )

    const {data, isSuccess, isLoading} = useSelector(
        (state : any) => state.tipeEvent
    )

    useEffect(()=>{
        dispatch(getEventsById({id}));
    },[]);

    useEffect(()=>{
        if(isEventSuccess && dataEvent){
          if(!isLoading){
            setName(dataEvent && dataEvent.name);
            setTanggalMulai(dayjs(dataEvent && dataEvent.tanggalMulai).format('YYYY-MM-DD HH:mm:ss') );
            setTanggalSelesai(dayjs(dataEvent && dataEvent.tanggalSelesai).format('YYYY-MM-DD HH:mm:ss'));
            setTipeEventId(dataEvent.tipe_event && dataEvent.tipe_event.uuid);
            setCode(dataEvent && dataEvent.code);
            setIsActive(dataEvent && dataEvent.isActive ? '1' : '0');
            dispatch(resetEvents());
          }
        }
    },[dataEvent, isEventSuccess, isLoading]);

    useEffect(()=>{
      if(data && isSuccess){
          if(!isLoading){
              setDataTipeEvents(data);
              dispatch(resetTipeEvents());
          }
      }
    },[data, isSuccess, isLoading])

    useEffect(()=>{
        dispatch(getTipeEvents());
    },[])

    useEffect(()=>{
      if(isEventSuccess && messageEvent){
          if(!isEventLoading){
              setMessage(messageEvent);
              navigate('/event');
              dispatch(resetEvents());
          }
      }
    },[isEventSuccess, messageEvent, isEventLoading])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateEvents({
            id, 
            name, 
            bulan:dayjs(tanggalMulai).format('M'),
            tahun:dayjs(tanggalMulai).format('YYYY'),
            tanggalMulai, 
            tanggalSelesai, 
            tipeEventId, 
            code, 
            isActive
        }));
    }

    return {
      name, setName,
      tanggalMulai, setTanggalMulai,
      tanggalSelesai, setTanggalSelesai,
      tipeEventId, setTipeEventId,
      dataTipeEvents, setDataTipeEvents,
      code, setCode,
      changeDataSetting,
      isActive, setIsActive
    }
}

export const deleteDataEvent = (props:any) => {
  const {id} = props;
  const [message, setMessage] = useState<any>(null)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {data: dataEvent, isSuccess: isEventSuccess, message:messageEvent, isLoading : isEventLoading} = useSelector(
    (state : any) => state.event
  )

  useEffect(()=>{
    if(isEventSuccess && messageEvent){
        if(!isEventLoading){
            setMessage(messageEvent);
            navigate('/event');
            dispatch(resetEvents());
        }
    }
  },[isEventSuccess, messageEvent, isEventLoading])

  const deleteDataSetting = () => {
    dispatch(deleteEvents({
        id
    }));
  }

  return {deleteDataSetting}
}