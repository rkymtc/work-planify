export function parseTimeString(timeStr: string): number {
    const [hourStr, minuteStr] = timeStr.split(".");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10) || 0;
    return hour * 60 + minute;
  }
  
  export function isTimeValid(start: string, end: string): boolean {
    return parseTimeString(start) <= parseTimeString(end);
  }
  