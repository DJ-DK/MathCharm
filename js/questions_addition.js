// creating an array and passing the number, questions, options, and answers
let q_1 = random_threedigits();
let q_1_1 = random_threedigits();
let q_2 = random_threedigits();
let q_2_1 = random_threedigits();
let q_3 = random_threedigits();
let q_3_1 = random_threedigits();
let q_4 = random_threedigits();
let q_4_1 = random_threedigits();
let q_5 = random_threedigits();
let q_5_1 = random_threedigits();
let q_6 = random_threedigits();
let q_6_1 = random_threedigits();
let q_7 = random_threedigits();
let q_7_1 = random_threedigits();
let q_8 = random_threedigits();
let q_8_1 = random_threedigits();
let q_9 = random_threedigits();
let q_9_1 = random_threedigits();
let q_10 = random_threedigits();
let q_10_1 = random_threedigits();
let questions = [
    {
    numb: 1,
    question: q_1+" + "+q_1_1,
    answer: q_1+q_1_1,
    options: [
      q_1+q_1_1,
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: q_2+" + "+q_2_1,
    answer: q_2+q_2_1,
    options: [
      q_2+q_2_1,
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: q_3+" + "+q_3_1,
    answer: q_3+q_3_1,
    options: [
      q_3+q_3_1,
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: q_4+" + "+q_4_1,
    answer: q_4+q_4_1,
    options: [
      q_4+q_4_1,
      "5",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: q_5+" + "+q_5_1,
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
    {
    numb: 6,
    question: "What does KML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },

    {
    numb: 7,
    question: q_4+" + "+q_4_1,
    answer: q_4+" + "+q_4_1,
    options: [
      "78326424",
      "Hello world",
      "make me rok",
      "option 4"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];