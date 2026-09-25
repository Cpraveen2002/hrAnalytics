import React from 'react'

const toPercentLabel = (value) => `${(Number(value || 0) * 100).toFixed(1)}%`;

const Dialog = ({ open, onClose, drilldownData }) => {
    if (!open) return null;

    const region = drilldownData?.region || "APAC";
    const headcount = drilldownData?.headcount ?? 0;
    const openRoles = drilldownData?.openRoles ?? 0;
    const topRisk = drilldownData?.topRisk || "Hiring";
    const functions = drilldownData?.functions || [];
    const maxHeadcount = Math.max(1, ...functions.map((item) => Number(item.headcount || 0)));

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-[95%] max-w-6xl rounded-xl shadow-xl p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold"
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-6">
                    Region Drill-down: {region}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border rounded-xl p-4 font-bold">
                        <p className=" text-gray-500">Headcount</p>
                        <p className="text-2xl font-bold">{headcount}</p>
                        <p className=" text-gray-400">Region total</p>
                    </div>
                    <div className="border rounded-xl p-4 font-bold">
                        <p className=" text-gray-500">Open Roles</p>
                        <p className="text-2xl font-bold">{openRoles}</p>
                        <p className=" text-gray-400">Pipeline</p>
                    </div>

                    <div className="border border-red-400 rounded-xl p-4 relative font-bold">
                        <span className="absolute top-3 right-3 bg-red-500 text-white  px-2 py-1 rounded">
                            Attention
                        </span>
                        <p className="text-gray-500">Top Risk</p>
                        <p className="text-2xl font-bold">{topRisk}</p>
                        <p className="text-gray-400">Primary signal</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="border rounded-xl p-4">
                        <p className="font-bold mb-1">Headcount by Department</p>
                        {/* <p className="text-sm text-gray-500 mb-4">
                            Click a department for cohort drill-down.
                        </p> */}

                        <div className="flex items-end gap-6 h-64">
                            {functions.map((item) => (
                                <div key={item.name} className="flex flex-col items-center gap-2">
                                    <div
                                        className="w-12 bg-black rounded"
                                        style={{ height: `${Math.max(20, Math.round((Number(item.headcount || 0) / maxHeadcount) * 180))}px` }}
                                    />
                                    <span className="font-semibold">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-xl p-4 space-y-3">
                        <p className="font-bold">Functions</p>
                        {/* <p className="text-sm text-gray-500">
                            Select a department to view cohorts & actions.
                        </p> */}

                        {functions.map((item) => (
                            <div key={`${item.name}-detail`} className="border rounded-lg p-3 flex justify-between items-center">
                                <div className='font-semibold'>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-500">HC {item.headcount} • Open {item.openRoles}</p>
                                </div>
                                <span className="border px-2 py-1 rounded">{toPercentLabel(item.attritionRate)} attr</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button className="px-4 py-2 rounded-md border font-semibold border-gray-300" onClick={() => alert('Set as active filter')}>
                        Set as active filter
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md bg-black text-white"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;