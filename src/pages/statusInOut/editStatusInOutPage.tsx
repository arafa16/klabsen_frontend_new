import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataStatusInOut, updateDataStatusInOut } from '../../features/statusInOut/statusInOut';

const editStatusInOutPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = updateDataStatusInOut({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataStatusInOut({uuid})

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
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editStatusInOutPage