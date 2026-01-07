/**
 * Returns all consecutive substrings of a given string.
 *
 * @param {string} str - Input string
 * @returns {string[]} - Array of consecutive substrings
 */
function consecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }

  return result;
}

// Test cases
console.log(consecutiveSubstrings("abc"));
// ["a", "ab", "abc", "b", "bc", "c"]

console.log(consecutiveSubstrings("a"));
// ["a"]

console.log(consecutiveSubstrings(""));
// []
