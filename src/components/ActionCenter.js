import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { FiAlertTriangle, FiBell } from "react-icons/fi";
import { MdOutlineEventNote } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiGitForkLight } from "react-icons/pi";
const ActionCenter = () => {
    return (
        <div className='flex flex-col justify-start items-start gap-3 px-4 py-2 mt-2 w-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col items-start'>
                    <p className='font-bold text-xl'>
                        Action Center
                    </p>
                    <p className='text-left text-gray-500 font-semibold'>
                        Turn insights into action: approvals, playbooks, reminders and  operational follow-through.
                    </p>
                </div>
                <button className='flex gap-2 rounded-md bg-black text-white items-center px-4 py-2'>
                    <CiCircleCheck size={24} />
                    <span>
                        Create Action
                    </span>
                </button>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 w-full '>
                <div className='flex flex-col gap-1 border-2 border-red-200 rounded-md justify-start items-start px-4 py-3'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-left text-gray-500 font-semibold'>
                            Pending Approvals
                        </p>
                        <div className='flex gap-2 justify-start items-center bg-red-500 text-white font-semibold rounded-full px-1 py-1'>
                            <FiAlertTriangle />
                            <span>
                                Attention
                            </span>
                        </div>
                    </div>
                    <p className='font-bold text-2xl'>
                        3
                    </p>
                    <p className='text-gray-500 text-left'>
                        Need decision
                    </p>
                </div>
                <div className='flex flex-col gap-1 shadow-md rounded-md justify-start items-start px-4 py-3'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-left text-gray-500 font-semibold'>
                            Active Playbooks
                        </p>
                    </div>
                    <p className='font-bold text-2xl'>
                        3
                    </p>
                    <p className='text-gray-500 text-left'>
                        Reusable workflows
                    </p>
                </div>
                <div className='flex flex-col gap-1 shadow-md rounded-md justify-start items-start px-4 py-3'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='text-left text-gray-500 font-semibold'>
                            Remiders
                        </p>
                    </div>
                    <p className='font-bold text-2xl'>
                        3
                    </p>
                    <p className='text-gray-500 text-left'>
                        Recurring ops
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 w-full'>
                <div className='flex flex-col  gap-2 px-4 py-2 rounded-md shadow-md lg:w-[50%]'>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <p className='font-bold text-left'>
                                Approvals Queue
                            </p>
                            <p className='font-semibold text-left text-gray-500'>
                                Governed decisions with accountability.
                            </p>
                        </div>
                        <div className='flex gap-2 rounded-lg shadow-md px-3 py-1 font-bold'>
                            <MdOutlineEventNote size={24} />
                            <span>
                                Queue
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 shadow-md rounded-lg px-4 py-2'>
                        <div className='flex gap-2 justify-between items-center items-center w-full'>
                            <p className='font-bold text-lg text-left'>
                                APR-301
                            </p>
                            <div className='flex justify-between items-center gap-2'>
                                <span className='font-semibold bg-red-500 text-white rounded-full px-2 py-1'>Pending</span>
                                <span className='font-bold shadow-md px-2 py-1 rounded-full'>EMEA</span>
                                <span className='font-bold gap-2 flex rounded-full bg-blue-100 px-2 py-1'>
                                    <AiOutlineClockCircle size={24} />
                                    <span>Today</span>
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between w-full'>
                            <div>
                                <p className='text-black font-semibold text-left'>
                                    Headcount Change
                                </p>
                                <p className='text-gray-500 text-left font-semibold'>
                                    Owner: jillan + 3 roles in R&D
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <button className='shadow-md font-bold rounded-md px-2 py-1'>Open</button>
                                <button className='bg-black font-bold text-white rounded-md px-2 py-1'> Approve</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 shadow-md rounded-lg px-4 py-2'>
                        <div className='flex gap-2 justify-between items-center items-center w-full'>
                            <p className='font-bold text-lg text-left'>
                                APR-317
                            </p>
                            <div className='flex justify-between items-center gap-2'>
                                <span className='font-semibold bg-red-500 text-white rounded-full px-2 py-1'>Pending</span>
                                <span className='font-bold shadow-md px-2 py-1 rounded-full'>EMEA</span>
                                <span className='font-bold gap-2 flex rounded-full bg-blue-100 px-2 py-1'>
                                    <AiOutlineClockCircle size={24} />
                                    <span>Tomorrow</span>
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between w-full'>
                            <div>
                                <p className='text-black font-semibold text-left'>
                                    Retention Action
                                </p>
                                <p className='text-gray-500 text-left font-semibold'>
                                    Owner: HR Ops - Conter-offer guidance
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <button className='shadow-md font-bold rounded-md px-2 py-1'>Open</button>
                                <button className='bg-black font-bold text-white rounded-md px-2 py-1'> Approve</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 shadow-md rounded-lg px-4 py-2'>
                        <div className='flex gap-2 justify-between items-center items-center w-full'>
                            <p className='font-bold text-lg text-left'>
                                APR-330
                            </p>
                            <div className='flex justify-between items-center gap-2'>
                                <span className='font-semibold bg-blue-100 font-bold 
                                rounded-full px-2 py-1'>In review</span>
                                <span className='font-bold shadow-md px-2 py-1 rounded-full'>EMEA</span>
                                <span className='font-bold gap-2 flex rounded-full bg-blue-100 px-2 py-1'>
                                    <AiOutlineClockCircle size={24} />
                                    <span>2d</span>
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between w-full'>
                            <div>
                                <p className='text-black font-semibold text-left'>
                                    Headcount Change
                                </p>
                                <p className='text-gray-500 text-left font-semibold'>
                                    Owner: jillan + 3 roles in R&D
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <button className='shadow-md font-bold rounded-md px-2 py-1'>Open</button>
                                <button className='bg-black font-bold text-white rounded-md px-2 py-1'> Approve</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 shadow-md px-4 py-2 rounded-md lg:w-[50%]'>
                    <div className='flex items-center w-full justify-between'>
                        <div>
                            <p className='text-left font-bold'>
                                Playbooks
                            </p>
                            <p className='text-left text-gray-500 font-semibold'>
                                Operations repeatable HR actions.
                            </p>
                        </div>
                        <div className='flex rounded-full shadow-md px-2 py-1 font-bold gap-2 items-center'>
                            < PiGitForkLight />
                            <span>
                                Playbooks
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-2 items-start px-4 py-2 rounded-md w-full shadow-md'>
                        <div className='flex w-full justify-between items-center'>
                            <p className='font-bold text-left text-lg'>
                                High Performer- Retention
                            </p>
                            <span className='font-semibold bg-blue-100 rounded-full px-2 py-1'>
                                Owner: HR Ops
                            </span>
                        </div>
                        <div className='flex flex-col items-start gap-1 font-semibold text-gray-500'>
                            <p>1.Identify driver</p>
                            <p>2.Manager 1:1</p>
                            <p>3.Comp review</p>
                            <p>4.Growth plann</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='font-semibold rounded-md px-4 py-1 shadow-md'>View</button>
                            <button className='font-semibold rounded-md px-4 py-1 bg-black text-white'>Run Playbook</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-2 items-start px-4 py-2 rounded-md w-full shadow-md'>
                        <div className='flex w-full justify-between items-center'>
                            <p className='font-bold text-left text-lg'>
                                Hiring Freeze-Critical Roles
                            </p>
                            <span className='font-semibold bg-blue-100 rounded-full px-2 py-1'>
                                Owner: HR Ops
                            </span>
                        </div>
                        <div className='flex flex-col items-start gap-1 font-semibold text-gray-500'>
                            <p>1.Freeze non-critical </p>
                            <p>2.Backfill exceptions</p>
                            <p>3.Internal mobility</p>
                            <p>4.Quarterly review</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='font-semibold rounded-md px-4 py-1 shadow-md'>View</button>
                            <button className='font-semibold rounded-md px-4 py-1 bg-black text-white'>Run Playbook</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-2 items-start px-4 py-2 rounded-md w-full shadow-md'>
                        <div className='flex w-full justify-between items-center'>
                            <p className='font-bold text-left text-lg'>
                                Data Integrity - Monthly Close
                            </p>
                            <span className='font-semibold bg-blue-100 rounded-full px-2 py-1'>
                                Owner: HR Ops
                            </span>
                        </div>
                        <div className='flex flex-col items-start gap-1 font-semibold text-gray-500'>
                            <p>1.Workday snapshot</p>
                            <p>2.Planful reconcile</p>
                            <p>3.Variance explian</p>
                            <p>4.Certify outputs</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='font-semibold rounded-md px-4 py-1 shadow-md'>View</button>
                            <button className='font-semibold rounded-md px-4 py-1 bg-black text-white'>Run Playbook</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-4 py-2 bg-blue-50 shadow-md rounded-md w-full'>
                        <div className='flex font-semibold gap-2 items-center text-xl'>
                            <FiBell size={24} />
                            <span>Reminders</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-left font-semibold text-gray-500'>
                                US TZ overlap check-in
                            </p>
                            <span className='font-bold shadow-md px-3 py-1 bg-white rounded-full'>
                                Daily
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-left font-semibold text-gray-500'>
                                Planful variance notes
                            </p>
                            <span className='font-bold shadow-md px-3 py-1 bg-white rounded-full'>
                                Montly colse
                            </span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-left font-semibold text-gray-500'>
                                Performance data completeness
                            </p>
                            <span className='font-bold shadow-md px-3 py-1 bg-white rounded-full'>
                                Weekly
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionCenter