import KoreksiTableUser from '../../components/koreksi/koreksiTableUser';
import GeneralReportKoreksi from '../../components/koreksi/generalReportKoreksi';

import { getMeAuth } from '../../features/auth/meAuth';
import { getDataKoreksiTableByUser, getGeneralData } from '../../features/koreksi/koreksi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const koreksiUserPage = () => {
  const {code : codeParams} = useParams();

  useEffect(()=>{
    if(codeParams !== undefined){
      setStatusCode(codeParams)
    }
  },[codeParams])

  //get data auth
  const {data: dataMe, loading:loadingMe, message:messageMe} = getMeAuth();

  // get data table
  const {datas, page, limit, allPage, statusCode, setStatusCode, nextPage, prevPage} = getDataKoreksiTableByUser({dataMe});

  //get general data
  const {datas : dataGeneral} = getGeneralData({dataMe})

  const clickStatus = (code:any) => {
    setStatusCode(code)
  }

  return (
    <div>
        <div>
            <GeneralReportKoreksi 
                datas={dataGeneral}
                clickStatus={clickStatus}
            />
        </div>
        <div>
            <KoreksiTableUser 
                datas={datas}
                page={page}
                limit={limit}
                nextPage={nextPage}
                prevPage={prevPage}
                allPage={allPage}
                linkView={'/koreksi/data'}
                linkCreate={'/'}
                statusCode={statusCode}
            />
        </div>
        
    </div>
  )
}

export default koreksiUserPage