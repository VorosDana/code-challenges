17. Letter Combinations of a Phone Number
Medium

1998

276

Favorite

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

https://leetcode.com/problems/letter-combinations-of-a-phone-number/




Success
Details 
Runtime: 56 ms, faster than 99.95% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 33.8 MB, less than 37.23% of JavaScript online submissions for Letter Combinations of a Phone Number.

I think it's so fast because I split out the lookup table, so it only gets allocated once.