import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const runtimeToHourMinute = (runtime: number | null) => {
  if (runtime == null) return "-";

  const dur = dayjs.duration(runtime, "minutes");
  const hours = dur.hours();
  const minutes = dur.minutes();
  if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h`;
  return `${minutes}m`;
};
