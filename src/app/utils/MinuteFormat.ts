export function minuteFormat(minute: number): string {
     const minutes= Number(minute)

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (hours > 0 && remainingMinutes > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
    }
  }