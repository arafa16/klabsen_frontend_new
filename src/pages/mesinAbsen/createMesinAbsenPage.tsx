import FormTemplate5 from '../../components/formTemplate/formTemplate5';
import { createDataMesinAbsen } from '../../features/mesinAbsen/mesinAbsen';

const createMesinAbsenPage = () => {

    const {createDataSetting, name, setName, ipMesin, setIpMesin, code, setCode, isActive, setIsActive, isLoading} = createDataMesinAbsen()

    return (
        <div>
            <FormTemplate5
                name={name}
                setName={setName}
                ipMesin={ipMesin}
                setIpMesin={setIpMesin}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/mesinAbsen'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createMesinAbsenPage