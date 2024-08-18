import FormTemplate6 from '../../components/formTemplate/formTemplate6';
import { createDataTipeAbsen } from '../../features/tipeAbsen/tipeAbsen';

const createTipeAbsenPage = () => {

    const {createDataSetting, name, setName, isSelect, setIsSelect, code, setCode, isActive, setIsActive, isLoading} = createDataTipeAbsen()

    return (
        <div>
            <FormTemplate6
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isSelect={isSelect}
                setIsSelect={setIsSelect}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeAbsen'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipeAbsenPage