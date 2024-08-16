import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import StatusIndicator from "../../components/indicator/statusIndicator";
import FormDataDiriUpdate from '../../components/employee/form/FormDataDiriUpdate';
import FormPendidikan from "../../components/employee/form/FormPendidikan";
import FormDataPendukung from "../../components/employee/form/FormDataPendukung";
import FormDataKesehatan from "../../components/employee/form/FormDataKesehatan";
import FormDataOperasionalKantor from "../../components/employee/form/FormDataOperasionalKantor";

import FormKelengkapanData from "../../components/employee/form/FormKelengkapanData";
import Button from "../../base-components/Button";

import { getDataGanderSelect } from "../../features/gander/gander";
import { getDataStatusPerkawinanSelect } from "../../features/statusPerkawinan/statusPerkawinan";
import { getDataPendidikanSelect } from "../../features/pendidikan/pendidikan";
import { getDataBankSelect } from "../../features/bank/bank";
import { getDataGolonganDarahSelect } from "../../features/golonganDarah/golonganDarah";
import { getDataContactSelect } from "../../features/contact/contact";
import { getDataPenempatanSelect } from "../../features/penempatan/penempatan";
import { getDataJabatanSelect } from "../../features/jabatan/jabatan";
import { getDataJamOperasionalGroup } from "../../features/jamOperasionalGroup/jamOperasionalGroup";
import { getDataGroupSelect } from "../../features/group/group";
import { getDataAtasanSelect } from "../../features/user/atasan";
import { getDataStatusSelect } from "../../features/status/status";
import { createDataUser, getDataUserById } from "../../features/user/user";

import { getMessageShow } from "../../features/messageShow";
import FormPassword from "../../components/employee/form/FormPassword";

