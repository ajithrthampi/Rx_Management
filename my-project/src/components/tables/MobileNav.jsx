import React, { useContext } from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { PiArrowUUpLeftBold } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion';
import { TableContext } from '../../context/TableContext';
import { FaFax } from 'react-icons/fa';
import { RiFilePaperLine, RiLogoutBoxRFill } from 'react-icons/ri';
import { HiOutlineNewspaper } from 'react-icons/hi';

const MobileNav = () => {

    const { setOpen, open } = useContext(TableContext);

    const containerVarient = {
        hidden: {
            opacity: 0,
            x: '50vw'
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    console.log("open", open);

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <motion.div

            initial={
                {
                    opacity: 0,
                    x: 200
                }
            }
            animate={
                {
                    opacity: 1,
                    x: 0
                }
            }
            exit={
                {
                    // opacity: 0,
                    x: 600,
                    transition: { duration: 0.8, ease: [0.75, 0, 0.24, 1] }
                }
            }

            className='fixed text-white top- right-0 top-0 md:w-[400px] w-full h-full bg-white z-50 p-2'>
            <div className='rounded-full w-9 h-9 bg-[#1eabdb] flex justify-center items-center  '
                onClick={handleClose}
            >
                <PiArrowUUpLeftBold className='text-2xl text-white' />
            </div>
            <div className=' p-3 pt-5'>
                <div className='fle gap-10 items-center'>
                    <div className='flex items-center gap-4'>
                        <p className='fontCalibri text-[13px] font-semibold text-white'>NEXT SCIENCE</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full w-[26px] h-[26px] bg-white flex justify-center items-center  '>
                            <BiSolidUser className='text-[#256a8b] text-xl' />
                        </div>
                        <p className='fontCalibri text-[18px] font-semibold  underline text-black'>Erica Fernandes</p>
                    </div>
                    <div className='flex gap-2 items-center pt-8'>
                        <p className='fontCalibri  text-[13px] font-semibold text-black'>OCR Status:</p>
                        <input
                            type="text"
                            className='rounded-2xl py-1 px-3 placeholder:text-xs bg-[#c7dde8]' />
                    </div>
                    <div className='pt-5'>
                        <div className='flex flex-col  gap-7 '>
                            <div className='flex items-center gap-1'>
                                <FaFax className=' text-xl text-[#e99b4c]' />
                                <p className='fontCalibri  text-[14px] font-semibold text-[#e99b4c]'>Fax List</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <div className='relative'>
                                    <RiFilePaperLine className='text-black text-xl' />
                                    <p className='absolute text-black text-[7px] fontCalibri top-1 left-1.5'>Rx</p>
                                </div>
                                <p className='fontCalibri  text-[14px] font-semibold text-black'>Rx Tracker List</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <HiOutlineNewspaper className='text-black text-xl' />
                                <p className='fontCalibri  text-[14px] font-semibold text-black'>Case Details</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiLogoutBoxRFill className='text-black text-xl' />
                                <p className='fontCalibri  text-[14px] font-semibold text-black'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MobileNav