import React from 'react'
import Lucide from '../../base-components/Lucide'
import { Disclosure } from '../../base-components/Headless'
import dayjs from 'dayjs'

const dataUser = (props : any) => {
    const {users, title} = props;

    return (
        <div className="p-5 box intro-y">
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
            </div>
            <div className="leading-relaxed">
            <Disclosure.Group variant="boxed">
                <Disclosure>
                    <Disclosure.Button>
                        Data Pribadi
                    </Disclosure.Button>
                    <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500 mt-6">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Name
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    NIK
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nik}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Absen Id
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.absenId}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Email
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.email}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Jenis Kelamin
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.gander && users.gander.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Tempat Lahir
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.tempatLahir}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Tanggal Lahir
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {dayjs(users && users.tanggalLahir).format('YYYY-MM-DD')}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Status Perkawinan
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.status_perkawinan && users.status_perkawinan.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Jumlah Anak
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.jumlahAnak}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nama Ibu
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.namaIbu}
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button >
                        Data Pendidikan
                    </Disclosure.Button>
                    <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Pendidikan Terakhir
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.pendidikan && users.pendidikan.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Sekolah / Universitas
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.namaSekolah}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Tahun Lulus
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.tahunLulus}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Prodi / Fakultas
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.jurusanSekolah}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    IPK / Nilai Akhir
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.ipk}
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button>
                        Data Pendukung
                    </Disclosure.Button>
                    <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor HP
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorHp}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor KTP
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorKtp}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Alamat KTP
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.alamatKtp}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Alamat Domisili
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.alamatDomisili}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Bank
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.bank && users.bank.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Rekening
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorRekening}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Npwp
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorNpwp}
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button>
                        Data Kesehatan
                    </Disclosure.Button>
                    <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Bpjs Kesehatan
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorBpjsKesehatan}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Bpjs Kesehatan
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorBpjsKesehatan}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Contact Emergency
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.contact_emergency && users.contact_emergency.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Emergency
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.emergencyNumber}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Alamat Emergancy
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.emergencyAddress}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Nomor Sim
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.nomorSim}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Golongan Darah
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.golongan_darah && users.golongan_darah.name}
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button>
                        Operasional Kantor
                    </Disclosure.Button>
                    <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Penempatan 
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.penempatan && users.penempatan.name }
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Jabatan
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.jabatan && users.jabatan.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Atasan
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.atasan && users.atasan.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Is Atasan ?
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.isAtasan ? 'yes' : 'no'}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Jam Operasional Group
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.jam_operasional_group && users.jam_operasional_group.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Group/Devisi 
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users.group && users.group.name}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium whitespace-nowrap">
                                    Extention
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    {users && users.extention}
                                </div>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Disclosure>
            </Disclosure.Group>
            </div>
        </div>
    )
}

export default dataUser;