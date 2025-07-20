export const generateRecurringDates = (frequency, interval, startDate, endDate, daysOfWeek, nthWeekday) => {
  if (!startDate) return [];
  if (frequency === "weekly" && (!daysOfWeek || daysOfWeek.length === 0)) return [];

  const dates = [];
  let current = new Date(startDate);
  const maxDates = 10;

  while (dates.length < maxDates) {
    if (endDate && current > endDate) break;

    if (frequency === "daily") {
      dates.push(new Date(current));
      current.setDate(current.getDate() + interval);
    } else if (frequency === "weekly") {
      for (let day of daysOfWeek.sort()) {
        const next = new Date(current);
        next.setDate(next.getDate() + ((7 + day - next.getDay()) % 7));
        if ((!endDate || next <= endDate) && next >= startDate) {
          dates.push(new Date(next));
          if (dates.length >= maxDates) break;
        }
      }
      current.setDate(current.getDate() + interval * 7);
    } else if (frequency === "monthly") {
      const next = new Date(current);
      const targetDay = nthWeekday.day;
      const week = nthWeekday.week;
      next.setDate(1);
      let count = 0;
      for (let i = 1; i <= 31; i++) {
        next.setDate(i);
        if (next.getMonth() !== current.getMonth()) break;
        if (next.toLocaleDateString("en-US", { weekday: "long" }) === targetDay) {
          count++;
          if (count === week) break;
        }
      }
      if ((!endDate || next <= endDate) && next >= startDate) dates.push(new Date(next));
      current.setMonth(current.getMonth() + interval);
    } else if (frequency === "yearly") {
      dates.push(new Date(current));
      current.setFullYear(current.getFullYear() + interval);
    }
  }

  return dates.slice(0, maxDates);
};
