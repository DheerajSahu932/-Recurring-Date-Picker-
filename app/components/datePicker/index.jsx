import DateOption from "./dateOption";
import DateSetting from "./dateSetting";
import RangeSelector from "./rangeSelector";
import WeekdaySelector from "./weekdaySelector";
import NthWeekSelector from "./nthWeekSelector";
import Preview from "./preview";

const DatePicker = () => (
  <div className="max-w-xl bg-white text-gray-800 p-6 rounded-xl shadow-lg space-y-5">
    <DateOption />
    <DateSetting />
    <WeekdaySelector />
    <NthWeekSelector />
    <RangeSelector />
    <Preview />
  </div>
);

export default DatePicker;
