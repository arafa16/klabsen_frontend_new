import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeriodeKerjasTableStatus, resetPeriodeKerjas } from "../../stores/features/periodeKerjaSlice";

export const reportAbsenMonth = () => {
    const [dataPeriodeKerjas, setDataPeriodeKerjas] = useState<any>([]);
    const [limitProdeKerja, setLimitProdeKerja] = useState(4);
    const [pagePeriodeKerja, setPagePeriodeKerja] = useState(1);
    const [allPagePeriodeKerja, setAllPagePeriodeKerja] = useState(0);

    const dispatch = useDispatch();

    //get periode data

    const {data, isSuccess, isError} = useSelector(
      (state : any) => state.periodeKerja
    )

    console.log(data, 'periode kerja');

    useEffect(()=>{
      dispatch(getPeriodeKerjasTableStatus({
          limit:limitProdeKerja, 
          page:pagePeriodeKerja,
          isActive:1
      }))
    },[limitProdeKerja, pagePeriodeKerja])

    useEffect(()=>{
        if(data && isSuccess){
            setDataPeriodeKerjas(data);
            console.log()
            countDataPeriodeKerja(data.count)
            dispatch(resetPeriodeKerjas());
        }
    },[data, isSuccess])

    const countDataPeriodeKerja = (allData : any) =>{
      const count = allData / limitProdeKerja;
      setAllPagePeriodeKerja(Math.ceil(count))
    }

    const nextPagePeriodeKerja = () => {
      if(pagePeriodeKerja < allPagePeriodeKerja){
          const count = pagePeriodeKerja + 1;
          setPagePeriodeKerja(count);
      }
    }

    const prevPagePeriodeKerja = () => {
        if(pagePeriodeKerja > 1){
            const count = pagePeriodeKerja - 1;
            setPagePeriodeKerja(count);
        }
    }

    return {dataPeriodeKerjas, nextPagePeriodeKerja, prevPagePeriodeKerja, pagePeriodeKerja, allPagePeriodeKerja}
}