'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";
const RangeSelector = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-bounce-in">Date Range</h3>
      <div className="flex gap-4 flex-wrap">
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="flex-1 p-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 outline-none shadow-md hover:ring-2 hover:ring-indigo-300 transition-all"
        />
        <input
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ""}
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
          className="flex-1 p-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 outline-none shadow-md hover:ring-2 hover:ring-indigo-300 transition-all"
        />
      </div>
    </div>
  );
};

export default RangeSelector;