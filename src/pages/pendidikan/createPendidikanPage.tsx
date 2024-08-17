import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataPendidikan } from '../../features/pendidikan/pendidikan';

const createPendidikanPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataPendidikan({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/pendidikan'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createPendidikanPage