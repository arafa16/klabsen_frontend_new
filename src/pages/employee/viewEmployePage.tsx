import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import DataUser from '../../components/Profile/DataUser';
import { AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import { resetUsers, getUserById, deleteUser, UpdateStatusUser } from '../../stores/features/userSlice';
// import { getStatus } from '../../stores/features/statusSlice';
// import StatusUser from '../../components/Profile/StatusUser';
// import ProfileCover from '../../components/Profile/ProfileCover';
import Button from '../../base-components/Button';
import { Menu } from '../../base-components/Headless';
// import EditStatusUser from '../../components/Profile/EditStatusUser';
// import UploadPhoto from '../../components/Modal/UploadPhoto';
// import ViewPrivilege from '../../components/Profile/ViewPrivilege';
import EditViewPrivilege from '../../features/employee/editViewPrivilege';
import CreatePrivilege from '../../features/employee/createPrivilege';
import { getDataUserById } from '../../features/user/user';
import DataUser from '../../components/employee/dataUser';
import ProfileCover from '../../components/employee/profileCover';
import { changePhotoProfile } from "../../features/user/setPhotoProfile";
import { statusUser } from '../../features/employee/statusUser';
import { viewPrivilege } from '../../features/employee/viewPrivilege';
import { editStatusUser } from '../../features/employee/editStatusUser';

const viewEmployePage = () => {
    //get uuid
    const {id} = useParams();
    const navigate = useNavigate();

    //get data user
    const {dataResult: dataUser, reload} = getDataUserById({id});

    //update photo
    const {
        modalChangePhoto, 
        message:messagePhoto,
        showModal:showModalPhoto, setShowModal:setShowModalPhoto,
        isSuccess, isLoading, messagePhoto:messagePhotoCheck
      } = changePhotoProfile({uuid:id});

    //upload photo
    const uploadPhoto = () => {
        setShowModalPhoto(!showModalPhoto)
    }

    useEffect(()=>{
        if(isSuccess && messagePhotoCheck){
            if(!isLoading){
                reload();
            }
        }
    },[isSuccess, isLoading, messagePhotoCheck])


    //status user
    const {view:viewStatusUser, isView:isViewStatusUser, setIsView:setIsViewStatusUser} = statusUser({
        datas:dataUser,
        title:"Status User"
    });

    //edit status user
    const {
        form:formEditStatusUser,
        isUserLoading, isUserSuccess, userMessage,
        isView:isViewEditStatusUser, setIsView:setIsViewEditStatusUser
    } = editStatusUser({
        id:id,
        title:"Edit Status User",
        user:dataUser,
        isViewStatusUser:isViewStatusUser,
        setIsViewStatusUser:setIsViewStatusUser
    });

    useEffect(()=>{
        if(isViewStatusUser === false){
            setIsViewEditStatusUser(true)
        }
    },[isViewStatusUser]);

    useEffect(()=>{
        if(isUserSuccess && userMessage){
            if(!isUserLoading){
                reload();
            }
        }
    },[isUserSuccess, isUserLoading, userMessage])

    
    //view privilege
    const {view:viewPrivilegeUser, isView:isViewPrivilege, setIsView:setIsViewPrivilege} = viewPrivilege({
        datas:dataUser,
        title:"Privilege User",
    });

    // const [datas, setDatas] = useState<any>([]);
    // const [viewEditStatus, setViewEditStatus] = useState(false);
    // const [viewEditPriviege, setViewEditPriviege] = useState(false);
    // const [viewCreatePriviege, setViewCreatePriviege] = useState(false);
    // const [statusId, setStatusId] = useState(0);
    // const [dataStatus, setDataStatus] = useState([]);
    // const [isActive, setIsActive] = useState(0);
    // const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const {users, isUsersSuccess,isUpdateUsersSuccess, messageUsers} = useSelector(
    //     (state : any) => state.user
    // )

    // const {status, isStatusSuccess} = useSelector(
    //     (state : any) => state.statusReducer
    // )

    // useEffect(()=>{
    //     if(isUsersSuccess && users){
    //       setDatas(users);
    //       setStatusId(users && users.status.id);
    //       setIsActive(users && users.isActive ? 1 : 0);
    //       dispatch(resetUsers());
    //     }
    // },[users, isUsersSuccess])

    // useEffect(()=>{
    //     if(isUsersSuccess && messageUsers){
    //       dispatch(resetUsers());
    //       navigate('/dataEmploye');
    //     }
    // },[messageUsers, isUsersSuccess]);

    // useEffect(()=>{
    //     if(isUpdateUsersSuccess && messageUsers){
    //       dispatch(resetUsers());
    //       setViewEditStatus(false);
    //       getDataUser();
    //     }
    // },[messageUsers, isUsersSuccess]);

    // useEffect(()=>{
    //     getDataUser();
    // },[]);
    
    // const getDataUser = () => {
    // dispatch(getUserById({id}));
    // }

    // const deleteUserById = () => {
    //     dispatch(deleteUser({id}));
    // }

    // const changeEditStatus = (status : boolean) => {
    //     setViewEditStatus(status);
    // }

    // const changeEditPrivilege = (privilege : boolean) => {
    //     if(datas.privilegeId === 0 || datas.privilegeId === null){
    //         setViewCreatePriviege(privilege);
    //     }
    //     else{
    //         setViewEditPriviege(privilege);
    //     }
    // }

    // // useEffect(()=>{
    // //     dispatch(getStatus());
    // // },[])

    // useEffect(()=>{
    //     if(status && isStatusSuccess){
    //         setDataStatus(status);
    //     }
    // },[status, isStatusSuccess])

    // const updateStatus = (e:any) => {
    //     e.preventDefault();
    //     dispatch(UpdateStatusUser({
    //         id, statusId, isActive
    //     }));
    // }

    // const uploadPhoto = () => {
    //     setShowModal(true);
    // }

    return (
        <div className="grid grid-cols-12 gap-4 mt-5">
            {modalChangePhoto}
            <div className="col-span-12 xl:col-span-12 flex w-full justify-end gap-4 z-50">
                {/* <Menu>
                    <Menu.Button>
                        <Button  variant='primary' size='sm'>
                            Action
                        </Button>
                    </Menu.Button>
                    <Menu.Items className="w-40">
                        <Menu.Item 
                            onClick={()=>navigate(`/updateEmploye/${id}`)}
                            >
                            Update User
                        </Menu.Item>
                        <Menu.Item 
                            className={`hover:bg-red-500 hover:text-white`}
                            onClick={()=>deleteUserById()}
                            >
                            Delete
                        </Menu.Item>
                    </Menu.Items>
                </Menu> */}
                <Button
                    variant={`secondary`}
                    size='sm'
                    onClick={()=>navigate('/employee/data')}
                    >
                    Back to Employe
                </Button>
            </div>
            <div className="col-span-12 xl:col-span-12">
                <ProfileCover 
                    users={dataUser}
                    uploadPhoto={uploadPhoto}
                />
            </div>
            <div className="col-span-12 xl:col-span-8">
                <DataUser 
                    users={dataUser}
                    title={`Data User`}
                />
            </div>
            <div className="col-span-12 xl:col-span-4">
                <div>
                    {viewStatusUser}
                    {formEditStatusUser}
                </div>
                <div className='mt-4'>
                    {viewPrivilegeUser}
                    <EditViewPrivilege 
                        title={`Edit Privilege User`}
                        datas={dataUser}
                        changeEditPrivilege={setIsViewPrivilege}
                        viewEditPriviege={isViewPrivilege}
                    />
                    <CreatePrivilege
                        title={`Create Privilege User`}
                        datas={dataUser}
                        changeEditPrivilege={setIsViewPrivilege}
                        viewCreatePriviege={isViewPrivilege}
                    />
                </div>
            </div>
            <div className="col-span-12 xl:col-span-4">
                
            </div>
        </div>
    )
}

export default viewEmployePage