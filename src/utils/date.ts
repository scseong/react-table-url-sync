import dayjs from "dayjs";

type DateFormatKey =
  | "default"
  | "iso8601"
  | "isoDate"
  | "isoDateTime"
  | "dateTimeWithMs"
  | "shortDate"
  | "europeanDate"
  | "time12h"
  | "time24h"
  | "monthDayYear"
  | "dayMonthYear"
  | "fullDateWithWeekday"
  | "yearOnly"
  | "yearMonth";

const DATE_FORMATS: Record<DateFormatKey, string> = {
  default: "YYYY-MM-DD",
  iso8601: "YYYY-MM-DDTHH:mm:ssZ",
  isoDate: "YYYY-MM-DD",
  isoDateTime: "YYYY-MM-DD HH:mm:ss",
  dateTimeWithMs: "YYYY-MM-DD HH:mm:ss.SSS",
  shortDate: "MM/DD/YYYY",
  europeanDate: "DD/MM/YYYY",
  time12h: "hh:mm A",
  time24h: "HH:mm",
  monthDayYear: "MMM D, YYYY",
  dayMonthYear: "D MMM YYYY",
  fullDateWithWeekday: "dddd, MMMM D, YYYY",
  yearOnly: "YYYY",
  yearMonth: "YYYY MM"
};

/**
 * 날짜 문자열을 지정한 포맷으로 변환합니다.
 * @param dateString 변환할 날짜 문자열 (예: '2025-02-25')
 * @param formatKey 포맷 키 (기본값: 'default')
 *  - default: 'YYYY-MM-DD'
 *  - iso8601: 'YYYY-MM-DDTHH:mm:ssZ'
 *  - isoDate: 'YYYY-MM-DD'
 *  - isoDateTime: 'YYYY-MM-DD HH:mm:ss'
 *  - dateTimeWithMs: 'YYYY-MM-DD HH:mm:ss.SSS'
 *  - shortDate: 'MM/DD/YYYY'
 *  - europeanDate: 'DD/MM/YYYY'
 *  - time12h: 'hh:mm A'
 *  - time24h: 'HH:mm'
 *  - monthDayYear: 'MMM D, YYYY'
 *  - dayMonthYear: 'D MMM YYYY'
 *  - fullDateWithWeekday: 'dddd, MMMM D, YYYY'
 *  - yearOnly: 'YYYY'
 *  - yearMonth: 'YYYY.MM'
 * @returns 포맷팅된 날짜 문자열. 유효하지 않은 날짜이면 빈 문자열 반환
 */
export const formatDate = (dateString: string, formatKey: DateFormatKey = "default"): string => {
  const date = dayjs(dateString);
  if (!date.isValid()) return "";
  const formatStr = DATE_FORMATS[formatKey];
  return date.format(formatStr);
};
