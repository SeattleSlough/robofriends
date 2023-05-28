<!-- * React Overview -->

it does one thing really well: the view

Not limited:

- Apps
- Websites
- Mobile

# React: Thinking in Components
- Consists of Lego Blocks
- Everyone builds their own block
- Comes together

## Atomic Metaphor:
- Start at the most basic level: the individual *atom*
  - A back button
  - A like button
- These atoms can be combined to make an element (a *molecule*)
  - Navigation bar
  - Sign-in form
- *Organisms*
- *Templates:* combination of organisms
- *Pages*

## Core Principle: Data only flows from the top down
- Parent/Child metaphor
- Parents tell their children what to do, not the other way around

## Virtual DOM
- Prior to V-DOM, we told the DOM what to do (write directly to it)
- Now there is a React BOT that uses a JS Object (the V-DOM) and paints the picture in the most optimal way
- This is why React can work outside the browser

## Great ecosystem
- Largest JS ecosystem today

# Naivgating the code
React and ReactDOM are separate as React isn't just a browser module

root.render --> renders the imported *App component*
root is where all of the React code hangs off

We are going to focus on *index.js* and *App.js* as they will allow us to build components.