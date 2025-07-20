'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";



const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeekdaySelector = () => {
  const { daysOfWeek, setDaysOfWeek, frequency } = useRecurrenceStore();

  if (frequency !== "weekly") return null;

  const toggleDay = (dayIndex) => {
    setDaysOfWeek(
      daysOfWeek.includes(dayIndex)
        ? daysOfWeek.filter((d) => d !== dayIndex)
        : [...daysOfWeek, dayIndex]
    );
  };

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">Select Days of the Week</h3>
      <div className="flex gap-2 flex-wrap">
        {weekdays.map((day, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-lg border ${daysOfWeek.includes(idx) ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => toggleDay(idx)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeekdaySelector;