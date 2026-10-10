FAQ Accordion

A responsive FAQ section where clicking a question expands or collapses its answer. Built for the Web Development Track to practise DOM events, class manipulation and simple interactive UI components.

Author: Anna

Objective

Practise:

DOM events with addEventListener
Class manipulation with classList.toggle
Building simple, accessible interactive components
Tools
HTML5
CSS3
JavaScript (vanilla, no libraries)
Features
10 FAQ questions
Expandable and collapsible answers
Clear active state: orange accent bar, tinted question and a plus icon that turns into a cross
Only one answer open at a time (configurable)
"Expand all / Collapse all" button
Responsive layout for phones, tablets and desktops
Keyboard accessible, using real <button> elements with aria-expanded and aria-controls
Smooth CSS animation, switched off for users who prefer reduced motion
Project Structure
faq-accordion/
├── index.html   # Page structure and FAQ content
├── style.css    # Layout, active state, animation, responsive rules
├── script.js    # Click handling and class toggling
└── README.md
How to Run
Download or clone the project folder.
Open index.html in a browser, or right-click it in VS Code and choose Open with Live Server.

No installation or build step is needed.

How It Works

Each question is a <button>. When it is clicked, script.js:

Checks whether the item already has the active class.
Closes the other items, if only one answer may be open.
Uses classList.toggle("active", isOpen) to show or hide the item.
Updates aria-expanded so assistive technology knows the current state.

CSS does the rest. The active class changes the colours, rotates the icon and animates the answer panel open using grid-template-rows.

Configuration

To let several answers stay open at once, open script.js and change:

js
const ALLOW_MULTIPLE = false;

to

js
const ALLOW_MULTIPLE = true;
Customising the Content

Copy one <article class="accordion__item"> block in index.html, paste it inside the <section>, then edit the question and answer. Give the new item unique ids, for example q11 and a11, and update aria-controls, aria-labelledby and the matching id values.

Interview Notes

What does classList.toggle do? It adds a class if the element does not have it and removes it if it does. With a second argument it forces the result: true adds the class and false removes it.

Why should a button be used for an interactive FAQ question? Buttons can be focused with the Tab key and activated with Enter or Space without extra code. Screen readers also announce them as interactive controls.

What is event handling in JavaScript? It means running a function when something happens on the page, such as a click or key press. You attach the function to an element with addEventListener, and the browser calls it when the event occurs.

References
MDN: Element.classList
MDN: EventTarget.addEventListener# faq-accordion
