import { useParams } from 'react-router-dom';
import FormTemplate1 from '../../components/formTemplate/formTemplate1';
import { createDataTipeNotification } from '../../features/tipeNotification/tipeNotification';

const createTipeNotificationPage = () => {
    
    const {createDataSetting, name, setName, code, setCode, isActive, setIsActive, isLoading} = createDataTipeNotification()

    return (
        <div>
            <FormTemplate1
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack={'/tipeNotification'}
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createTipeNotificationPage