import { GoPeople, GoAlert } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { TbActivityHeartbeat, TbAlignBoxCenterTop } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
export default function DashBoard() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-2 items-center ml-5 mr-5 mt-5 px-4' >
            <div className='flex flex-col gap-3 justify-start items-start w-[1/2] md:w-[1/3] lg:w-[1/6] shadow-sm rounded-md px-3 py-4 border-2 border-gray-30'>
                <div className="flex  text-gray-600 gap-2">
                    <GoPeople className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />
                    <p className='text-lg font-semibold'>Headcount</p>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    1,170
                </div>
                <p className='text-gray-500 font-semibold mt-1'>
                    Region: Global
                </p>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start  w-[1/2] md:w-[1/3] lg:w-[1/6]  shadow-sm rounded-md px-3 py-4 border-2 border-gray-30'>
                <div className="flex  text-gray-600 gap-2 ">
                    <IoBagOutline className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />
                    <p className='text-lg font-semibold'>Open Roles</p>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    80
                </div>
                <p className='text-gray-500 font-semibold mt-1'>
                    Hiring Pipeline
                </p>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start  w-[1/2] md:w-[1/3] lg:w-[1/6] shadow-sm rounded-md  px-3 py-4 border-2 border-gray-30'>
                <div className="flex text-gray-600 gap-2">
                    <IoMdTrendingUp className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />
                    <p className='font-semibold text-lg'>Attrition</p>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    3.2%
                </div>
                <p className='text-gray-500 font-semibold mt-1'>
                    Monthly Rate
                </p>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start  w-[1/2] md:w-[1/3] lg:w-[1/6] shadow-sm rounded-md px-3 py-4 border-2 border-gray-30'>
                <div className="flex text-gray-600 gap-2">
                    <TbActivityHeartbeat className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />
                    <p className='font-semibold text-lg'>Avg Tenure</p>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    3.6 yrs
                </div>
                <p className='text-gray-500 font-semibold mt-1'>
                    Workforce Stability
                </p>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start  w-[1/2] md:w-[1/3] lg:w-[1/6] shadow-sm rounded-md px-3 py-4 border-2 border-gray-30'>
                <div className="flex  text-gray-600 gap-2">
                    <MdOutlineAttachMoney className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />

                    <p className='text-lg font-semibold'>Cost/HC</p>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    $92K
                </div>
                <p className='text-gray-500 font-semibold mt-1'>
                    Annual estimate
                </p>
            </div>
            <div className='flex flex-col gap-3 justify-start items-start  w-[1/2] md:w-[1/3] lg:w-[1/6] shadow-sm shadow-red-500 rounded-md px-3 py-4 border-2 border-red-300'>
                <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-start text-gray-600 ">
                    <div className="flex justify-center items-center rounded text-gray-600 gap-2">
                        <TbAlignBoxCenterTop className="w-5 h-5 lg:w-7 lg:h-7" style={{ strokeWidth: 1.5 }} />
                        <p className='font-semibold text-lg'>Action Center</p>
                    </div>
                    <div className="flex bg-red-500 gap-2 font-semibold text-white justify-center items-center px-2 rounded text-s">
                        <GoAlert className="w-3 h-3 lg:w-4 lg:h-4" />
                        <p className='lg:text-lg'>
                            Attention
                        </p>
                    </div>
                </div>
                <div className='mt-1 font-bold text-xl lg:text-2xl'>
                    12
                </div>
                <p className=' text-gray-500 font-semibold mt-1'>
                    Approval - playbooks
                </p>
            </div>
        </div>
    );
}