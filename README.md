# Mini Search Engine

A simple, educational search engine built from scratch with **Node.js Core** modules.  
This project is designed as a beginner challenge to help you understand how search engines work under the hood, while practicing file system operations, indexing, and basic ranking algorithms.

---

## 📖 Overview

**Mini Search Engine** reads a collection of `.txt` files, extracts words, builds an in‑memory index, and allows the user to search for a keyword.  
Results are ranked by the number of occurrences of the keyword in each file.  
The entire engine runs in the terminal (CLI) and uses **only** Node.js built‑in modules — no external libraries, no databases, no frameworks.

---

## ✨ Features

- 📂 **File Reader** – Reads all `.txt` files from a `data/` folder (without knowing their names in advance).
- 🔍 **Indexing Engine** – Builds a `Map` that stores every word and its frequency per file.
- ⚡ **Search Algorithm** – Finds a user‑supplied keyword inside the index.
- 🏆 **Ranking System** – Sorts results by the number of matches (descending).
- 💻 **CLI Interface** – Allows repeated searches without restarting the program.
- 🧠 **Pure Node.js Core** – Uses only `fs`, `path`, `readline`, `Map`, and `process`.

---

## 🗂 Project Structure
