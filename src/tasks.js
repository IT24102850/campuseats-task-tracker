// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// ---------------------------------------------------------------------------
// Order total calculation
// Refactored in Task 06: clear names, no magic numbers, no hard-coded secrets,
// strict equality and input validation.
// ---------------------------------------------------------------------------
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key is read from an environment variable at run time,
// e.g. process.env.API_KEY - it is never hard-coded or committed.
const apiKey = process.env.API_KEY;

console.log(`Standard total: ${calculateTotal(250, 2, "standard")}`);
console.log(`VIP total:      ${calculateTotal(250, 2, "vip")}`);
console.log(`API key loaded from environment: ${apiKey ? "yes" : "no"}`);

module.exports = { calculateTotal, VIP_DISCOUNT };
