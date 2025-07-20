import { create } from "zustand";

export const useRecurrenceStore = create((set) => ({
  frequency: "daily",
  interval: 1,
  startDate: new Date(),
  endDate: null,
  daysOfWeek: [],
  nthWeekday: { week: 1, day: "Monday" },

  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setDaysOfWeek: (daysOfWeek) => set({ daysOfWeek }),
  setNthWeekday: (nthWeekday) => set({ nthWeekday }),
}));
