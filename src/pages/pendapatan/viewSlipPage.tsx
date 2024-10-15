import React, { useEffect, useState, useRef } from 'react'
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import Logo from '../../assets/images/logo/logo_kopkarla_color.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { getDataPendapatansById } from '../../features/pendapatan/pendapatan';

const viewSlipPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const printRef = useRef<any>();

    const {data, totalPendapatan, totalPengeluaran, generateQR, linkQr} = getDataPendapatansById({id})

    const handlePrint = useReactToPrint({
        documentTitle: id + '-' + (data && data.pendapatanAtas),
        content: () => printRef.current
    });

    const rupiah = (number : number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "decimal"
        }).format(number)+',00';
    }

    const clickBack = () => {
        navigate(-1);
    }

    return (
        <>
        <div className="flex justify-end flex-col items-center mt-8 intro-y sm:flex-row">
            <div className="flex justify-end w-full mt-4 sm:w-auto sm:mt-0">
            <Button variant="primary" className="mr-2 shadow-md" onClick={()=>handlePrint()}>
                <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print Invoice
            </Button>
            <Button 
                className="!box"
                onClick={()=>clickBack()}
                >
                <Lucide icon="ArrowLeftCircle" className="w-4 h-4 mr-2" /> Back
            </Button>
            </div>
        </div>
        <div className="mt-5 box">
            <div ref={printRef}>
                <div className="flex justify-between px-20 pt-20">
                    <div className="font-semibold text-primary">
                        <img src={Logo} className='w-16' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                        {/* <div className="text-xl font-medium text-primary">Februari 2024</div> */}
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Nama</div>
                            <div>: {data.user && data.user.name}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>NIK</div>
                            <div>: {data.user && data.user.nik}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Group</div>
                            <div>: {data.user && data.user.group.name}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Pendapatan</div>
                            <div>: {data && data.pendapatanAtas}</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-10 sm:px-16 sm:py-5 text-xs">
                <div className="overflow-x-auto">
                    <Table>
                    <Table.Thead>
                        <Table.Tr>
                        <Table.Th 
                            colSpan={2}
                            className="border-b-2 dark:border-darkmode-400 whitespace-nowrap ">
                            PENDAPATAN
                        </Table.Th>
                        <Table.Th 
                            colSpan={2}
                            className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                            PENGELUARAN
                        </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Basic Salary
                        </Table.Td>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.basicSalary)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Zakat
                        </Table.Td>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.zakat)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan Jabatan
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJabatan)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Iuran Koperasi
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.iuranKoperasi)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Incentive
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.incentive)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Potongan Pinjaman
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.potonganPinjaman)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            KJK
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.kjk)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Potongan JHT
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.potonganJht)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Rapel
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.rapel)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Potongan BPJS Kesehatan
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.potonganBpjs)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Adjustment
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.adjustment)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Potongan Pensiun
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.potonganPensiun)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Overtime Allowance
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.overtimeAllowance)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Adjustment Minus
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.adjustmentMinus)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JHT
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJht)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Potongan OR
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.potonganPph21)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan Pensiun
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganPensiun)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JHT
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJht)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JKK
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJkk)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan Pensiun
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganPensiun)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JKM
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJkm)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JKK
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJkk)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan BPJS Kesehatan
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganBpjs)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan JKM
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganJkm)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Pajak (Pph 21)
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tax)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            Tunjangan BPJS Kesehatan
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tunjanganBpjs)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b-2 dark:border-darkmode-400 w-1/6">
                            
                        </Table.Td>
                        <Table.Td className="text-right border-b-2 dark:border-darkmode-400 w-1/6">
                            
                        </Table.Td>
                        <Table.Td className=" border-b-2 dark:border-darkmode-400 w-1/6">
                            Pajak (Pph 21)
                        </Table.Td>
                        <Table.Td className="text-right border-b-2 dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.tax)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent font-medium w-1/4">
                            Total Pendapatan
                        </Table.Td>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-1/4">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(totalPendapatan)}</div> 
                            </div>
                        </Table.Td>
                        <Table.Td
                            className="!pt-6 border-transparent dark:!border-transparent font-medium w-1/4"
                        >
                            Total Pengeluaran
                        </Table.Td>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-1/4">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(totalPengeluaran)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td
                                colSpan={2}
                                className="border-transparent dark:!border-transparent font-medium w-1/4"
                            >
                                
                            </Table.Td>
                            <Table.Td
                                className="border-transparent dark:!border-transparent font-medium w-1/4"
                            >
                                Pendapatan Bersih
                            </Table.Td>
                            <Table.Td className="border-transparent dark:!border-transparent text-right font-medium w-1/4">
                                <div className='flex justify-between'>
                                    <div>Rp.</div>
                                    <div>{rupiah(data && data.total)}</div>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td colSpan={4} className="border-transparent dark:!border-transparent text-right font-medium">
                                <div className='flex justify-end'>
                                    <img src={linkQr} className='w-24' />
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                    </Table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default viewSlipPage