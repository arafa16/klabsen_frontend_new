import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import SlideOverDate from '../../components/SlideOver/SlideOverDate';
import CalendarUser from "../../components/calendar/calendarUser";

import dayjs from 'dayjs';
// import ButtonAbsen from '../../components/Button/ButtonAbsen';

// import { getMe, resetMeData } from '../../stores/features/meSlice';
// import { getInOutsByUser, createInOutsByAbsenWeb, resetInOuts } from '../../stores/features/inOutsSlice';
// import { createKoreksis, resetKoreksis } from '../../stores/features/koresisSlice';
// import { getPages } from '../../stores/features/pageSlice';
import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
// import { getEvents, resetEvents } from '../../stores/features/eventsSlice';

import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenByUser } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";

const AbsenUser = () => {
    // const [dataUser, setDataUser] = useState<any>([]);
    const [dataEvent, setDataEvent] = useState<any>([]);
    const [dataEventInternal, setDataEventInternal] = useState<any>([]);
    const [message, setMessage] = useState<any>(null)
    // const [viewSlideOver, setViewSlideOver] = useState(false);
    // const [subViewSlideOver, setSubViewSlideOver] = useState(0);
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));
    
    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

    const {dataResult:dataAbsen} = getAbsenByUser(dataMe);

    const {message: messageKoreksi, formKoreksiUser, setOpen, setDataInfo, setDataUser} = SlideOverDateKoreksiUser();
    
    useEffect(()=>{
        setMessage(messageKoreksi);
    },[messageKoreksi]);

    //message
    const messageShow = getMessageShow(message);

    // const [openSlideDate, setOpenSlideDate] = useState(false);
    // const [dataDate, setDataDate] = useState<any>([]);
    // const [msg, setMsg] = useState<any>(null);

    // // useEffect(()=>{
    // //     setDateSetting('2023-04-11');
    // // },[]);

    // //koreksi
    // const [keterangan, setKeterangan] = useState("");

    // const {meData, isMeDataSuccess} = useSelector(
    //     (state: any) => state.meReducer
    // );

    // const {inOuts, messageInOuts, isInOutsSuccess} = useSelector(
    //     (state: any) => state.inOutsReducer
    // );

    // const {events, isEventsSuccess} = useSelector(
    //     (state : any) => state.eventsReducer
    // )

    // useEffect(()=>{
    //     dispatch(getEvents());
    // },[]);

    // useEffect(()=>{
    //     if(isEventsSuccess && events){
    //         // console.log(events, 'event');
    //         setDataEventInternal(events);
    //         dispatch(resetEvents());
    //     }
    // },[events, isEventsSuccess])

    // useEffect(()=>{
    //     dispatch(getMe());
    // },[]);
    
    // useEffect(()=>{
    //     if(meData && isMeDataSuccess){
    //         setDataUser(meData);
    //         // console.log(meData, 'me')
    //     }
    // },[meData, isMeDataSuccess])

    // useEffect(()=>{
    //     if(inOuts && isInOutsSuccess){
    //         console.log(inOuts, 'in out');
    //         setDataAbsen(inOuts);
    //         dispatch(resetInOuts());
    //     }
    // },[inOuts, isInOutsSuccess])

    

    // useEffect(()=>{
    //     if(dataUser.uuid !== undefined){
    //         dispatch(getInOutsByUser({uuid:dataUser && dataUser.uuid}));
    //     }
    // },[dataUser]);

    const clickEvent = async(info : any) => {
        // alert(info.event.groupId);
        // console.log(info.event.groupId, 'kalau');
        // e.preventDefault();
        // if(info.event.groupId === 'absen'){
        //     const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${info.event.id}`);
        //     setDataEvent(response.data);
        //     setViewSlideOver(true);
        //     setSubViewSlideOver(0);
        // }
    }

    // //submit koreksi

    // const {messageKoreksis, isKoreksisSuccess} = useSelector(
    //     (state : any) => state.koreksisReducer
    // )
    
    // useEffect(()=>{
    //     if(messageKoreksis && isKoreksisSuccess){
    //         dispatch(resetKoreksis());
    //         setViewSlideOver(false);
    //         setDataEvent([]);
    //         setKeterangan("");
    //     }
    // },[messageKoreksis, isKoreksisSuccess])

    // const submitKoreksiUser = (e : any) => {
    //     e.preventDefault();
    //     dispatch(createKoreksis({
    //         userId : dataUser.uuid, 
    //         inOutId :  dataEvent.uuid, 
    //         keterangan : keterangan, 
    //         codeStatusKoreksi : 1, 
    //         isActive : 1,
    //         codeStatusInout : 2,
    //     }));
    // }

    // //absen By Web
    // useEffect(()=>{
    //     if(messageInOuts && isInOutsSuccess){
    //         if(dataUser.uuid !== undefined){
    //             dispatch(getInOutsByUser({uuid:dataUser.uuid}));
    //         }
    //         alert(messageInOuts.msg);
    //     }
    // },[messageInOuts, isInOutsSuccess, dataUser])

    // //absen by web
    // const clickAbsen = (codeTipeAbsen :any) => {
    //     const dateNow = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    //     alert(dateNow);
    //     dispatch(createInOutsByAbsenWeb({
    //         userId:dataUser.uuid,
    //         tanggalMulai:dateNow,
    //         tanggalSelesai:dateNow,
    //         //codeTipeAbsen menggunakan kode menin absen
    //         codeTipeAbsen:codeTipeAbsen
    //     }));
    // }

    // useEffect(()=>{
    //     dispatch(getPages({pages : null}))
    //   },[dataUser])

    //click date
    const clickDate = (info : any) => {
        setOpen(true);
        setDataInfo(info);
        setDataUser(dataMe);
    }

    return (
        <>
            {messageShow}
            {formKoreksiUser}
            <div className="grid grid-cols-12 gap-5 mt-5">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="p-5 box">
                        <CalendarUser 
                            dataAbsen = {dataAbsen}
                            dataEventInternal = {dataEventInternal}
                            clickEvent = {clickEvent}
                            clickDate = {clickDate}
                            dateSetting={dateSetting}
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default AbsenUser