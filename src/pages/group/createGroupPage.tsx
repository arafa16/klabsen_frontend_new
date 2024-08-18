import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataGroup } from '../../features/group/group';

const createGroupPage = () => {

    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataGroup()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/group'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createGroupPage