import ViewKoreksiById from '../../components/koreksi/viewKoreksiById'
import { useParams, useNavigate } from 'react-router-dom'

import {getDataKoreksiById } from '../../features/koreksi/koreksi';

const ViewKoreksi = () => {
  const {id, code} = useParams();
  const navigate = useNavigate();

  const {datas} = getDataKoreksiById({id});

  const clickBack = () => {
    navigate(`/koreksi/user/${code}`);
  }

  return (
    <div>
      <ViewKoreksiById 
        datas={datas}
        clickBack={clickBack}
        isOpen={false}
      />
    </div>
  )
}

export default ViewKoreksi