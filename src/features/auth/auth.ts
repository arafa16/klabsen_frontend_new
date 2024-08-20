import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, RegisterUser, resetAuth, SendEmailForgot, VerifyToken} from "../../stores/features/authSlice";
import { ResetPasswordByToken, resetAuth2} from "../../stores/features/auth2Slice";

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
            if(!isLoadingLogin){
                dispatch(resetAuth());
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

export const getForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<any>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data:dataReset, isError:isErrorReset, isSuccess:isSuccessReset, isLoading:isLoadingReset, message:messageReset} = useSelector(
        (state : any) => state.auth
    )

    useEffect(()=>{
        if(isSuccessReset && messageReset){
            if(!isLoadingReset){
                setMessage(messageReset)
                dispatch(resetAuth());
            }
        }
    },[isSuccessReset, messageReset, isLoadingReset])

    useEffect(()=>{
        if(isErrorReset && messageReset){
            if(!isLoadingReset){
                setMessage(messageReset)
                dispatch(resetAuth());
            }
        }
    },[isErrorReset, messageReset, isLoadingReset])

    const submitForgotPassword= (e : any) => {
        e.preventDefault();
        dispatch(SendEmailForgot({
          email
        }));
    }

    return {email, setEmail, isLoadingReset, message, submitForgotPassword}
}

export const getVerifyToken = (datas:any) => {
    const [token, setToken] = useState<any>(datas && datas.token);
    const [dataResult, setDataResult] = useState<any>(null);
    const [message, setMessage] = useState<any>(null)
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const {data, isError, isSuccess, isLoading, message:messageVerify} = useSelector(
        (state : any) => state.auth
    )

    useEffect(()=>{
        if(isSuccess && data){
            if(!isLoading){
                setDataResult(data);
                dispatch(resetAuth())
            }
        }
      },[isSuccess, data, isLoading]);

    useEffect(()=>{
        if(isError && messageVerify){
            if(!isLoading){
                setMessage({msg: 'token expired or somethin wrong, please send email reset again'});
                setError(true);
                dispatch(resetAuth())
            }
        }
    },[isError, messageVerify, isLoading]);

    
    useEffect(()=>{
        dispatch(VerifyToken({token}));
    },[token]);

    return {dataResult, message, error, isLoading}

}

export const getSubmitResetPassword = (datas:any) => {
    const [token, setToken] = useState(datas && datas.token);
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [message, setMessage] = useState<any>(null)
    const [successReset, setSuccessReset] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data, isError, isSuccess, isLoading, message:messageVerify} = useSelector(
        (state : any) => state.auth2
    )

    useEffect(()=>{
        if(isSuccess && messageVerify){
            if(!isLoading){
                setMessage({msg:messageVerify});
                setSuccessReset(true);
                dispatch(resetAuth2())
                setInterval(() => navigate('/login'), 5000);
            }
        }
      },[isSuccess, messageVerify, isLoading]);

    useEffect(()=>{
        if(isError && messageVerify){
            if(!isLoading){
                setMessage({msg:messageVerify});
                dispatch(resetAuth2())
            }
        }
    },[isError, messageVerify, isLoading]);

    const submitResetPassword = (e : any) => {
        e.preventDefault();
        dispatch(ResetPasswordByToken({
            token, password, confPassword
        }));
    }

    return {submitResetPassword, password, setPassword, confPassword, setConfPassword, message, successReset, isLoading}
}

