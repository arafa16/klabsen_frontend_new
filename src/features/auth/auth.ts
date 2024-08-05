import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, RegisterUser, resetAuth} from "../../stores/features/authSlice";

export const getLoginAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataLogin, isError:isErrorLogin, isSuccess:isSuccessLogin, isLoading:isLoadingLogin, message:messageLogin} = useSelector(
        (state : any) => state.auth
    )

    useEffect(()=>{
        if(isSuccessLogin && dataLogin){
        dispatch(resetAuth());
        if(!isLoadingLogin){
            navigate('/')
        }
        }
    },[isSuccessLogin, dataLogin, isLoadingLogin])

    useEffect(()=>{
        if(isErrorLogin && messageLogin && !isLoadingLogin){
            setMessage(messageLogin.data)
            dispatch(resetAuth());
        }
    },[isErrorLogin, messageLogin, isLoadingLogin])

    const submitLogin = (e :any) => {
        e.preventDefault();
        dispatch(LoginUser({
        email, password
        }))
    }

    return {email, setEmail, password, setPassword, message, isLoadingLogin, submitLogin}
}

export const getRegisterAuth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nomorHp, setNomorHp] = useState('');
    const [devisiId, setDevisiId] = useState('');
    const [penempatanId, setPenempatanId] = useState('');
    const [data, setData] = useState<any>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataRegister, isError:isErrorRegister, isSuccess:isSuccessRegister, isLoading:isLoadingRegister, message:messageRegister} = useSelector(
        (state : any) => state.auth
    )

    useEffect(()=>{
        if(isSuccessRegister && dataRegister && !isLoadingRegister){
            setName('');
            setEmail('');
            setPassword('');
            setNomorHp('');
            setDevisiId('');
            setPenempatanId('');
            setData(dataRegister);
            dispatch(resetAuth());
        }
    },[isSuccessRegister, dataRegister, isLoadingRegister])

    useEffect(()=>{
        if(isErrorRegister && messageRegister && !isLoadingRegister){
            setData(messageRegister.data);
            dispatch(resetAuth());
        }
    },[isErrorRegister, messageRegister, isLoadingRegister])

    const submitRegister = (e :any) => {
        e.preventDefault();
        dispatch(RegisterUser({
            name,
            email, 
            password,
            nomor_hp:nomorHp,
            devisi_id:devisiId,
            penempatan_id:penempatanId
        }))
    }
    return {
        name, setName,
        email, setEmail, 
        password, setPassword,
        nomorHp, setNomorHp, 
        devisiId, setDevisiId,
        penempatanId, setPenempatanId,
        data,setData,
        isLoadingRegister, 
        submitRegister
    }
}


