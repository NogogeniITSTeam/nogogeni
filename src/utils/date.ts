// format date into "1 January 2025" format
function formatDate(date: Date) {
  const formatted = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formatted;
}

function isDateValid(dateStr: string) {
  return !isNaN(Number(new Date(dateStr)));
}

export { formatDate, isDateValid };
