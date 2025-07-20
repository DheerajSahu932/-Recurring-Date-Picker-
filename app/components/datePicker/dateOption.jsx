'use client';

import { useRecurrenceStore } from "../../store/recurrenceStore";


const DateOption = () => {
  const { frequency, setFrequency } = useRecurrenceStore();

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 animate-bounce-in">Select Frequency</h3>
      <div className="flex flex-wrap gap-3 p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl">
        {["daily", "weekly", "monthly", "yearly"].map((freq) => (
          <button
            key={freq}
            onClick={() => setFrequency(freq)}
            className={`transition-all duration-500 ease-in-out transform px-6 py-3 rounded-full font-semibold text-base shadow-lg border-2 overflow-hidden relative
              ${frequency === freq ? "bg-gradient-to-r from-purple-500 to-indigo-700 text-white scale-105 border-indigo-700" : "bg-white text-gray-700 hover:scale-105 hover:border-indigo-500 hover:text-indigo-600"}`}
          >
            <span className="relative z-10">{freq.charAt(0).toUpperCase() + freq.slice(1)}</span>
            {frequency === freq && (
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-700 opacity-30 blur-lg animate-pulse"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateOption;