import { getDataPeriodeKerjaTable } from '../../features/periodeKerja/periodeKerja';
import Table3 from '../../components/tableTemplate/table3';
const periodeKerjaPage = () => {

    const {dataResult, nextPage, prevPage, page, allPage} = getDataPeriodeKerjaTable();

    return (
        <div className='w-full'>
            <Table3
                datas={dataResult}
                linkView="/periodeKerja/edit"
                linkCreate="/periodeKerja/create"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default periodeKerjaPage