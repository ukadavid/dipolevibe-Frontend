/* eslint-disable no-unused-vars */
export default function greeting() {
    const now = new Date();
    const currentHour = now.getHours();
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
}