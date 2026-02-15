
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { CiMenuKebab, CiGlobe, CiUser, CiClock2, CiDatabase, CiImport } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { FiBell } from 'react-icons/fi';
import DashBoard from './components/Dashboard';
import Module from './components/Module';
import Tabbar from './components/Tabbar';
function App() {

  return (
    <div className="App">
      <div className='flex h-full w-full relative'>
        <div className='hidden absolute top-0 left-0 w-[200px] h-[835px] bg-blue-50 flex flex-col gap-4 text-left w-full'>
          <button className='flex px-2 w-full justify-start'>
            <IoMdMenu size={24} />
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Overview
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Planning
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Risk
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Talent
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Governance
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Global Ops
          </button>
          <button className='border-b border-white px-2 py-2 font-bold w-full text-left'>
            Action Center
          </button>
        </div>
        <div className=''>
          <div className='flex w-full justify-between items-center mt-3 px-3 md:hidden'>
            <div className='flex items-center gap-1'>
              <button className='bg-blue-100 rounded-full px-2 py-2'>
                <IoMdMenu className='w-6 h-6' />
              </button>
              <div className='flex flex-row items-center gap-1'>
                <div className=' px-1 py-1 '>
                  <CiGlobe className='w-9 h-9 lg:w-12 lg:h-12' />
                </div>
                <div className='flex flex-col items-start'>
                  <p className='font-semibold lg:text-16 lg:font-bold lgtext-24 text-left'>
                    PeopleOps Intelligence
                  </p>
                  <p className=' text-gray-500 font-semibold text-sm lg:text-md'>Global-Governed-Design Grade </p>

                </div>
              </div>
            </div>
            <button className='bg-blue-100 rounded-full px-2 py-2'>
              <FiBell className='w-6 h-6' />
            </button>
          </div>
          <div className='mt-5 pb-2 border-b border-gray-300 gap-2  lg:flex flex-row justify-between px-2 gap-4 w-full'>
            <div className='md:flex lg:flex lg:flex-row items-center gap-1 mb-2'>
              <div className='bg-blue-100 rounded-full px-1 py-1'>
                <CiGlobe size={50} />
              </div>
              <div className='flex flex-col items-start'>
                <p className='font-bold text-24 text-left'>
                  PeopleOps Intelligence
                </p>
                <p className=' md:block lg:block text-left text-gray-500 font-semibold'>Global-Governed-Design Grade </p>

              </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-4 items-center w-full lg:w-auto '>
              <input type="text" placeholder='Search people signals,teams' className='shadow-md border-2 rounded-md px-8 py-2 text-sm lg:text-lg' />
              <div className='hidden md:flex  lg:flex  ml-2 justify-between items-center shadow-md rounded-md px-12 py-2'>
                <div className='mr-2 flex flex-row justify-start items-center font-bold'>
                  <p>Global</p>
                </div>
                <div className='ml-2 flex flex-row justify-end items-center'>
                  <select >
                  </select >
                </div>

              </div>

              <div className='ml-2 flex flex-row justify-around items-center shadow-md rounded-md px-8 py-2'>
                <div className='mr-2'>
                  <CiUser className='w-4 h-4 lg:w-6 lg:h-6' style={{ strokeWidth: 1.5 }} />
                </div>
                <p className='text-sm lg:text-lg font-bold'>Role</p>
                <select className=''>

                </select >
              </div>

              <div className='flex ml-2 lg:flex flex-row justify-around items-center font-bold shadow-md rounded-md px-12 py-2'>
                <FiBell size={20} />

                <p className='ml-2'>Notifications</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col  md:flex-col lg:flex-row items-start mt-5 px-4 gap-3' >
            <div className='lg:w-[50%] flex flex-col justify-center items-start gap-2'>
              <p className='font-bold text-md lg:text-lg text-left'>
                Global HR Intelligence Platform
              </p>
              <p className=' text-sm lg:text-md text-gray-500 text-left font-semibold'>
                Decision-grade People Analytics-Workforce Planning-Planful Cost Overlays-Governace-Action Center
              </p>
            </div>
            <div className='flex flex-col justify-start items-start '>
              <div className='flex flex-row justify-start items-center'>
                <div className='flex bg-blue-100 gap-1 rounded-lg justify-center items-center px-2 py-1'>
                  <CiDatabase className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
                  <p className='text-sm lg:text-lg font-semibold text-left'>
                    Data Health:98%
                  </p>
                </div>
                <div className='flex shadow-md rounded-lg justify-center items-center ml-4 px-4 gap-2'>
                  <CiClock2 className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
                  <p className='text-sm lg:text-lg font-semibold text-left px-1'>
                    Last Refresh: Today 08:45 AM (IST)
                  </p>
                </div>
              </div>
              <button className='flex shadow-md rounded-md mt-2 justify-center items-center py-2 px-2 gap-2'>
                <CiImport className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
                <p className='text-sm lg:text-lg font-bold flex'>
                  Export <span className='hidden'>(excel)</span>
                </p>
              </button>
            </div>
          </div>
          <DashBoard />
          <div className='flex flex-col lg:flex-row justify-between items-start mt-5 gap-4 w-full relative'>
            <Module />
            <Tabbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
