import React from 'react'
import { FormInput, FormSelect } from '../../base-components/Form'
import Button from '../../base-components/Button'
import LoadingIcon from '../../base-components/LoadingIcon'
import { getRegisterAuth } from '../../features/auth/auth'
import { getDataPenempatanSelect } from '../../features/penempatan/penempatan'
import { useNavigate } from 'react-router-dom'
import { getDataGanderSelect } from '../../features/gander/gander'
import { getMessageShow } from '../../features/messageShow'

const registerPage = () => {
    const navigate = useNavigate();

    //penempatan
    const {dataResult:dataPenempatan} = getDataPenempatanSelect();
    
    //data select gander
    const {dataResult:dataGander} = getDataGanderSelect();


    const {
        absenId, setAbsenId,
        name, setName,
        email, setEmail, 
        password, setPassword,
        nomorHp, setNomorHp, 
        devisiId, setDevisiId,
        ganderId, setGanderId,
        penempatanId, setPenempatanId,
        message,
        isLoadingRegister, 
        submitRegister
    } = getRegisterAuth();

    //message
    const messageShow = getMessageShow(message);

    return (
        <div className="container">
            {messageShow}
            <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
                <div className="w-96 intro-y">
                <form onSubmit={submitRegister}>
                    <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                        <FormInput
                            type="text"
                            className="block px-4 py-3"
                            placeholder="Absen Id"
                            required
                            value={absenId}
                            onChange={(e)=>setAbsenId(e.target.value)}
                        />
                        <FormInput
                            type="text"
                            className="block px-4 py-3 mt-4"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <FormInput
                            type="email"
                            className="block px-4 py-3 mt-4"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <FormInput
                            type="password"
                            className="block px-4 py-3 mt-4"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <FormInput
                            type="text"
                            className="block px-4 py-3 mt-4"
                            placeholder="Nomor Telpon/Hp"
                            value={nomorHp}
                            onChange={(e)=>setNomorHp(e.target.value)}
                        />
                        <FormSelect
                            formSelectSize="sm"
                            className="block px-4 py-3 mt-4"
                            name='penempatan'
                            required
                            value={penempatanId}
                            onChange={(e)=>setPenempatanId(e.target.value)}
                            >
                            <option></option>
                            {dataPenempatan && dataPenempatan.map((data : any, index :any)=>(
                                <option key={index} value={data.id}>{data.name}</option>
                            ))}
                        </FormSelect>
                        <FormSelect
                            formSelectSize="sm"
                            className="block px-4 py-3 mt-4"
                            name='gander'
                            required
                            value={ganderId}
                            onChange={(e)=>setGanderId(e.target.value)}
                            >
                            <option></option>
                            {dataGander && dataGander.map((data : any, index :any)=>(
                                <option key={index} value={data.id}>{data.name}</option>
                            ))}
                        </FormSelect>
                        <div className="mt-5 text-center xl:mt-8 xl:text-left">
                            <Button type="submit" variant="primary" className="w-full xl:mr-3">
                                {isLoadingRegister ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : 'Register'}
                            </Button>
                            <Button 
                                variant="outline-secondary" 
                                className="w-full mt-3"
                                type="button"
                                onClick={()=>navigate('/login')}
                                >
                                Sign in
                            </Button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        
    )
}

export default registerPage