const createEmployee = () => {
  const {id} = useParams();
  const [statusNumber, setStatusNumber] = useState(1);
  const [message, setMessage] = useState<any>(null);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

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

  //next or prev
  const clickPrevious = () => {
    if(statusNumber > 1){
      const response = statusNumber - 1;
      setStatusNumber(response);
    }
  }

  const clickNext = () => {
    if(statusNumber < 7){
      setStatusNumber(statusNumber + 1);
    }
  }

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

  useEffect(()=>{
    if(messageUserCreate !== null || messageUserCreate !== undefined){
      setMessage(messageUserCreate)
    }
  },[messageUserCreate])

  //message
  const messageShow = getMessageShow(message);

  return (
    <div className="w-full mt-5 box py-5">
      {messageShow}
      <div className='my-10'>
        <StatusIndicator 
          statusNumber={statusNumber}
          stepOf6={true}
          stepOf7={true}
        />
      </div>
      <form onSubmit={submitCreate}>
        <div>
        <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
            <Button
                variant="secondary" 
                className="w-24"
                size='sm'
                type='button'
                onClick={()=>clickBack()}
                >
                Cancel
            </Button>
            {/* {isLoading ?  */}
                {/* <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                :  */}
                <Button
                    variant="primary" 
                    className={`w-36 ml-2`}
                    size='sm'
                    type='submit'
                    >
                    Save
                </Button>
            {/* } */}
        </div>
        </div>
        <div className="px-5 pt-10 mt-2 border-t sm:px-10 border-slate-200/60 dark:border-darkmode-400">
          <FormDataDiriUpdate 
              statusNumber={statusNumber}
              absenId={absenId}
              setAbsenId={setAbsenId}
              nik={nik}
              setNik={setNik}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              ganderId={ganderId}
              setGanderId={setGanderId}
              tempatLahir={tempatLahir}
              setTempatLahir={setTempatLahir}
              tanggalLahir={tanggalLahir}
              setTanggalLahir={setTanggalLahir}
              statusPerkawinanId={statusPerkawinanId}
              setStatusPerkawinanId={setStatusPerkawinanId}
              jumlahAnak={jumlahAnak}
              setJumlahAnak={setJumlahAnak}
              namaIbu={namaIbu}
              setNamaIbu={setNamaIbu}
              //data select
              ganders={dataGander}
              statusPerkawinans={dataStatusPerkawinan}
          />
          <FormPendidikan 
            statusNumber={statusNumber}
            pendidikanId={pendidikanId}
            setPendidikanId={setPendidikanId}
            namaSekolah={namaSekolah}
            setNamaSekolah={setNamaSekolah}
            jurusanSekolah={jurusanSekolah}
            setJurusanSekolah={setJurusanSekolah}
            tahunLulus={tahunLulus}
            setTahunLulus={setTahunLulus}
            ipk={ipk}
            setIpk={setIpk}
            //data select
            pendidikans={dataPendidikan}
          />
          <FormDataPendukung
            statusNumber={statusNumber}
            nomorHp={nomorHp}
            setNomorHp={setNomorHp}
            nomorKtp={nomorKtp}
            setNomorKtp={setNomorKtp}
            alamatKtp={alamatKtp}
            setAlamatKtp={setAlamatKtp}
            alamatDomisili={alamatDomisili}
            setAlamatDomisili={setAlamatDomisili}
            bankId={bankId}
            setBankId={setBankId}
            nomorRekening={nomorRekening}
            setNomorRekening={setNomorRekening}
            nomorNpwp={nomorNpwp}
            setNomorNpwp={setNomorNpwp}
            //data select
            banks={dataBank}
          />
          <FormDataKesehatan
            statusNumber={statusNumber}
            nomorBpjsKesehatan={nomorBpjsKesehatan}
            setNomorBpjsKesehatan={setNomorBpjsKesehatan}
            nomorBpjsKetenagakerjaan={nomorBpjsKetenagakerjaan}
            setNomorBpjsKetenagakerjaan={setNomorBpjsKetenagakerjaan}
            contactEmergencyId={contactEmergencyId}
            setContactEmergencyId={setContactEmergencyId}
            emergencyNumber={emergencyNumber}
            setEmergencyNumber={setEmergencyNumber}
            emergencyAddress={emergencyAddress}
            setEmergencyAddress={setEmergencyAddress}
            nomorSim={nomorSim}
            setNomorSim={setNomorSim}
            golonganDarahId={golonganDarahId}
            setGolonganDarahId={setGolonganDarahId}
            //select data
            contacts={dataContact}
            golonganDarahs={dataGolonganDarah}
          />
          <FormDataOperasionalKantor
            statusNumber={statusNumber}
            penempatanId={penempatanId}
            setPenempatanId={setPenempatanId}
            jabatanId={jabatanId}
            setJabatanId={setJabatanId}
            atasanId={atasanId}
            setAtasanId={setAtasanId}
            isAtasan={isAtasan}
            setIsAtasan={setIsAtasan}
            jamOperasionalGroupId={jamOperasionalGroupId}
            setJamOperasionalGroupId={setJamOperasionalGroupId}
            groupId={groupId}
            setGroupId={setGroupId}
            extention={extention}
            setExtention={setExtention}
            quote={quote}
            setQuote={setQuote}
            //select data
            penempatans={dataPenempatan}
            jabatans={dataJabatan}
            jamOperasionalGroups={dataOperasionalGroup}
            groups={dataGroup}
            atasans={dataAtasan}
          />
          <FormKelengkapanData 
            status={dataStatus}
            statusNumber={statusNumber}
            statusId={statusId}
            setStatusId={setStatusId}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <FormPassword
          />
        </div>
      </form>
      <div className="flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end">
        <Button
            variant="secondary" 
            className="w-24"
            size='sm'
            onClick={()=>clickPrevious()}
            >
            Previous
        </Button>
        <Button 
            variant="secondary" 
            className="w-24 ml-2"
            size='sm'
            onClick={()=>clickNext()}
            >
            Next
        </Button>
      </div>
    </div>
    
  )
}

export default createEmployee