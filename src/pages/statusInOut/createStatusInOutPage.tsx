import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataStatusInOut } from '../../features/statusInOut/statusInOut';

const createStatusInOutPage = () => {

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataStatusInOut()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/statusInOut'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createStatusInOutPage