# Price It!

Created by Kyra Evjen, Beth Nipper, and Kyle McDowell

## Overview

This project is a gamified shopping experience created in Visual Studio using HTML, CSS, Javascript and Bootstrap.
The digital age has blended online shopping and gaming, introducing seamless advertising and product placements. Gamification motivates task completion, though it has limits. Our project combines gameplay and functionality with a guessing game where users earn points for pricing items and can save items to a shopping list.

## About the Project
### Research and Target Audience
- Conducted research to identify target users to develop a relevant application
- Interviewed indiviuals within target age range to gather insights

### Determining User and Data Specifications
- Identified casual gamers as primary user base
- Established the need for a fun and engaging game experience
- Selected a dataset from Amazon featuring tangible products

### User Data Collection
- Interviewed users familiar with online shopping and casual gaming
- Explored user engagement and utility
- Assesed user gaming preferences and shopping habits

### User Data Analysis
- Identified key elements for improving user satisfaction
- Item categorization for easier naviagation
- Emphasized importance of simplicity

## Target Users & User Profiles
### Target Users
- Those who play video games, split into two subcategories: College (18-26) and Post-College (30-60)
### User Profiles
#### Jane Evans
- Age: 58, Casual mobile gamer, Supply Management Planner at John Deere. Enjoys horseback riding, reading, and mobile games. Motivated by gaining points in games.
#### Steven Shomaker
- Age: 32, Casual gamer, Freelance consultant. Interests in data science, microeconomics, and financially-driven games. Finds financial data interesting and prefers games that don’t require immense dedication.
#### Jackie Schaefer
- Age: 25, Casual console gamer, Cashier at Ross. Enjoys drawing, fashion, and quality time with friends. Plays casual or party games with friends and RPGs alone for relaxation.
#### Alex Padilla
- Age: 19, Casual console gamer, CNA at GrapeTree. Studies Biochemistry, enjoys swimming, and building worlds in games. Prefers single-player sandbox games and frequently shops online for deals.

## Low-Fidelity Prototyping
Primary Goal: Create a simple yet effective interface
- Include images here w/ credits
### Sketch Development
- Individual Sketches created by team members
- Compared and refined sketchces to align visions
### Prototyping
- Initial Paper prototypes refined on digitally
- Consensus on main page layout: central item image, title, and text box
### Disputed Elements
- Drop-down menu vs. list of buttons
- Inclusion of 'saved item' and 'how to play' tabs
- Disuccsion of a 'categories' page for personalized gameplay

## Cognitive Walkthrough Summary
Each group member conducted their own cognitive walkthrough with a user to gather feedback and revise our prototype.
### User Tasks for the Low-fidelity Prototype
- Selecting a category
- Guessing the price of an item
- Saving an item to a list
- Viewing a saved items
### Summary of Findings
- Users generally preferred a drop-down menu for category selection
- Immediate and easy-to-understand interaction with category and gameplay elements
- Users wanted more chances or a 3-strike rule for guessing item prices
- The need for clear feedback, such as animations or alerts for correct/incorrect guesses
- Suggested the inclusion of product descriptions for better guess accuracy
- Heart button for saving items was intuitive but needed an animation for confirmation
- Interest in the saved items feature varied, with some users suggesting improvements like item removal
### Improvements Implemented Based On Feedback
- Improved how-to-play screen with a bigger, more accessible close button
- Added a button to remove items from the list
- Users now have three attempts to guess the price correctly
- Enhanced Visual feedback for correct guesses
- Provide hints to users while guessing

## Usability Test
- Participants selected based on experience with technology, video games, and browser games
- Pre-screening required average tech experience, some gaming experience, and browser game knowledge
### Materials Used
- Google Forms for screening and post-test demographic data collection
- NASA-TLX assessed users' mental state and experience while using the application
- System Usability Scale (SUS) evaluated the functionality and potential usage frequency
- Team developed script tracked various user interactions during tests, despite some deviations due to gameplay structure
### Test Conduction
- Participants encouraged to think aloud during testing
- Tasks: read instructions, select category, guess prices, save items, and view items saved list
- Given hitns for incorrect guesses; three wrong guesses lead to game over
#### Results
- Usability Issues: Score clears when saving items; deletion issues in saved list; some users didn't use the 'save item to list' function
- Task Completion: Slightly off time estimates; usually all tasks completed with exception of saved items list
- Form Results: Low mental demand; application easy to use with some inconsistences
### Take-Aways
- Code revision to fix usability issues
- Imporance of intuitive point system, hints, and category selection

## Documentation
- https://tinyurl.com/PriceItDocs

# Code
## HTML
### homepage.html
- Homepage page with Bootstrap styling, jQuery interactions, category selector, "how to play" modal, and item saving/viewing functionality
### gamepage.html
- Gamepage with instructions modal, item saving to a wishlist, and displaying user guesses and scores
### gameover.html
- Game over page that displays the final score and offers a "Try Again" button to restart the game
## js files
### addWishlist.js
- Handle adding items to a wishlist, updating the UI to reflect changes, and saving the wishlist to localStorage
### deleteWishlist.js
- Remove an item from the wishlist, update localStorage, and refresh the page to reflect changes.
### getFile.js
- Load a CSV file, parse it with Papa Parse, populate a dropdown with categories, and randomly select a product from the chosen category, storing the selection in localStorage.
### guessPrice.js
- Displays an item, tracks user guesses, provides feedback, updates score, and handles game over scenarios
### newGame.js
- Clear the stored product data when the "new game" button is clicked
### util.js
- Remove the stored product data when the "new game" button is clicked
### wishClick.js
- Retrieve wishlist items from localStorage, display them with images, names, prices, and a button to remove each item
