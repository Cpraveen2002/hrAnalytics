import React from 'react'

const Dialog = ({ open, onClose }) => {
    if (!open) return null;

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
                    Region Drill-down: APAC
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-gray-500">Headcount</p>
                        <p className="text-2xl font-bold">420</p>
                        <p className="text-xs text-gray-400">Region total</p>
                    </div>
                    <div className="border rounded-xl p-4">
                        <p className="text-sm text-gray-500">Open Roles</p>
                        <p className="text-2xl font-bold">28</p>
                        <p className="text-xs text-gray-400">Pipeline</p>
                    </div>

                    <div className="border border-red-400 rounded-xl p-4 relative">
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Attention
                        </span>
                        <p className="text-sm text-gray-500">Top Risk</p>
                        <p className="text-2xl font-bold">Hiring</p>
                        <p className="text-xs text-gray-400">Primary signal</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="border rounded-xl p-4">
                        <p className="font-bold mb-1">Headcount by Function</p>
                        <p className="text-sm text-gray-500 mb-4">
                            Click a department for cohort drill-down.
                        </p>

                        <div className="flex items-end gap-6 h-64">
                            {[
                                { name: "R&D", value: 150 },
                                { name: "Operations", value: 120 },
                                { name: "Sales", value: 90 },
                                { name: "G&A", value: 60 },
                            ].map((item) => (
                                <div key={item.name} className="flex flex-col items-center gap-2">
                                    <div
                                        className="w-12 bg-black rounded"
                                        style={{ height: `${item.value}px` }}
                                    />
                                    <span className="text-sm">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-xl p-4 space-y-3">
                        <p className="font-bold">Functions</p>
                        <p className="text-sm text-gray-500">
                            Select a department to view cohorts & actions.
                        </p>

                        <div className="border rounded-lg p-3 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">R&D</p>
                                <p className="text-sm text-gray-500">HC 150 • Open 10</p>
                            </div>
                            <span className="border px-2 py-1 rounded text-sm">2.6% attr</span>
                        </div>

                        <div className="border rounded-lg p-3 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Operations</p>
                                <p className="text-sm text-gray-500">HC 120 • Open 7</p>
                            </div>
                            <span className="border px-2 py-1 rounded text-sm">3.1% attr</span>
                        </div>

                        <div className="border rounded-lg p-3 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">Sales</p>
                                <p className="text-sm text-gray-500">HC 90 • Open 8</p>
                            </div>
                            <span className="border px-2 py-1 rounded text-sm">3.4% attr</span>
                        </div>

                        <div className="border rounded-lg p-3 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">G&A</p>
                                <p className="text-sm text-gray-500">HC 60 • Open 3</p>
                            </div>
                            <span className="border px-2 py-1 rounded text-sm">2% attr</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button className="px-4 py-2 rounded-md border">
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