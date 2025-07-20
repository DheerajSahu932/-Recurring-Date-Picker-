'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";

const NthWeekSelector = () => {
  const { nthWeekday, setNthWeekday, frequency } = useRecurrenceStore();

  if (frequency !== "monthly") return null;

  return (
    <div className="space-y-3 animate-fade-in">
      <h4 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-bounce-in">
        Select Nth Week (1-5)
      </h4>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setNthWeekday(num)}
            className={`transition-transform duration-300 ease-in-out transform px-8 py-4 rounded-full font-semibold text-base shadow-lg border-2 overflow-hidden relative ${nthWeekday === num ? 'bg-gradient-to-r from-purple-500 to-indigo-700 text-white scale-105 border-indigo-700' : 'bg-white text-gray-700 hover:scale-105 hover:border-indigo-500 hover:text-indigo-600'}`}
          >
            <span className="relative z-10">{num}</span>
            {nthWeekday === num && (
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-700 opacity-30 blur-lg animate-pulse"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NthWeekSelector;