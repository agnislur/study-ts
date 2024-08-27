export function formatToWIB(dateString: string): string {
    const date = new Date(dateString);
  
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",  
      year: "numeric", 
      month: "long",    
      day: "numeric",   
      timeZone: "Asia/Jakarta",  
    };
  
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,  
      timeZone: "Asia/Jakarta", 
    };
  
    const formattedDate = date.toLocaleDateString("id-ID", dateOptions);
    const formattedTime = date.toLocaleTimeString("id-ID", timeOptions);
  
    return `${formattedDate} ${formattedTime}`;
}

