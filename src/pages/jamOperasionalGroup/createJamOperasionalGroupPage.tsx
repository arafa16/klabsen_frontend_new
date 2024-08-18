import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';

const createJamOperasionalGroupPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataJamOperasionalGroup({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasionalGroup'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createJamOperasionalGroupPage