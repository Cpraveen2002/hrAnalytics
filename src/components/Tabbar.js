import React from 'react'
import { CiFilter, CiUser } from "react-icons/ci";
import Overview from './Overview';
import Planning from './Planning';
import Risk from './Risk';
import GlobalOPs from './GlobalOPs';
import ActionCenter from './ActionCenter';
import Talent from './Talent';
import Governance from './Governance';
const Tabbar = () => {
    const [active, setActive] = React.useState("Overview");
    return (
        <div className='flex flex-col shadow-sm border-2 border-gray-30 gap-2 px-2 py-3 rounded-xl justify-start items-start w-full m-2'>
            <div className='flex  md:flex flex-col justify-between lg:flex lg:flex-row justify-between items-center gap-3 w-full'>
                <div className='flex w-full bg-blue-100 rounded-lg justify-between px-2 py-2 font-bold text-lg border-2 border-gray-30'>
                    <button className={`h-full px-4 py-1 rounded-xl text-gray-500 font-semibold ${active === "Overview" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Overview")}>
                        Overview
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Planning" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Planning")}>
                        Planning
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Risk" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Risk")}>
                        Risk
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Talent" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Talent")}>
                        Talent
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Governance" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Governance")}>
                        Governance
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Global Ops" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Global Ops")}>
                        Global Ops
                    </button>
                    <button className={`h-full px-4 py-1 rounded-lg text-gray-500 font-semibold ${active === "Action Center" ? "bg-white shadow-md text-black" : ""}`} onClick={() => setActive("Action Center")}>
                        Action Center
                    </button>
                </div>
                <div className=' flex flex-row w-full justify-between items-start lg:flex-row items-center gap-2 items-start'>
                    <div className='flex gap-2 flex-row justify-center items-center rounded-2xl font-bold shadow-sm px-2 py-1 border-2 border-gray-30'>
                        <CiFilter className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1 }} />
                        <p className='text-lg'>
                            Global
                        </p>
                    </div>
                    <div className=' flex gap-2 flex-row justify-center items-center rounded-2xl shadow-sm py-1 px-1 border-2 border-gray-30'>
                        <CiUser className='w-6 h-6 lg:w-8 lg:h-8' style={{ strokeWidth: 1 }} />
                        <p className='text-left font-bold text-lg'>
                            HR Data Analytics Specialst
                        </p>
                    </div>
                </div>
            </div>
            {active === "Overview" && <Overview />}
            {active === "Planning" && <Planning />}
            {active === "Risk" && <Risk />}
            {active === "Global Ops" && <GlobalOPs />}
            {active === "Action Center" && <ActionCenter />}
            {active === "Talent" && <Talent />}
            {active === "Governance" && <Governance />}
        </div>
    )
}

export default Tabbar