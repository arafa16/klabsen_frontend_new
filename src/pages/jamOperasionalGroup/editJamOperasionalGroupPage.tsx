import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataJamOperasionalGroup, updateDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';

const editJamOperasionalGroupPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = updateDataJamOperasionalGroup({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataJamOperasionalGroup({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/editJamOperasionalGroup'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editJamOperasionalGroupPage