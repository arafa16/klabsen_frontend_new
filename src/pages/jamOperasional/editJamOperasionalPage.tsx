import { useParams} from 'react-router-dom';
import { deleteDataJamOperasional, updateDataJamOperasional } from '../../features/jamOperasional/jamOperasional';
import FormTemplate2 from '../../components/formTemplate/formTemplate2';

const editJamOperasionalPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, 
      name, setName,
      jamMasuk, setJamMasuk, 
      jamPulang, setJamPulang, 
      keterangan, setKeterangan, 
      jamOperasionalGroupId, setJamOperasionalGroupId,
      jamOperasionalGroupSelect, setJamOperasionalGroupSelect,
      code, setCode, 
      isActive, setIsActive, 
      isLoading
    } = updateDataJamOperasional({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataJamOperasional({uuid})

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
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editJamOperasionalPage