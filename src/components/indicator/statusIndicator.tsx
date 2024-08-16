import React from 'react'
import Button from "../../base-components/Button";

const statusIndicator = (props : any) => {
    const {statusNumber, stepOf6, stepOf7} = props;
    
  return (
    <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20 text-xs">
        <div className="z-10 flex items-center flex-1 intro-x lg:text-center lg:mt-0 lg:block">
            <Button 
                variant={`${statusNumber === 1 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                    ${statusNumber === 1 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                    `}>
            1 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 1 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Data Diri
            </div>
        </div>
        <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            <Button 
                variant={`${statusNumber === 2 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                    ${statusNumber === 2 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                    `}>
            2 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 2 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Pendidikan
            </div>
        </div>
        <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            <Button 
                variant={`${statusNumber === 3 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                    ${statusNumber === 3 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                    `}>
            3 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 3 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Data Pendukung
            </div>
        </div>
        <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            <Button 
                variant={`${statusNumber === 4 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                    ${statusNumber === 4 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                    `}>
            4 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 4 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Data Kesehatan
            </div>
        </div>
        <div className="z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block">
            <Button 
                variant={`${statusNumber === 5 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                ${statusNumber === 5 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                `}>
            5 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 5 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Operasional Kantor
            </div>
        </div>
        <div className={`${stepOf6 !== true ? 'hidden' : 'z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block'} `}>
            <Button 
                variant={`${statusNumber === 6 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                ${statusNumber === 6 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                `}>
            6 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 6 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Kelengkapan Data
            </div>
        </div>
        <div className={`${stepOf7 !== true ? 'hidden' : 'z-10 flex items-center flex-1 mt-5 intro-x lg:text-center lg:mt-0 lg:block'} `}>
            <Button 
                variant={`${statusNumber === 6 ? 'primary' : 'secondary'}`} 
                className={`w-8 h-8 rounded-full
                ${statusNumber === 6 ? '' : 'text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400'}
                `}>
            7 
            </Button>
            <div className={`ml-3 lg:w-32 lg:mt-3 lg:mx-auto ${statusNumber === 7 ? 'font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            Password
            </div>
        </div>
    </div>
  )
}

export default statusIndicator