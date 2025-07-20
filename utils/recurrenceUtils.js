import { addDays, addWeeks, addMonths, addYears, isBefore, isSameMonth, startOfMonth } from "date-fns";

export const generateRecurringDates = (frequency, interval, startDate, endDate, daysOfWeek = [], nthWeekday = null) => {
  if (!startDate) return [];

  let currentDate = new Date(startDate);
  const result = [];
  const end = endDate ? new Date(endDate) : addYears(currentDate, 1);

  while (isBefore(currentDate, end) || currentDate.toDateString() === end.toDateString()) {
    if (frequency === "daily") {
      result.push(new Date(currentDate));
      currentDate = addDays(currentDate, interval);
    }

    if (frequency === "weekly") {
      for (let i = 0; i < 7; i++) {
        const tempDate = addDays(currentDate, i);
        if (daysOfWeek.includes(tempDate.getDay()) && (isBefore(tempDate, end) || tempDate.toDateString() === end.toDateString())) {
          result.push(new Date(tempDate));
        }
      }
      currentDate = addWeeks(currentDate, interval);
    }

    if (frequency === "monthly") {
      if (nthWeekday) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const nthDate = getNthWeekdayOfMonth(year, month, nthWeekday.nth, nthWeekday.day);
        if (nthDate && (isBefore(nthDate, end) || nthDate.toDateString() === end.toDateString())) {
          result.push(nthDate);
        }
        currentDate = addMonths(currentDate, interval);
      } else {
        result.push(new Date(currentDate));
        currentDate = addMonths(currentDate, interval);
      }
    }

    if (frequency === "yearly") {
      result.push(new Date(currentDate));
      currentDate = addYears(currentDate, interval);
    }
  }

  return result;
};

export const getNthWeekdayOfMonth = (year, month, nth, day) => {
  const firstDayOfMonth = startOfMonth(new Date(year, month));
  const firstDay = firstDayOfMonth.getDay();
  const offset = (7 + day - firstDay) % 7;
  const date = 1 + offset + 7 * (nth - 1);
  const result = new Date(year, month, date);

  return isSameMonth(result, firstDayOfMonth) ? result : null;
};
