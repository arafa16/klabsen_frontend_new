import { useParams } from 'react-router-dom';
import FormTemplate3 from '../../components/formTemplate/formTemplate3';
import { createDataPeriodeKerja } from '../../features/periodeKerja/periodeKerja';

const createPeriodeKerjaPage = () => {
    const {uuid} = useParams();

    const {
        createDataSetting, 
        name, setName, 
        bulan, setBulan,
        tahun, setTahun,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        jumlahHari, setJumlahHari,
        code, setCode, 
        isActive, setIsActive, 
        isLoading
    } = createDataPeriodeKerja({uuid})

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
                submitAction={createDataSetting}
                loading={isLoading}
            />
        </div>
    )
}

export default createPeriodeKerjaPage