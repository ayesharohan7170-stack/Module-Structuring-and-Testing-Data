function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours === 0) {
    return "12:00 am";
  }

  if (hours === 12) {
    return "12:00 pm";
  }

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }

  return `${time} am`;
}
console.log(formatAs12HourClock("09:00")); 
console.log(formatAs12HourClock("23:00")); 
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("00:00")); 
console.log(formatAs12HourClock("15:00")); 
console.log(formatAs12HourClock("10:00"));

