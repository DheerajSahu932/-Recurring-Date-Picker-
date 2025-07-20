'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";
import { generateRecurringDates } from "../../../utils/recurrenceUtils";
import { useMemo } from "react";
import { format } from "date-fns";

const Preview = () => {
  const { frequency, interval, startDate, endDate, daysOfWeek, nthWeekday } = useRecurrenceStore();

  const dates = useMemo(() => {
    if (!startDate || (frequency === "weekly" && (!daysOfWeek || daysOfWeek.length === 0))) return [];
    return generateRecurringDates(frequency, interval, startDate, endDate, daysOfWeek, nthWeekday);
  }, [frequency, interval, startDate, endDate, daysOfWeek, nthWeekday]);

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 animate-bounce-in">Upcoming Dates</h3>
      <ul className="list-none grid grid-cols-2 gap-4 max-h-64 overflow-y-auto animate-slide-in">
        {dates.map((date, idx) => (
          <li
            key={idx}
            className="py-3 px-{-1} bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl text-gray-800 hover:from-purple-600 hover:to-indigo-700 hover:text-white hover:scale-105 transition-all duration-300 shadow-md text-center font-medium text-lg cursor-pointer"
          >
            {format(date, "dd-MMMM-yyyy")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;

