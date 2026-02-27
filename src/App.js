
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
      <div className='w-full'>
        <div className='mt-5 pb-2 border-b border-gray-300 gap-2  lg:flex flex-row justify-between px-2 gap-4 w-full'>
          <div className='md:flex lg:flex lg:flex-row items-center gap-1 mb-2'>
            <div className='bg-blue-100 rounded-full px-1 py-1'>
              <CiGlobe size={50} />
            </div>
            <div className='flex flex-col items-start'>
              <p className='font-bold text-24 text-left lg:text-xl'>
                PeopleOps Intelligence
              </p>
              <p className=' md:block lg:block text-left text-gray-500 font-semibold lg:text-lg'>Global-Governed-Design Grade </p>

            </div>
          </div>
          <div className='flex flex-row items-center justify-between gap-4 items-center w-full lg:w-auto '>
            <input type="text" placeholder='Search people signals,teams' className='shadow-md border-2 rounded-md px-8 py-2 text-lg' />
            <div className='hidden md:flex  lg:flex  ml-2 justify-between items-center shadow-md rounded-md px-12 py-2'>
              <div className='mr-2 flex flex-row justify-start items-center font-bold lg:text-lg'>
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
              <p className='font-bold lg:text-lg'>Role</p>
              <select className=''>

              </select >
            </div>

            <div className='flex ml-2 lg:flex flex-row justify-around items-center font-bold shadow-md rounded-md px-12 py-2'>
              <FiBell size={20} />

              <p className='ml-2 lg:text-lg'>Notifications</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col  md:flex-col lg:flex-row items-start mt-5 px-4 gap-3' >
          <div className='lg:w-[50%] flex flex-col justify-center items-start gap-2'>
            <p className='font-bold text-md lg:text-xl text-left'>
              Global HR Intelligence Platform
            </p>
            <p className=' lg:text-lg text-gray-500 text-left font-semibold'>
              Decision-grade People Analytics-Workforce Planning-Planful Cost Overlays-Governace-Action Center
            </p>
          </div>
          <div className='flex flex-col justify-start items-start '>
            <div className='flex flex-row justify-start items-center'>
              <div className='flex bg-blue-100 gap-1 rounded-lg justify-center items-center px-2 py-1'>
                <CiDatabase className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
                <p className='text-lg lg:text-xl font-semibold text-left'>
                  Data Health:98%
                </p>
              </div>
              <div className='flex shadow-md rounded-lg justify-center items-center ml-4 px-4 gap-2'>
                <CiClock2 className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
                <p className='text-lg lg:text-xl font-semibold text-left px-1'>
                  Last Refresh: Today 08:45 AM (IST)
                </p>
              </div>
            </div>
            <button className='flex shadow-md rounded-md mt-2 justify-center items-center py-2 px-2 gap-2'>
              <CiImport className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1.5 }} />
              <p className='text-lg lg:text-xl font-bold flex'>
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
  );
}

export default App;
