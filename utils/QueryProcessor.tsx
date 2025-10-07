export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "wenleh";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "wenleh"
    );
  }

  const addMatch = query.match(/(\d+)\s*(?:\+|plus)\s*(\d+)/i);
  if (addMatch) {
    const num1 = parseFloat(addMatch[1]);
    const num2 = parseFloat(addMatch[2]);
    return `${num1 + num2}`;
  }

  // Case 2: find the largest number (e.g. "Which of the following numbers is the largest: 25, 6, 63?")
  const numbersMatch = query.match(/[-]?\d+(\.\d+)?/g);
  if (query.toLowerCase().includes("largest") && numbersMatch) {
    const numbers = numbersMatch.map(Number);
    const largest = Math.max(...numbers);
    return `${largest}`;
  }

  return "";
}
