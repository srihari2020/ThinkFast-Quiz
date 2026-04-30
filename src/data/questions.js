export const quizCategories = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Structure of the Web',
    color: '#E34F26'
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Styling the Web',
    color: '#1572B6'
  },
  {
    id: 'js',
    title: 'JavaScript',
    description: 'Interactive Web',
    color: '#F7DF1E'
  },
  {
    id: 'react',
    title: 'React',
    description: 'UI Library',
    color: '#61DAFB'
  },
  {
    id: 'python',
    title: 'Python',
    description: 'General Purpose',
    color: '#3776AB'
  },
  {
    id: 'java',
    title: 'Java',
    description: 'Object-Oriented',
    color: '#f89820'
  },
  {
    id: 'cpp',
    title: 'C++',
    description: 'Systems Programming',
    color: '#00599C'
  },
  {
    id: 'go',
    title: 'Go',
    description: 'Concurrent & Fast',
    color: '#00ADD8'
  },
  {
    id: 'ruby',
    title: 'Ruby',
    description: 'Web & Scripting',
    color: '#CC342D'
  }
];

export const questions = {
  react: [
    {
      id: 1,
      question: "What is the main purpose of React?",
      options: [
        "Building database schemas",
        "Building user interfaces",
        "Handling server-side logic",
        "Designing images"
      ],
      correctAnswer: "Building user interfaces"
    },
    {
      id: 2,
      question: "Which hook is used to manage state in a functional component?",
      options: ["useEffect", "useContext", "useReducer", "useState"],
      correctAnswer: "useState"
    },
    {
      id: 3,
      question: "How do you pass data from a parent component to a child component?",
      options: ["Using state", "Using props", "Using context", "Using local storage"],
      correctAnswer: "Using props"
    },
    {
      id: 4,
      question: "What does useEffect do?",
      options: [
        "Handles side effects in functional components",
        "Manages global state",
        "Replaces the HTML DOM directly",
        "Creates new components"
      ],
      correctAnswer: "Handles side effects in functional components"
    },
    {
      id: 5,
      question: "What is JSX?",
      options: [
        "A new JavaScript engine",
        "A syntax extension for JavaScript",
        "A CSS framework",
        "A database query language"
      ],
      correctAnswer: "A syntax extension for JavaScript"
    }
  ],
  html: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Tool Multi Language", "Hyperlink Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      id: 2,
      question: "Choose the correct HTML element for the largest heading:",
      options: ["<h6>", "<head>", "<heading>", "<h1>"],
      correctAnswer: "<h1>"
    },
    {
      id: 3,
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<newline>"],
      correctAnswer: "<br>"
    },
    {
      id: 4,
      question: "How can you make a numbered list?",
      options: ["<ol>", "<ul>", "<dl>", "<list>"],
      correctAnswer: "<ol>"
    },
    {
      id: 5,
      question: "What is the correct HTML for adding a background color?",
      options: ["<body style=\"background-color:yellow;\">", "<background>yellow</background>", "<body bg=\"yellow\">", "<body color=\"yellow\">"],
      correctAnswer: "<body style=\"background-color:yellow;\">"
    }
  ],
  css: [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      id: 2,
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: ["In the <head> section", "In the <body> section", "At the end of the document", "Before the <html> tag"],
      correctAnswer: "In the <head> section"
    },
    {
      id: 3,
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<style>", "<script>", "<link>"],
      correctAnswer: "<style>"
    },
    {
      id: 4,
      question: "Which CSS property is used to change the background color?",
      options: ["color", "bgcolor", "background-color", "bg-color"],
      correctAnswer: "background-color"
    },
    {
      id: 5,
      question: "Which CSS property controls the text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      correctAnswer: "font-size"
    }
  ],
  js: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["<js>", "<script>", "<javascript>", "<scripting>"],
      correctAnswer: "<script>"
    },
    {
      id: 2,
      question: "Where is the correct place to insert a JavaScript?",
      options: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "After the <html> tag"],
      correctAnswer: "Both the <head> section and the <body> section are correct"
    },
    {
      id: 3,
      question: "How do you write 'Hello World' in an alert box?",
      options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
      correctAnswer: "alert('Hello World');"
    },
    {
      id: 4,
      question: "How do you create a function in JavaScript?",
      options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "create myFunction()"],
      correctAnswer: "function myFunction()"
    },
    {
      id: 5,
      question: "How does a FOR loop start?",
      options: ["for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)"],
      correctAnswer: "for (i = 0; i <= 5; i++)"
    }
  ],
  python: [
    {
      id: 1,
      question: "What is a correct syntax to output 'Hello World' in Python?",
      options: ["p('Hello World')", "print('Hello World')", "echo('Hello World')", "System.out.println('Hello World')"],
      correctAnswer: "print('Hello World')"
    },
    {
      id: 2,
      question: "How do you insert COMMENTS in Python code?",
      options: ["//This is a comment", "/*This is a comment*/", "#This is a comment", "<!--This is a comment-->"],
      correctAnswer: "#This is a comment"
    },
    {
      id: 3,
      question: "Which one is NOT a legal variable name?",
      options: ["my_var", "myvar", "_myvar", "my-var"],
      correctAnswer: "my-var"
    },
    {
      id: 4,
      question: "How do you create a variable with the numeric value 5?",
      options: ["x = 5", "x == 5", "int x = 5", "x := 5"],
      correctAnswer: "x = 5"
    },
    {
      id: 5,
      question: "What is the correct file extension for Python files?",
      options: [".pyt", ".py", ".pyth", ".pt"],
      correctAnswer: ".py"
    }
  ],
  java: [
    {
      id: 1,
      question: "Which of these is not a feature of Java?",
      options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
      correctAnswer: "Use of pointers"
    },
    {
      id: 2,
      question: "Which method is the entry point for any Java program?",
      options: ["public void main()", "public static void main(String[] args)", "static void main(String args[])", "public void main(String args)"],
      correctAnswer: "public static void main(String[] args)"
    },
    {
      id: 3,
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implements", "inherits", "extends", "super"],
      correctAnswer: "extends"
    },
    {
      id: 4,
      question: "What is the size of an int variable in Java?",
      options: ["8 bit", "16 bit", "32 bit", "64 bit"],
      correctAnswer: "32 bit"
    },
    {
      id: 5,
      question: "Which of the following is a reserved keyword in Java?",
      options: ["object", "strictfp", "main", "system"],
      correctAnswer: "strictfp"
    }
  ],
  cpp: [
    {
      id: 1,
      question: "Who invented C++?",
      options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
      correctAnswer: "Bjarne Stroustrup"
    },
    {
      id: 2,
      question: "Which operator is used to resolve the scope in C++?",
      options: ["::", "->", ".", "&"],
      correctAnswer: "::"
    },
    {
      id: 3,
      question: "Which keyword is used to dynamically allocate memory in C++?",
      options: ["malloc", "alloc", "new", "create"],
      correctAnswer: "new"
    },
    {
      id: 4,
      question: "What is a virtual function in C++?",
      options: ["A function with no body", "A member function that is declared within a base class and re-defined by a derived class", "A function that cannot be inherited", "A function used for friend classes"],
      correctAnswer: "A member function that is declared within a base class and re-defined by a derived class"
    },
    {
      id: 5,
      question: "Which symbol is used for a destructor?",
      options: ["#", "$", "~", "!"],
      correctAnswer: "~"
    }
  ],
  go: [
    {
      id: 1,
      question: "Which company developed the Go programming language?",
      options: ["Apple", "Microsoft", "Google", "Facebook"],
      correctAnswer: "Google"
    },
    {
      id: 2,
      question: "How do you start a goroutine in Go?",
      options: ["thread", "go", "async", "start"],
      correctAnswer: "go"
    },
    {
      id: 3,
      question: "What is used to pass data between goroutines?",
      options: ["Channels", "Pipes", "Sockets", "Shared memory"],
      correctAnswer: "Channels"
    },
    {
      id: 4,
      question: "Does Go have classes?",
      options: ["Yes, exactly like Java", "No, it uses structs and methods", "Yes, but they are called modules", "No, it is purely functional"],
      correctAnswer: "No, it uses structs and methods"
    },
    {
      id: 5,
      question: "Which keyword is used to declare a variable in Go without specifying its type explicitly?",
      options: ["var", "let", "const", ":="],
      correctAnswer: ":="
    }
  ],
  ruby: [
    {
      id: 1,
      question: "Who created Ruby?",
      options: ["Guido van Rossum", "Yukihiro Matsumoto", "James Gosling", "Larry Wall"],
      correctAnswer: "Yukihiro Matsumoto"
    },
    {
      id: 2,
      question: "What is the primary web framework used with Ruby?",
      options: ["Django", "Laravel", "Ruby on Rails", "Spring"],
      correctAnswer: "Ruby on Rails"
    },
    {
      id: 3,
      question: "How do you output text to the console in Ruby?",
      options: ["print", "echo", "System.out", "puts"],
      correctAnswer: "puts"
    },
    {
      id: 4,
      question: "Which symbol is used to define a global variable in Ruby?",
      options: ["@", "@@", "$", "%"],
      correctAnswer: "$"
    },
    {
      id: 5,
      question: "Are integers objects in Ruby?",
      options: ["Yes, everything is an object", "No, they are primitive types", "Only if explicitly boxed", "No, only strings are objects"],
      correctAnswer: "Yes, everything is an object"
    }
  ]
};
