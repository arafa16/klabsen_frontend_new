import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataBank } from '../../features/bank/bank';

const createBankPage = () => {
    const {uuid} = useParams();

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataBank({uuid})

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/bank'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createBankPage