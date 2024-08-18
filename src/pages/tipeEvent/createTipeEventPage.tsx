import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataTipeEvent } from '../../features/tipeEvent/tipeEvent';

const createTipeEventPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataTipeEvent()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeEvent'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipeEventPage