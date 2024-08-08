import { useEffect, useState } from 'react'
import CalendarUser from "../../components/calendar/calendarUser";
import dayjs from 'dayjs';
import { SlideOverDateKoreksiUser } from '../../features/absen/SlideOverDateKoreksiUser';
import { SlideOverDate } from '../../features/absen/SlideOverDate';
import { getMeAuth } from "../../features/auth/meAuth";
import { getAbsenByUser } from "../../features/absen/absenByUser";
import { getMessageShow } from "../../features/messageShow";
import { eventDataDate } from '../../features/event/event';

const AbsenUserPage = () => {
    const [message, setMessage] = useState<any>(null)
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));
    
    //get data event
    const {datas:dataEventInternal} = eventDataDate();

    //get data auth
    const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

    const {dataResult:dataAbsen} = getAbsenByUser(dataMe);

    const {
        message: messageKoreksi, 
        form : formKoreksiUser, 
        setOpen, setDataInfo, 
        setDataUser
    } = SlideOverDateKoreksiUser();

    const {
        form : formSlideOverDate, 
        setOpen : setOpenSlide, 
        setData,
        message : messageDate, setMessage : setMessageDate
    } = SlideOverDate();
    
    useEffect(()=>{
        setMessage(messageKoreksi);
    },[messageKoreksi]);

    //message
    const messageShow = getMessageShow(message);

    const clickEvent = async(info : any) => {
        setData(info);
        setOpenSlide(true)
    }

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
            {formSlideOverDate}
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

export default AbsenUserPage