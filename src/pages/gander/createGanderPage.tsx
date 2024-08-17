import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataGander } from '../../features/gander/gander';

const createGanderPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataGander({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/gander'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createGanderPage