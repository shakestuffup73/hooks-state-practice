useState Hook
- this will tell React to re-render when there are changes to state
- Hooks give a component its own memory, provide us with a method to change that memory...every time that memory/state changes, it says hey go re-render this, this is new

const [index, setIndex] = useState(0)
useState
- returns an array with exactly two items
  - index is the state variable of this component
  - setIndex is the setter function
- whatever we pass to useState is the initial value of that state
- "I'm setting this initial index value to 0 and I have a method (setIndex) to change that whenever I want"

const index is stored in the state of this component...now with storing index there, we need a method to change it...

const [index, setIndex] = useState(0)
- we're going to have a variable in state called index
- we're going to have a function available to us anywhere in this component to change index to whatever we want --> setIndex[waffles] will then change index to waffles
- useState says hey, use an initial state of (0)

- pass states as components to props and drill those down to other components

DONT EXPECT PAGE TO RE-RENDER COMPONENTS IF YOU DON'T HAVE SET STATE
- puppies are held in state
- those puppies get passed to a puppyList as puppies...in my puppList I have a puppyCard where I'm mapping the puppies...the state is passed down to the puppyCard component through props - this is drilling props
- to add a puppy, would use setPuppies method...because I'm changing that state, all of the puppies on the page will be there in addition to the puppy I just added

storing state in a component
passing it down to other components via props to do something with it or display it

React is designed to be a tool where we create dynamic user interfaces

Hooks
- only available while React is rendering...let you hook into different React features
- can't call Hooks inside conditions/loops or other nested functions
  
When you call useState, you're telling React that you want this component to remember something
--> const [index, setIndex] = useState(0)

- You can have as many state variables of as many types as you'd like 

** useState is just for setting the initial value of State **


WHEN STATE CHANGES A RENDER IS TRIGGERED
WHEN STATE CHANGES THE COMPONENT IS RE-RENDERED