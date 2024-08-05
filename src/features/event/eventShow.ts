import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getEvents, getEventsByMonth, resetEvents } from "../../stores/features/eventSlice";
import { useDispatch, useSelector } from "react-redux";

export const eventData = () => {
    const [dataUser, setDataUser] = useState<any>([]);
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

    console.log(allPage, bulan, tahun);

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