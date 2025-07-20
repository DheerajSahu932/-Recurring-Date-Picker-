import { generateRecurringDates } from "../utils/recurrenceUtils";

describe("generateRecurringDates", () => {
  it("should generate daily recurring dates", () => {
    const dates = generateRecurringDates("daily", 1, "2024-01-01", "2024-01-05");
    expect(dates.length).toBe(5);
  });

  it("should generate weekly recurring dates on specific days", () => {
    const daysOfWeek = [1, 3]; // Monday and Wednesday
    const dates = generateRecurringDates("weekly", 1, "2024-01-01", "2024-01-31", daysOfWeek);
    expect(dates.length).toBeGreaterThan(0);
  });

  it("should generate monthly recurring dates with nth weekday", () => {
    const nthWeekday = { nth: 2, day: 3 }; // 2nd Wednesday
    const dates = generateRecurringDates("monthly", 1, "2024-01-01", "2024-12-31", [], nthWeekday);
    expect(dates.length).toBeGreaterThan(0);
    dates.forEach(date => {
      expect(date.getDay()).toBe(3); // 3 = Wednesday
    });
  });

  it("should return empty array if start date is missing", () => {
    const dates = generateRecurringDates("daily", 1, null, "2024-01-05");
    expect(dates.length).toBe(0);
  });
});
