import { useParams} from 'react-router-dom';
import FormEditEvent from '../../components/event/formEditEvent';

import { deleteDataEvent, updateDataEvent } from '../../features/event/event';

const EditEvent = () => {
    const {id} = useParams();
    
    const {
        name, setName,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        tipeEventId, setTipeEventId,
        dataTipeEvents, setDataTipeEvents,
        code, setCode,
        changeDataSetting,
        isActive, setIsActive
    } = updateDataEvent({id})

    const {deleteDataSetting} = deleteDataEvent({id});

    return (
        <div>
            <FormEditEvent
                name={name}
                setName={setName}
                tanggalMulai={tanggalMulai}
                setTanggalMulai={setTanggalMulai}
                tanggalSelesai={tanggalSelesai}
                setTanggalSelesai={setTanggalSelesai}
                tipeEventId={tipeEventId}
                setTipeEventId={setTipeEventId}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                dataTipeEvents={dataTipeEvents}
                linkBack={'/event'}
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditEvent