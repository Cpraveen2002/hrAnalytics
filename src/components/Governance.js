import React from 'react'
import { CiDatabase } from "react-icons/ci";
import { FiAlertTriangle } from "react-icons/fi"
const data = [
    { id: "DQ-1021", serverity: "High", system: "Workday", issue: "Duplicate worker IDs", impact: "Headcount mismatch", owner: "HRIS", age: "2d" },
    { id: "DQ-0998", serverity: "High", system: "Planful", issue: "Cost center unmapped", impact: "Workforce cost variance", owner: "Finance", age: "5d" },
    { id: "DQ-1107", serverity: "Medium", system: "Performance", issue: "Missing rating for 34 employees", impact: "Talent review gaps", owner: "HR Ops", age: "1d" },
    { id: "DQ-1044", serverity: "Low", system: "Workday", issue: "Manager hierarchy drift", impact: "Approval routing", owner: "HRIS", age: "3h" },
];
const Governance = () => {
    return (
        <div className='w-full flex flex-col gap-3 px-4 py-2 justify-start items-start mt-3'>
            <div className='flex items-center justify-between w-full'>
                <div className=''>
                    <p className='font-bold text-lg text-left'>
                        HR Data Governance & Integrity
                    </p>
                    <p className='font-semibold text-left text-gray-500 '>
                        Reconciliations, issue tracking, audit trails - build trust for a global data-driven HR Ops model.
                    </p>
                </div>
                <div className='flex bg-blue-50 items-center px-2 py-1 rounded-full  border-2 border-gray-30'>
                    <CiDatabase className="w-5 h-5 lg:w-8 lg:h-8" />
                    <p className='font-bold '>
                        Single Source of Truth
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 w-full'>
                <div className='flex flex-col gap-2 border-2 border-red-100  rounded-md justify-start items-start px-4 py-4'>
                    <div className='flex w-full justify-between'>
                        <p className='text-left font-bold text-gray-500 '>
                            Open Data Issues
                        </p>
                        <div className='flex gap-2 bg-red-500 text-white px-2 items-center rounded-full'>
                            <FiAlertTriangle className="w-4 h-4 lg:w-6 lg:h-6" />
                            <span className='text-sm lg:text-md'>
                                Attention
                            </span>
                        </div>
                    </div>
                    <p className='font-bold text-xl lg:text-2xl'>
                        4
                    </p>
                    <p className='text-left text-gray-500 font-semibold '>
                        Across Systems
                    </p>
                </div>
                <div className='flex flex-col gap-2 shadow-sm border-2 border-gray-30  rounded-md justify-start items-start px-4 py-4'>
                    <div className='flex w-full justify-between'>
                        <p className='text-left font-bold text-gray-500 '>
                            Reconciliation
                        </p>
                    </div>
                    <p className='font-bold text-xl lg:text-2xl'>
                        Workday - Planful
                    </p>
                    <p className='text-left text-gray-500 font-semibold '>
                        Last run: Today
                    </p>
                </div>
                <div className='flex flex-col gap-2 shadow-sm border-2 border-gray-30  rounded-md justify-start items-start px-4 py-4'>
                    <div className='flex w-full justify-between'>
                        <p className='text-left font-bold text-gray-500 '>
                            Audit Trail
                        </p>
                    </div>
                    <p className='font-bold text-xl lg:text-2xl'>
                        Enabled
                    </p>
                    <p className='text-left text-gray-500 font-semibold '>
                        Change logging
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-2 shadow-sm border-2 border-gray-30 rounded-md px-4 py-2 w-full items-start'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-start'>
                        <p className='font-bold  '>
                            Data Quality Issue Log
                        </p>
                        <p className='font-semibold text-left text-gray-500 '>
                            Track, assign, and resolve issuses with ownership and SLA.
                        </p>
                    </div>
                    <div className='rounded-md px-2 py-2 bg-black text-white font-semibold flex gap-1'>
                        <CiDatabase className="w-4 h-4 lg:w-6 lg:h-6" />
                        <span className=''>New Issue</span>
                    </div>
                </div>
                <table className='w-full'>
                    <thead>
                        <tr className="border-b-2 text-gray-500">
                            <th className=" px-6 py-2 ">ID</th>
                            <th className=" px-6 py-2 ">Severity</th>
                            <th className="px-6 py-2  ">System</th>
                            <th className="px-6 py-2 ">Issue</th>
                            <th className="px-6 py-2 ">Impact</th>
                            <th className=" px-6 py-2 ">Owner</th>
                            <th className="px-6 py-2 ">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr className="border-b last:border-0 font-semibold ">
                                        <td className="px-3 py-4 ">{item.id}</td>
                                        <td className="px-3py-4 ">
                                            {item.serverity === "High" && <span className="rounded-full bg-red-500 px-3 py-1  font-bold text-white">
                                                High
                                            </span>}
                                            {item.serverity === "Medium" && <span className="rounded-full bg-blue-50 px-3 py-1  font-bold">
                                                Medium
                                            </span>}
                                            {
                                                item.serverity === "Low" && <span className="rounded-full shadow-md px-3 py-1 font-bold">
                                                    Low
                                                </span>
                                            }
                                        </td>
                                        <td className="px-3 py-4 ">{item.system}</td>
                                        <td className="px-3 py-4 ">
                                            {item.issue}
                                        </td>
                                        <td className="px-3 py-4  text-gray-600 ">
                                            {item.impact}
                                        </td>
                                        <td className="px-3 py-4 ">{item.owner}</td>
                                        <td className="px-3 py-4">{item.age}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Governance