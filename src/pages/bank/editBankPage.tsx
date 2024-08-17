import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { updateDataBank } from '../../features/bank/bank';
import { deleteDataBank } from '../../features/bank/bank';

const editBankPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = updateDataBank({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataBank({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/bank'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editBankPage