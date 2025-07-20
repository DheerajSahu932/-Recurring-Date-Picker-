'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";

import NthWeekSelector from "./nthWeekSelector";

const DateSetting = () => {
  const { interval, setInterval, frequency } = useRecurrenceStore();

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600  animate-bounce-in">
        Interval & Pattern
      </h3>
      <div className="flex gap-4 flex-wrap items-center">
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(parseInt(e.target.value) || 1)}
          className="w-24 p-3 rounded-full border-2 border-gray-300 focus:border-indigo-500 outline-none text-center shadow-md hover:ring-2 hover:ring-indigo-300 transition-all"
        />
        {/* <NthWeekSelector /> */}
      </div>
    </div>
  );
};

export default DateSetting;
