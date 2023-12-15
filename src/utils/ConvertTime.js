export function getDaysSinceUpload(dateString) {
  const uploadedAt = new Date(dateString);
  console.log("dateString :"+ dateString)
  const now = new Date();

  // Calculate the difference in milliseconds
  const differenceInSeconds = Math.floor((now - uploadedAt) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (differenceInSeconds < 2592000) {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (differenceInSeconds < 31536000) {
    const months = Math.floor(differenceInSeconds / 2592000);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(differenceInSeconds / 31536000);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}
