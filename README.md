# 🎨 Sculpture Script — JavaScript Object Manipulation

## Overview
This Node.js project loops through a list of sculpture objects and creates a new object containing the length of each property value.  
The goal is to practice working with JavaScript objects, arrays, and loops.

## Files
- data.js : Contains the original sculpture data  
- sculptureScript.js : Generates the sculptureListLengths object  
- readme.md : Contains output and explanation  

---

## sculptureListLengths Output

[
  {
    name: 26,
    artist: 20,
    description: 198,
    url: 31,
    alt: 90
  },
  {
    name: 16,
    artist: 17,
    description: 77,
    url: 31,
    alt: 83
  }
]

---

## How to Run
1. Make sure Node.js is installed on your computer.  
2. Open the terminal and navigate to the project folder.  
3. Run the command:

   node sculptureScript.js

4. The output (shown above) will appear in the console.

---

## Summary
The script goes through each sculpture object, calculates the number of characters in each property value using the .length property, and stores the result in a new array of
