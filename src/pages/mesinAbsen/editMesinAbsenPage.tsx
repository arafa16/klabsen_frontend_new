import FormTemplate5 from '../../components/formTemplate/formTemplate5';
import { useParams} from 'react-router-dom';
import { deleteDataMesinAbsen, updateDataMesinAbsen } from '../../features/mesinAbsen/mesinAbsen';

const editMesinAbsenPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, ipMesin, setIpMesin, code, setCode, isActive, setIsActive, isLoading} = updateDataMesinAbsen({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataMesinAbsen({uuid})

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
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editMesinAbsenPage