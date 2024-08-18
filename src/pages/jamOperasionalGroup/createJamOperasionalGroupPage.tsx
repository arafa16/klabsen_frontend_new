import FormTemplate4 from '../../components/formTemplate/formTemplate4';
import { createDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';

const createJamOperasionalGroupPage = () => {
    
    const {createDataSetting, name, setName, keterangan, setKeterangan, code, setCode, isActive, setIsActive, isLoading} = createDataJamOperasionalGroup()

    return (
        <div>
            <FormTemplate4
                name={name}
                setName={setName}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
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