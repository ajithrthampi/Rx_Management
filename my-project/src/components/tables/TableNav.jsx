import React, { useContext, useState } from 'react'
import { PiArrowUUpLeftBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { RiFilePaperLine } from 'react-icons/ri';
import { FaFax } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNav from './MobileNav';
import { TableContext } from '../../context/TableContext';

const TableNav = () => {
    // const [open, setOpen] = useState(false)
    const {setOpen, open} = useContext(TableContext);

    const handleOpen = () => {
        setOpen(true)
        console.log("ljljnkdjlf");
    }

    console.log(open);


    return (
        <>


            <div className='p-2  flex items-center justify-between'>

                {/* first part */}
                <div className='xl:block hidden'>
                    <div className='flex gap-10 items-center'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full w-9 h-9 bg-white flex justify-center items-center  '>
                                <PiArrowUUpLeftBold className='text-2xl text-[#1eabdb]' />
                            </div>
                            <p className='fontCalibri text-[13px] font-semibold text-white'>NEXT SCIENCE</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='rounded-full w-[26px] h-[26px] bg-white flex justify-center items-center  '>
                                <BiSolidUser className='text-[#256a8b] text-xl' />
                            </div>
                            <p className='fontCalibri text-[13px] font-semibold text-white underline'>Erica Fernandes</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <p className='fontCalibri  text-[13px] font-semibold text-white'>OCR Status:</p>
                            <input
                                type="text"
                                className='rounded-2xl py-1 px-3 placeholder:text-xs' />
                        </div>
                    </div>
                </div>


                {/* second part */}
                <div className='hidden xl:block'>
                    <p className='fontCalibri text-[13px] font-semibold text-[#e99b4c]'>FAX LIST</p>
                </div>

                {/* third part */}
                <div className=''>
                    <div className='flex  gap-10 items-center'>
                        <div className='hidden xl:block'>
                            <div className='flex items-center gap-10 '>
                                <div className='flex items-center gap-1'>
                                    <FaFax className=' text-xl text-[#e99b4c]' />
                                    <p className='fontCalibri  text-[14px] font-semibold text-[#e99b4c]'>Fax List</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='relative'>
                                        <RiFilePaperLine className='text-white text-xl' />
                                        <p className='absolute text-white text-[7px] fontCalibri top-1 left-1.5'>Rx</p>
                                    </div>
                                    <p className='fontCalibri  text-[14px] font-semibold text-white'>Rx Tracker List</p>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <HiOutlineNewspaper className='text-white text-xl' />
                                    <p className='fontCalibri  text-[14px] font-semibold text-white'>Case Details</p>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <RiLogoutBoxRFill className='text-white text-xl' />
                                    <p className='fontCalibri  text-[14px] font-semibold text-white'>Logout</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <h1 className="  text-center   text-[#e99b4c] text-3xl fontCalibri_light font-bold">Tika<span className='text-[#129dc7] font-light'>Rx</span></h1>
                            <p className='fontCalibri_light text-center text-white text-[7px] leading-3 -mt-2'>Rx Management System</p>
                        </div>
                    </div>
                </div>

                <div className='xl:hidden' onClick={handleOpen}>
                    <GiHamburgerMenu className='text-2xl text-white' />
                </div>
            </div>

            {
             open && <div>
             <MobileNav />
         </div>
            }
            
        </>
    )
}

export default TableNav