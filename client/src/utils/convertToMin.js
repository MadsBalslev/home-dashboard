export default function convertToMin(ms) {
  let sec = ms * 1000;
  let min = sec % 60;

  sec = sec - (min * sec);

  return {
    sec: sec,
    min: min,
  }
}