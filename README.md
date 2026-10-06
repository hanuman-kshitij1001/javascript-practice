# JavaScript Practice — 60 Days Challenge

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Days Completed](https://img.shields.io/badge/Challenge-60%2F60%20Days-007acc?style=for-the-badge)](#-day-by-day-practice-roadmap)
[![Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-brightgreen?style=for-the-badge)](#-skills--topics-covered)

A comprehensive, day-by-day repository tracking my journey through JavaScript fundamentals, data structures, object-oriented concepts, DOM manipulation, asynchronous programming, algorithms, and full-stack mini projects over **60 days**.

Each day is organized in its own isolated folder with clean, modular, and runnable code.

---

## 📂 Project Structure

The repository is organized into 60 dedicated day folders (`day_01` to `day_60`) and a documentation directory (`day_notes/`):

```text
java_script_Practice/
├── day_01/ ... day_60/       # 60 zero-padded day folders
│   ├── index.js              # Standard entry file for single-script practice days
│   ├── index.html            # Web markup (for days with browser/DOM practice)
│   ├── script.js             # Client-side JavaScript (for multi-file days)
│   ├── style.css             # Component styling (for UI projects)
│   └── server.js             # Backend Express server (for full-stack projects)
└── day_notes/                # Comprehensive reference guides & cheat-sheets
    └── JS_Notes_Downloaded_from_LinkedIn.pdf
```

### 📁 Folder Conventions:
- **Single-File Days (Console/Node.js)**: Each contains an `index.js` file designed to be run directly via Node.js or browser console.
- **Multi-File Days (Web/DOM/UI Projects)**: Days with HTML interfaces (`day_04`, `day_26`, `day_29`, `day_37`, `day_58`, `day_60`) contain clean separated files:
  - `index.html` — Page markup
  - `script.js` — Client-side interaction logic
  - `style.css` — Stylesheet
  - `server.js` — Backend server (Day 37)

---

## 📅 Day-by-Day Practice Roadmap

| Day | Folder | Project Type | Topic & Concepts Practiced |
| :---: | :--- | :--- | :--- |
| **01** | [`day_01/`](./day_01/) | Single JS | Variables (`let`, `const`), arithmetic operators & addition basics |
| **02** | [`day_02/`](./day_02/) | Single JS | Strings in JavaScript, string indexing, length property, character access |
| **03** | [`day_03/`](./day_03/) | Single JS | Console logging, template literals, basic data types & script placement |
| **04** | [`day_04/`](./day_04/) | HTML + JS | Browser interaction modals: `alert()`, `prompt()`, and `confirm()` |
| **05** | [`day_05/`](./day_05/) | Single JS | String declarations (single, double, backtick quotes) & text basics |
| **06** | [`day_06/`](./day_06/) | Single JS | String `.trim()` method, string immutability, whitespace removal |
| **07** | [`day_07/`](./day_07/) | Single JS | Method arguments, `indexOf()` in strings, finding substring locations |
| **08** | [`day_08/`](./day_08/) | Single JS | Method chaining (`msg.trim().toUpperCase()`) and evaluation order |
| **09** | [`day_09/`](./day_09/) | Single JS | String `slice()` method, extracting sub-strings, negative indexing |
| **10** | [`day_10/`](./day_10/) | Single JS | String `substring()` vs `slice()`, extracting character ranges |
| **11** | [`day_11/`](./day_11/) | Single JS | String `repeat()`, string manipulation methods & array splice intro |
| **12** | [`day_12/`](./day_12/) | Single JS | Arrays introduction, array creation, element access & indexing |
| **13** | [`day_13/`](./day_13/) | Single JS | Array memory visualization, index-based mutation, zero-based indexing |
| **14** | [`day_14/`](./day_14/) | Single JS | Fundamental Array Methods: `push()`, `pop()`, `shift()`, `unshift()` |
| **15** | [`day_15/`](./day_15/) | Single JS | Searching arrays: `indexOf()` and element lookup logic |
| **16** | [`day_16/`](./day_16/) | Single JS | Array merging with `concat()`, non-mutating array operations |
| **17** | [`day_17/`](./day_17/) | Single JS | Array `slice()`, copying subarrays without modifying original array |
| **18** | [`day_18/`](./day_18/) | Single JS | Array `splice()` method: adding, removing, and replacing elements in-place |
| **19** | [`day_19/`](./day_19/) | Single JS | Array `sort()` method: lexicographical ordering & sorting behavior |
| **20** | [`day_20/`](./day_20/) | Single JS | Array References: memory reference vs value, modifying reference arrays |
| **21** | [`day_21/`](./day_21/) | Single JS | Multidimensional (Nested) Arrays, 2D matrices, nested loops iteration |
| **22** | [`day_22/`](./day_22/) | Single JS | Loops: Standard `for` loop syntax, iterating over array elements |
| **23** | [`day_23/`](./day_23/) | Single JS | Loops: `while` loop syntax, condition-based iteration, counters |
| **24** | [`day_24/`](./day_24/) | Single JS | Loops: `do...while` loop syntax, guaranteed initial execution |
| **25** | [`day_25/`](./day_25/) | Single JS | Problem Solving: odd/even numbers filtering, multiplication tables |
| **26** | [`day_26/`](./day_26/) | 🎮 **Web App** | **Project: Tic-Tac-Toe Game** (3x3 grid, turn switching, win/tie logic) |
| **27** | [`day_27/`](./day_27/) | Single JS | OOP Fundamentals: Object-Oriented Programming principles in JavaScript |
| **28** | [`day_28/`](./day_28/) | Single JS | Object Literals: creating key-value entities, accessing & updating properties |
| **29** | [`day_29/`](./day_29/) | HTML + JS | Objects & DOM: Rendering dynamic object data into HTML lists & elements |
| **30** | [`day_30/`](./day_30/) | Single JS | Real-world entity modeling: Instagram post object structure & methods |
| **31** | [`day_31/`](./day_31/) | Single JS | Array of Objects: managing complex records, student directory simulation |
| **32** | [`day_32/`](./day_32/) | Single JS | The `Math` Object: `Math.PI`, `Math.abs()`, `Math.floor()`, `Math.ceil()` |
| **33** | [`day_33/`](./day_33/) | Single JS | Generating random integers with `Math.random()`, scaling formulas |
| **34** | [`day_34/`](./day_34/) | Single JS | Numeric OTP Generation: creating secure 6-digit random verification codes |
| **35** | [`day_35/`](./day_35/) | Single JS | OTP Lifecycle: expiration timestamps (`Date.now()`), cooldown timer logic |
| **36** | [`day_36/`](./day_36/) | Single JS | Complete Console OTP System: expiry, resend cooldown, attempt limits |
| **37** | [`day_37/`](./day_37/) | 🚀 **Full-Stack** | **Project: OTP Verification Web App** (Express backend, 6-digit modern UI) |
| **38** | [`day_38/`](./day_38/) | Single JS | Functions Fundamentals: function declaration, invocation, code reuse |
| **39** | [`day_39/`](./day_39/) | Single JS | Function Parameters & Arguments: passing inputs and dynamic execution |
| **40** | [`day_40/`](./day_40/) | Single JS | The `return` keyword: returning data from functions, capturing outputs |
| **41** | [`day_41/`](./day_41/) | Single JS | **Mini-Project: Random Password Generator** (configurable character sets) |
| **42** | [`day_42/`](./day_42/) | Single JS | Function Expressions: anonymous functions, storing functions in variables |
| **43** | [`day_43/`](./day_43/) | Single JS | Higher-Order Functions (HOF): callbacks, functions as first-class citizens |
| **44** | [`day_44/`](./day_44/) | Single JS | Object Methods: attaching functions to objects, method shorthand syntax |
| **45** | [`day_45/`](./day_45/) | Single JS | The `this` Keyword: context of execution, object method binding |
| **46** | [`day_46/`](./day_46/) | Single JS | Error Handling: `try...catch` blocks, preventing runtime crashes |
| **47** | [`day_47/`](./day_47/) | Single JS | Advanced Errors: `try...catch...finally`, throwing custom error objects |
| **48** | [`day_48/`](./day_48/) | Single JS | Real-World Resilience: safe `JSON.parse` wrapper with error fallbacks |
| **49** | [`day_49/`](./day_49/) | Single JS | ES6 Arrow Functions: syntax differences, implicit returns, single params |
| **50** | [`day_50/`](./day_50/) | Single JS | Arrow Functions: concise implicit return bodies for mathematical functions |
| **51** | [`day_51/`](./day_51/) | Single JS | Asynchronous JavaScript: `setTimeout()` timer, event loop scheduling |
| **52** | [`day_52/`](./day_52/) | Single JS | Repeating Timers: `setInterval()` and `clearInterval()` operations |
| **53** | [`day_53/`](./day_53/) | Single JS | Deep Dive: `this` scoping in normal functions vs arrow functions vs timers |
| **54** | [`day_54/`](./day_54/) | Single JS | Arrow Function Practice: mathematical functions & lexical context rules |
| **55** | [`day_55/`](./day_55/) | Single JS | DSA & Algorithms: Palindromes, vowel counters, array sum, max, deduplication |
| **56** | [`day_56/`](./day_56/) | Single JS | Checkpoint: Console milestone greeting |
| **57** | [`day_57/`](./day_57/) | Single JS | Core JavaScript Comprehensive Revision: alerts, strings, arrays, functions |
| **58** | [`day_58/`](./day_58/) | HTML + JS | ES6 Modules in Browser: `<script type="module">` import execution |
| **59** | [`day_59/`](./day_59/) | Single JS | DOM Event Performance: reducing redundant listeners on repeated elements |
| **60** | [`day_60/`](./day_60/) | HTML + JS | DOM Event Delegation: single parent listener on `#wrapper` via `event.target` |

---

## 🛠️ Skills & Topics Covered

### 🔹 Core Fundamentals
- Variables (`var`, `let`, `const`) & Data Types (Number, String, Boolean, Object, Undefined)
- Operators: Arithmetic, Comparison, Logical, Assignment
- String Methods: `.trim()`, `.slice()`, `.substring()`, `.repeat()`, `.indexOf()`, Method Chaining
- Template Literals (ES6 Backticks & String Interpolation)

### 🔹 Data Structures
- **Arrays**: 1D & 2D Arrays, `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.slice()`, `.splice()`, `.concat()`, `.sort()`
- **Array References**: Memory pointers, mutable references
- **Objects**: Object Literals, Array of Objects, Dynamic Property Access, Methods in Objects

### 🔹 Control Flow & Logic
- Conditional Statements (`if-else`)
- Loops: `for`, `while`, `do...while`, Nested Loops for 2D Matrices
- Algorithmic Problem Solving: Palindromes, Vowel Counters, Array Max, De-duplication

### 🔹 Functions & Functional Programming
- Function Declarations vs Function Expressions
- Arguments, Parameters, Default Values & `return` Statements
- ES6 Arrow Functions & Implicit Return
- Higher-Order Functions (HOF) & Callback Functions
- The `this` Keyword & Lexical Scoping across scopes

### 🔹 Error Handling & Resilience
- `try...catch` Error Handling
- `finally` cleanup block
- Throwing custom exceptions with `throw new Error()`
- Safe JSON parsing (`parseJSON`)

### 🔹 Asynchronous JavaScript
- `setTimeout()` (Delayed execution)
- `setInterval()` & `clearInterval()` (Periodic timers)
- Event Loop basics

### 🔹 Browser DOM & Event Optimization
- Modal Dialogs: `alert()`, `prompt()`, `confirm()`
- DOM element selection: `document.getElementById`, `document.querySelector`
- Event Listeners (`addEventListener`)
- **Event Delegation**: Centralized parent listeners with `event.target` check

### 🔹 Featured Mini Projects
- 🎮 **Tic-Tac-Toe Game ([`day_26/`](./day_26/))**: Full 2-player browser game with turn switching, dynamic UI updates, and victory checks.
- 🔑 **Random Password Generator ([`day_41/`](./day_41/))**: Custom password maker allowing custom length and character rules.
- ⏱️ **OTP Security System ([`day_34/`](./day_34/) - [`day_36/`](./day_36/))**: Math-based OTP generation with 30s expiration and attempt limit counters.
- 🚀 **Full-Stack OTP Verification Web App ([`day_37/`](./day_37/))**: Complete frontend UI with single-character input boxes, countdown resend timer, and Node.js/Express backend server.

---

## 🚀 How to Run the Projects

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v16 or above recommended).

### 1. Running Single JavaScript Days (Console)
Open your terminal in the repository root and run any day's `index.js` using Node:
```bash
# Example: Run Day 01
node day_01/index.js

# Example: Run Day 49 (Arrow Functions)
node day_49/index.js

# Example: Run Day 55 (Algorithms)
node day_55/index.js
```

### 2. Running Web / HTML Projects
For days with browser interfaces (`day_04`, `day_26`, `day_29`, `day_58`, `day_60`):
- Double click `index.html` in file explorer to open in your browser, **OR**
- Use the **VS Code Live Server** extension on `index.html`.

### 3. Running Day 37 (OTP Verification Full-Stack Project)
Day 37 includes an Express.js backend server:
```bash
# Step 1: Navigate into day_37 folder
cd day_37

# Step 2: Install dependencies (Express & CORS)
npm install express cors

# Step 3: Start the server
node server.js

# Step 4: Open day_37/index.html in your browser!
```

---

## 📚 Study Notes & Reference Material

In the [`day_notes/`](./day_notes/) directory, you will find:
- **`JS_Notes_Downloaded_from_LinkedIn.pdf`**: A curated comprehensive PDF guide covering core JavaScript concepts, syntax rules, and reference examples.

---

## 👤 Author

**Kshitij Tiwari**
- GitHub: [@hanuman-kshitijTiwari](https://github.com/hanuman-kshitijTiwari) / [@hanuman-kshitij1001](https://github.com/hanuman-kshitij1001)
- Repository: [javascript-practice](https://github.com/hanuman-kshitij1001/javascript-practice)

⭐ *If you find this repository helpful for learning JavaScript, feel free to star it!*
