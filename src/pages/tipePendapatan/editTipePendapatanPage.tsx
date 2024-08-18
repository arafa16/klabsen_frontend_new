import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { useParams} from 'react-router-dom';
import { deleteDataTipePendapatan, updateDataTipePendapatan } from '../../features/tipePendapatan/tipePendapatan';

const editTipePendapatanPage = () => {
    const {uuid} = useParams();
    
    const {changeDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = updateDataTipePendapatan({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataTipePendapatan({uuid})

  return (
    <div>
        <FormTemplate1
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/tipePendapatan'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editTipePendapatanPage