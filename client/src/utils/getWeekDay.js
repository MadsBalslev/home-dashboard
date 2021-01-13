export default function getWeekDay(date, mode) {
  return date.toLocaleString('da-DK', {weekday: mode})
}