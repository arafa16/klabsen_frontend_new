import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataStatusPerkawinan } from '../../features/statusPerkawinan/statusPerkawinan';

const createStatusPerkawinanPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataStatusPerkawinan({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/statusPerkawinan'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createStatusPerkawinanPage