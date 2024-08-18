import { useParams } from 'react-router-dom';
import FormTemplate2 from '../../components/formTemplate/formTemplate2';
import { createDataJamOperasional } from '../../features/jamOperasional/jamOperasional';

const createJamOperasionalPage = () => {
    const {uuid} = useParams();

    const {
        createDataSetting, 
        name, setName,
        jamMasuk, setJamMasuk, 
        jamPulang, setJamPulang, 
        keterangan, setKeterangan, 
        jamOperasionalGroupId, setJamOperasionalGroupId,
        jamOperasionalGroupSelect, setJamOperasionalGroupSelect,
        code, setCode, 
        isActive, setIsActive, 
        isLoading
    } = createDataJamOperasional()

    return (
        <div>
            <FormTemplate2
                name={name}
                setName={setName}
                jamMasuk={jamMasuk}
                setJamMasuk={setJamMasuk}
                jamPulang={jamPulang}
                setJamPulang={setJamPulang}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                jamOperasionalGroupId={jamOperasionalGroupId}
                setJamOperasionalGroupId={setJamOperasionalGroupId}
                jamOperasionalGroupSelect={jamOperasionalGroupSelect}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/jamOperasional'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createJamOperasionalPage