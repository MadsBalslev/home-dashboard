export default function isToday(unixDate) {
  const today = new Date();
  const someDate = new Date(unixDate * 1000);
  
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}