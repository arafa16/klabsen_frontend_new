import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDataGanderSelect } from '../../features/gander/gander';
import { getDataStatusPerkawinanSelect } from '../../features/statusPerkawinan/statusPerkawinan';
import { getDataPendidikanSelect } from '../../features/pendidikan/pendidikan';
import { getDataBankSelect } from '../../features/bank/bank';
import { getDataContactSelect } from '../../features/contact/contact';
import { getDataGolonganDarahSelect } from '../../features/golonganDarah/golonganDarah';
import { getDataPenempatanSelect } from '../../features/penempatan/penempatan';
import { getDataJabatanSelect } from '../../features/jabatan/jabatan';
import { getDataJamOperasionalGroup } from '../../features/jamOperasionalGroup/jamOperasionalGroup';
import { getDataGroupSelect } from '../../features/group/group';
import { getDataAtasanSelect } from '../../features/user/atasan';
import { getDataStatusSelect } from '../../features/status/status';
import { createDataUser } from '../../features/user/user';
import { getMessageShow } from '../../features/messageShow';

import { FormInput, FormLabel, FormSelect } from "../../base-components/Form";
import Litepicker from '../../base-components/Litepicker';
import dayjs from 'dayjs';
import Button from '../../base-components/Button';

const createEmployeePage = () => {
    const navigate = useNavigate();

    //value data pribadi
  const [absenId, setAbsenId] = useState('');
  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [ganderId, setGanderId] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [statusPerkawinanId, setStatusPerkawinanId] = useState('');
  const [jumlahAnak, setJumlahAnak] = useState('');
  const [namaIbu, setNamaIbu] = useState('');

  //value pendidikan
  const [pendidikanId, setPendidikanId] = useState('');
  const [namaSekolah, setNamaSekolah] = useState('');
  const [jurusanSekolah, setJurusanSekolah] = useState('');
  const [tahunLulus, setTahunLulus] = useState('');
  const [ipk, setIpk] = useState('');

  //value data pendukung
  const [nomorHp, setNomorHp] = useState('');
  const [nomorKtp, setNomorKtp] = useState('');
  const [alamatKtp, setAlamatKtp] = useState('');
  const [alamatDomisili, setAlamatDomisili] = useState('');
  const [bankId, setBankId] = useState('');
  const [nomorRekening, setNomorRekening] = useState('');
  const [nomorNpwp, setNomorNpwp] = useState('');

  //value data kesehatan
  const [nomorBpjsKesehatan, setNomorBpjsKesehatan] = useState('');
  const [nomorBpjsKetenagakerjaan, setNomorBpjsKetenagakerjaan] = useState('');
  const [contactEmergencyId, setContactEmergencyId] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [emergencyAddress, setEmergencyAddress] = useState('');
  const [nomorSim, setNomorSim] = useState('');
  const [golonganDarahId, setGolonganDarahId] = useState('');

  //value data operasional
  const [penempatanId, setPenempatanId] = useState('');
  const [jabatanId, setJabatanId] = useState('');
  const [atasanId, setAtasanId] = useState();
  const [isAtasan, setIsAtasan] = useState('');
  const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
  const [groupId, setGroupId] = useState('');
  const [extention, setExtention] = useState('');
  const [quote, setQuote] = useState('');

  //value kelengkapan data
  const [statusId, setStatusId] = useState('');
  const [isActive, setIsActive] = useState('');

    //data select gander
    const {dataResult:dataGander} = getDataGanderSelect();

    //data select gander
    const {dataResult:dataStatusPerkawinan} = getDataStatusPerkawinanSelect();
  
    //pendidikan
    const {dataResult:dataPendidikan} = getDataPendidikanSelect()
  
    //bank
    const {dataResult:dataBank} = getDataBankSelect()
  
    //contact
    const {dataResult:dataContact} = getDataContactSelect()
  
    //golongan darah
    const {dataResult:dataGolonganDarah} = getDataGolonganDarahSelect()
  
    //penempatan
    const {dataResult:dataPenempatan} = getDataPenempatanSelect()
  
    //jabatan
    const {dataResult:dataJabatan} = getDataJabatanSelect()
  
    //operasional group
    const {dataResult:dataOperasionalGroup} = getDataJamOperasionalGroup()
  
    //operasional group
    const {dataResult:dataGroup} = getDataGroupSelect()
  
    //atasan
    const {dataResult:dataAtasan} = getDataAtasanSelect()
  
    //status
    const {dataResult:dataStatus} = getDataStatusSelect()

    const clickBack = () => {
        navigate(`/employee/data`);
    }

    const {submit:submitCreate, message:messageUserCreate} = createDataUser({
        nik:nik,
        absenId:absenId,
        name:name, 
        password:password,
        ganderId:ganderId, 
        email:email,
        extention:extention,
        nomorHp:nomorHp,
        penempatanId:penempatanId,
        jabatanId:jabatanId,
        atasanId:atasanId,
        nomorKtp:nomorKtp,
        alamatKtp:alamatKtp,
        alamatDomisili:alamatDomisili,
        tempatLahir:tempatLahir,
        tanggalLahir:tanggalLahir,
        nomorNpwp:nomorNpwp,
        statusPerkawinanId:statusPerkawinanId,
        jumlahAnak:jumlahAnak,
        namaIbu:namaIbu,
        pendidikanId:pendidikanId,
        namaSekolah:namaSekolah,
        jurusanSekolah:jurusanSekolah,
        tahunLulus:tahunLulus,
        ipk:ipk,
        nomorBpjsKesehatan:nomorBpjsKesehatan,
        nomorBpjsKetenagakerjaan:nomorBpjsKetenagakerjaan,
        contactEmergencyId:contactEmergencyId,
        emergencyNumber:emergencyNumber,
        emergencyAddress:emergencyAddress,
        nomorSim:nomorSim,
        golonganDarahId:golonganDarahId,
        bankId:bankId,
        nomorRekening:nomorRekening,
        jamOperasionalGroupId:jamOperasionalGroupId,
        groupId:groupId,
        quote:quote,
        statusId:statusId,
        isAtasan:isAtasan,
        isActive:isActive
    });

    //message
    const messageShow = getMessageShow(messageUserCreate);
    
    return (
        <div>
            {messageShow}
            <form onSubmit={submitCreate}>
                <div className={`flex items-center justify-center gap-x-4 col-span-12 mt-10 intro-y sm:justify-end`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>clickBack()}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="primary" 
                        className="w-24"
                        size='sm'
                        type='submit'
                        >
                        Save
                    </Button>
                </div>
                <div className="w-full mt-5 box p-4">
                    {/* data diri */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Diri</p>
                    </div>
                    <div className={`text-xs grid grid-cols-12 gap-4 mt-5 gap-y-5 pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel className='' htmlFor="input-wizard-1">Absen Id *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="absenId"
                                type="text"
                                placeholder="Dari hcm"
                                required
                                name='absenId'
                                value={absenId}
                                onChange={(e)=>setAbsenId(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-2">NIK *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nik"
                                type="text"
                                placeholder=""
                                name='nik'
                                value={nik}
                                onChange={(e)=>setNik(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Nama *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nama"
                                type="text"
                                placeholder=""
                                name='name'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Email *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="email"
                                type="email"
                                placeholder=""
                                required
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Jenis Kelamin *{ganderId}</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='ganderId'
                                required
                                value={ganderId}
                                onChange={(e)=>setGanderId(e.target.value)}
                                >
                                <option></option>
                                {dataGander && dataGander.map((data :any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Tempat Lahir *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="tempatLahir"
                                type="text"
                                placeholder=""
                                name='tempatLahir'
                                value={tempatLahir}
                                onChange={(e)=>setTempatLahir(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="tanggalLahir">Tanggal Lahir *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="tanggalLahir"
                                type="date"
                                placeholder=""
                                required
                                name='tanggalLahir'
                                value={tanggalLahir}
                                onChange={(e)=>setTanggalLahir(e.target.value)}
                            />
                            {/* <Litepicker
                                name='tanggalLahir'
                                value={dayjs(tanggalLahir === '' ? undefined : tanggalLahir).format('YYYY-MM-DD')}
                                onChange={setTanggalLahir}
                                options={{
                                autoApply: false,
                                showWeekNumbers: true,
                                format: 'YYYY-MM-DD',
                                dropdowns: {
                                    minYear: 1980,
                                    maxYear: null,
                                    months: true,
                                    years: true,
                                },
                                }}
                                className="block mx-auto"
                                formInputSize='sm'
                            /> */}
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Status Perkawinan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='statusPerkawinanId'
                                required
                                value={statusPerkawinanId}
                                onChange={(e)=>setStatusPerkawinanId(e.target.value)}
                                >
                                <option></option>
                                {dataStatusPerkawinan && dataStatusPerkawinan.map((data : any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Jumlah Anak *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="jumlahAnak"
                                type="number"
                                placeholder=""
                                name='jumlahAnak'
                                value={jumlahAnak}
                                onChange={(e)=>setJumlahAnak(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-3">Nama Ibu *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="samaIbu"
                                type="text"
                                placeholder=""
                                name='namaIbu'
                                value={namaIbu}
                                onChange={(e)=>setNamaIbu(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data diri */}
                    {/* pendidikan */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Pendidikan</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Pendidikan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pendidikanId'
                                required
                                value={pendidikanId}
                                onChange={(e)=>setPendidikanId(e.target.value)}
                                >
                                <option></option>
                                {dataPendidikan && dataPendidikan.map((data : any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nama Sekolah *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="namaSekolah"
                            type="text"
                            placeholder=""
                            name='namaSekolah'
                            value={namaSekolah}
                            onChange={(e)=>setNamaSekolah(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jurusan/Prodi *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="jurusanSekolah"
                            type="text"
                            required
                            placeholder=""
                            name='jurusanSekolah'
                            value={jurusanSekolah}
                            onChange={(e)=>setJurusanSekolah(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Tahun Lulus *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="tahunLulus"
                            type="number"
                            placeholder=""
                            name='tahunLulus'
                            value={tahunLulus}
                            onChange={(e)=>setTahunLulus(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">IPK *</FormLabel>
                            <FormInput
                            formInputSize="sm"
                            id="ipk"
                            type="text"
                            placeholder=""
                            name='ipk'
                            value={ipk}
                            onChange={(e)=>setIpk(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* pendidikan */}
                    {/* data pendukung */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Pendukung</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor HP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorHp"
                                type="text"
                                placeholder=""
                                name='nomorHp'
                                value={nomorHp}
                                onChange={(e)=>setNomorHp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor KTP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorKtp"
                                type="text"
                                placeholder=""
                                name='nomorKtp'
                                value={nomorKtp}
                                onChange={(e)=>setNomorKtp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat KTP</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="alamatKtp"
                                type="text"
                                placeholder=""
                                name='alamatKtp'
                                value={alamatKtp}
                                onChange={(e)=>setAlamatKtp(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat Domisili</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="alamatDomisili"
                                type="text"
                                placeholder=""
                                name='alamatDomisili'
                                value={alamatDomisili}
                                onChange={(e)=>setAlamatDomisili(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Bank</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='bankId'
                                required
                                value={bankId}
                                onChange={(e)=>setBankId(e.target.value)}
                                >
                                <option></option>
                                {dataBank && dataBank.map((data :any, index :any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Rekening</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorRekening"
                                type="text"
                                placeholder=""
                                name='nomorRekening'
                                value={nomorRekening}
                                onChange={(e)=>setNomorRekening(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Npwp</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorNpwp"
                                type="text"
                                placeholder=""
                                value={nomorNpwp}
                                onChange={(e)=>setNomorNpwp(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data pendukung */}
                    {/* data kesehatan */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Kesehatan</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Kesehatan</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorBpjsKesehatan"
                                type="text"
                                placeholder=""
                                name='nomorBpjsKesehatan'
                                value={nomorBpjsKesehatan}
                                onChange={(e)=>setNomorBpjsKesehatan(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Bpjs Ketenagakerjaan</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorBpjsKetenagakerjaan"
                                type="text"
                                placeholder=""
                                name='nomorBpjsKetenagakerjaan'
                                value={nomorBpjsKetenagakerjaan}
                                onChange={(e)=>setNomorBpjsKetenagakerjaan(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Contact Emergency</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='contactEmergancyId'
                                value={contactEmergencyId}
                                onChange={(e)=>setContactEmergencyId(e.target.value)}
                                >
                                    <option></option>
                                    {dataContact && dataContact.map((data :any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Emergency</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="emergencyNumber"
                                type="text"
                                placeholder=""
                                name='emergancyNumber'
                                value={emergencyNumber}
                                onChange={(e)=>setEmergencyNumber(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Alamat Emergancy</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="emergancyAddress"
                                type="text"
                                placeholder=""
                                name='emergancyAddress'
                                value={emergencyAddress}
                                onChange={(e)=>setEmergencyAddress(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Nomor Sim</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="nomorSim"
                                type="text"
                                placeholder=""
                                name='nomorSim'
                                value={nomorSim}
                                onChange={(e)=>setNomorSim(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Golongan Darah</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='golonganDarahId'
                                required
                                value={golonganDarahId}
                                onChange={(e)=>setGolonganDarahId(e.target.value)}
                                >
                                    <option></option>
                                    {dataGolonganDarah && dataGolonganDarah.map((data :any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                    </div>
                    {/* data operasional */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Data Operasional</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Penempatan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='penempatanId'
                                required
                                value={penempatanId}
                                onChange={(e)=>setPenempatanId(e.target.value)}
                                >
                                    <option></option>
                                    {dataPenempatan && dataPenempatan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jabatan *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='jabatanId'
                                required
                                value={jabatanId}
                                onChange={(e)=>setJabatanId(e.target.value)}
                                >
                                    <option></option>
                                    {dataJabatan && dataJabatan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Atasan</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='atasanId'
                                required
                                value={atasanId}
                                onChange={(e:any)=>setAtasanId(e.target.value)}
                                >
                                    <option></option>
                                    {dataAtasan && dataAtasan.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">is Atasan ?</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='isAtasan'
                                value={isAtasan}
                                onChange={(e)=>setIsAtasan(e.target.value)}
                                >
                                <option></option>
                                <option value='0'>No</option>
                                <option value='1'>Yes</option>
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Jam Operasional Group *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='jamOperasionalId'
                                required
                                value={jamOperasionalGroupId}
                                onChange={(e)=>setJamOperasionalGroupId(e.target.value)}
                                >
                                    <option></option>
                                    {dataOperasionalGroup && dataOperasionalGroup.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Group *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='groupsId'
                                required
                                value={groupId}
                                onChange={(e)=>setGroupId(e.target.value)}
                                >
                                    <option></option>
                                    {dataGroup && dataGroup.map((data : any, index : any)=>(
                                        <option key={index} value={data.id}>{data.name}</option>
                                    ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Extention *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="extention"
                                type="text"
                                placeholder=""
                                name='extention'
                                value={extention}
                                onChange={(e)=>setExtention(e.target.value)}
                            />
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Quote *</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="quote"
                                type="text"
                                placeholder=""
                                name='quote'
                                value={quote}
                                onChange={(e)=>setQuote(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* data operasional */}
                    {/* kelengkapan data */}
                    <div className='w-full mb-8'>
                        <p className='text-xs underline text-slate-800'>Kelengkapan Data</p>
                    </div>
                    <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 text-xs pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400`}>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Status *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='status'
                                required
                                value={statusId}
                                onChange={(e)=>setStatusId(e.target.value)}
                                >
                                <option></option>
                                {dataStatus && dataStatus.map((data : any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="input-wizard-1">Is Active ? *</FormLabel>
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='isActive'
                                required
                                value={isActive}
                                onChange={(e)=>setIsActive(e.target.value)}
                                >
                                <option></option>
                                <option value='0'>non active</option>
                                <option value='1'>active</option>
                            </FormSelect>
                        </div>
                        <div className="col-span-12 intro-y sm:col-span-3">
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormInput
                                formInputSize="sm"
                                id="password"
                                type="password"
                                placeholder="*******"
                                required
                                name='password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                        </div>
                    </div>
                    {/* kelengkapan data */}
                </div>
                <div className={`flex items-center justify-center gap-x-4 col-span-12 mt-10 intro-y sm:justify-end  mb-20`}>
                    <Button
                        variant="secondary" 
                        className="w-24"
                        size='sm'
                        type='button'
                        onClick={()=>clickBack()}
                        >
                        Cancel
                    </Button>
                    <Button
                        variant="primary" 
                        className="w-24"
                        size='sm'
                        type='submit'
                        >
                        Save
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default createEmployeePage