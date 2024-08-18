import FormTemplate6 from '../../components/formTemplate/formTemplate6';
import { useParams} from 'react-router-dom';
import { deleteDataTipeAbsen, updateDataTipeAbsen } from '../../features/tipeAbsen/tipeAbsen';

const editTipeAbsenPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, isSelect, setIsSelect, code, setCode, isActive, setIsActive, isLoading} = updateDataTipeAbsen({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataTipeAbsen({uuid})

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
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editTipeAbsenPage