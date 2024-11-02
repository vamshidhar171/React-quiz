const QUESTIONS = {
  React: [
    {
      id: "q1",
      text: "What is React.js primarily used for?",
      answers: [
        "Building user interfaces for web applications",
        "Building server-side applications",
        "Writing backend logic",
        "Managing databases",
      ],
    },
    {
      id: "q2",
      text: "What does JSX stand for in React?",
      answers: [
        "JavaScript XML",
        "JavaScript XSL",
        "Java XML Syntax",
        "Java Syntax Extension",
      ],
    },
    {
      id: "q3",
      text: "Which method is used to update the state in a React component?",
      answers: [
        "setState()",
        "updateState()",
        "changeState()",
        "modifyState()",
      ],
    },
    {
      id: "q4",
      text: "What is the purpose of React Hooks?",
      answers: [
        "To use state and other React features in functional components",
        "To manage component lifecycle in class components",
        "To manage global state across the application",
        "To manage routing within a React application",
      ],
    },
    {
      id: "q5",
      text: "Which of the following is NOT a valid React Hook?",
      answers: ["useComponentDidMount", "useState", "useEffect", "useContext"],
    },
    {
      id: "q6",
      text: 'What is a "key" prop in React used for?',
      answers: [
        "To uniquely identify a component in the DOM",
        "To manage the state of a component",
        "To define styles for a component",
        "To pass data to child components",
      ],
    },
    {
      id: "q7",
      text: "In React, what is the purpose of the render() method?",
      answers: [
        "To display the components UI",
        "To manage component lifecycle",
        "To handle state changes",
        "To handle events",
      ],
    },
    {
      id: "q8",
      text: "What is the default export from a file in React?",
      answers: [
        "Any component or value specified in the file",
        "A class component",
        "A function component",
        "An object with properties",
      ],
    },
    {
      id: "q9",
      text: "How do you conditionally render elements in React?",
      answers: [
        "Using the ternary operator or logical AND operator",
        "Using the if statement",
        "Using the switch statement",
        "Using the for loop",
      ],
    },
    {
      id: "q10",
      text: "Which of the following is NOT a lifecycle method in a React class component?",
      answers: [
        "renderComponent",
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
      ],
    },
  ],
  Javascript: [
    {
      id: "q1",
      text: "Which of the following is a correct way to declare a variable in JavaScript?",
      answers: [
        "var myVariable;",
        "variable myVariable;",
        "constant myVariable;",
        "none of the above;",
      ],
    },
    {
      id: "q2",
      text: "What is the output of the following code? console.log(typeof NaN);",
      answers: ["number", "NaN", "undefined", "object"],
    },
    {
      id: "q3",
      text: "How do you create a new object in JavaScript?",
      answers: [
        "var obj = new Object();",
        "var obj = Object.create();",
        "var obj = Object.new();",
        "none of the above",
      ],
    },
    {
      id: "q4",
      text: "What will the following code output? console.log(0.1 + 0.2 === 0.3);",
      answers: ["false", "true", "undefined", "NaN"],
    },
    {
      id: "q5",
      text: "What does the this keyword refer to in JavaScript?",
      answers: [
        "The object that is executing the current piece of code",
        "The current function",
        "The global object",
        "The object that contains the function definition",
      ],
    },
    {
      id: "q6",
      text: "Which of the following methods can be used to convert a string to an integer in JavaScript?",
      answers: [
        "parseInt()",
        "parseFloat()",
        "parseString()",
        "none of the above",
      ],
    },
    {
      id: "q7",
      text: "What will the following code output? console.log([1] == [1]);",
      answers: ["false", "true", "undefined", "NaN"],
    },
    {
      id: "q8",
      text: "Which method is used to add an item to the end of an array in JavaScript?",
      answers: ["push()", "pop()", "shift()", "unshift()"],
    },
    {
      id: "q9",
      text: "What will the following code output? console.log([] + []);",
      answers: ['"" (empty string)', "[]", "null", "undefined"],
    },
    {
      id: "q10",
      text: "Which of the following statements is true about JavaScript functions?",
      answers: [
        "Functions are objects in JavaScript.",
        "Functions cannot be passed as arguments to other functions.",
        "Functions cannot be returned from other functions.",
        "Functions must always return a value.",
      ],
    },
  ],
};
export default QUESTIONS;
