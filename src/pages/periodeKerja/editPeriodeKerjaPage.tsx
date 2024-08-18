import FormTemplate3 from '../../components/formTemplate/formTemplate3';
import { useParams} from 'react-router-dom';
import { deleteDataPeriodeKerja, updateDataPeriodeKerja } from '../../features/periodeKerja/periodeKerja';

const editPeriodeKerjaPage = () => {
    const {uuid} = useParams();
    
    const {
      changeDataSetting, 
      name, setName, 
      bulan, setBulan,
      tahun, setTahun,
      tanggalMulai, setTanggalMulai,
      tanggalSelesai, setTanggalSelesai,
      jumlahHari, setJumlahHari,
      code, setCode, 
      isActive, setIsActive, 
      isLoading
    } = updateDataPeriodeKerja({uuid})

    const {deleteData, isLoading:isLoadingDelete} = deleteDataPeriodeKerja({uuid})

  return (
    <div>
        <FormTemplate3
            name={name}
            setName={setName}
            bulan={bulan}
            setBulan={setBulan}
            tahun={tahun}
            setTahun={setTahun}
            tanggalMulai={tanggalMulai}
            setTanggalMulai={setTanggalMulai}
            tanggalSelesai={tanggalSelesai}
            setTanggalSelesai={setTanggalSelesai}
            jumlahHari={jumlahHari}
            setJumlahHari={setJumlahHari}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/periodeKerja'}
            submitAction={changeDataSetting}
            loadingSubmit={isLoading}
            deleteAction={deleteData}
            isDeleteActive={true}
            loadingDelete={isLoadingDelete}
        />
    </div>
  )
}

export default editPeriodeKerjaPage