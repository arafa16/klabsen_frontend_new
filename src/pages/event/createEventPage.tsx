import FormCreateEvent from '../../components/event/formCreateEvent'
import { createDataEvent } from '../../features/event/event'

const createEvent = () => {
    
    const {
        name, setName,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        tipeEventId, setTipeEventId,
        dataTipeEvents, setDataTipeEvents,
        code, setCode,
        isActive, setIsActive,
        submitEvent
    } = createDataEvent()

    return (
        <div className='text-xs'>
            <FormCreateEvent
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
                submitEvent={submitEvent}
            />
        </div>
    )
}

export default createEvent