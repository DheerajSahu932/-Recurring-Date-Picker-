'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";

const NthWeekSelector = () => {
  const { nthWeekday, setNthWeekday, frequency } = useRecurrenceStore();

  if (frequency !== "monthly") return null;

  const weekNumbers = [1, 2, 3, 4, 5];
  const weekDays = [
    { day: 0, label: "Sun" },
    { day: 1, label: "Mon" },
    { day: 2, label: "Tue" },
    { day: 3, label: "Wed" },
    { day: 4, label: "Thu" },
    { day: 5, label: "Fri" },
    { day: 6, label: "Sat" }
  ];

  return (
    <div className="space-y-4 w-full max-w-md mx-auto transition-all duration-300">
      <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center">
        Select Nth Week & Day
      </h4>

      <div className="flex flex-col gap-4 w-full">
        {/* Week Number Selector */}
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl w-full">
          {weekNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setNthWeekday({ ...nthWeekday, nth: num })}
              className={`transition-all duration-300 px-5 py-3 rounded-full font-semibold text-base shadow-md border-2 ${
                nthWeekday?.nth === num
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white scale-105'
                  : 'bg-white text-gray-700 hover:scale-105 hover:text-indigo-600'
              }`}
            >
              {num} Week
            </button>
          ))}
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl w-full">
          {weekDays.map(({ day, label }) => (
            <button
              key={day}
              onClick={() => setNthWeekday({ ...nthWeekday, day })}
              className={`transition-all duration-300 px-5 py-3 rounded-full font-semibold text-base shadow-md border-2 ${
                nthWeekday?.day === day
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white scale-105'
                  : 'bg-white text-gray-700 hover:scale-105 hover:text-indigo-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NthWeekSelector;
