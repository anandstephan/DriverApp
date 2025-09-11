export function addYearsAndFormat(dateString, yearsToAdd) {
  const date = new Date(dateString);
  console.log("date",date)
  date.setFullYear(date.getFullYear() + yearsToAdd);

  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based month fix
  const year = date.getFullYear();

  return `${month}/${year}`;
}


export function getTimeLeftFromNow(totalYears) {
  const today = new Date();

  // Abhi ki date mein totalYears add karo
  const futureDate = new Date(today);
  futureDate.setFullYear(futureDate.getFullYear() + totalYears);

  // Years left calculate
  let yearsLeft = futureDate.getFullYear() - today.getFullYear();

  if (
    futureDate.getMonth() < today.getMonth() ||
    (futureDate.getMonth() === today.getMonth() &&
      futureDate.getDate() < today.getDate())
  ) {
    yearsLeft--;
  }

  // Days left calculate
  const diffTime = futureDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    yearsLeft,
    daysLeft,
    futureDate: futureDate.toISOString().split("T")[0] // optional
  };
}



