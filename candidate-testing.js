const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let name = input.question('What is your name? ');
  candidateName = name;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // let answer = input.question(question);
  // candidateAnswer = answer;
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(questions[i]);
    candidateAnswers.push(answer);
  }
  console.log(candidateAnswers);
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numberOfCorrectAnswers = 0;
  const numberOfQuizQuestions = questions.length;
  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log(`Candidate's answer: ${candidateAnswers[i]} Correct answer: ${correctAnswers[i]}`);
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numberOfCorrectAnswers++
    }
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade = (numberOfCorrectAnswers / numberOfQuizQuestions) * 100
  if (grade >= 80) {
    console.log(`You earned a ${grade}% on the quiz! Nice work!`)
  } else {
    console.log(`You earned a ${grade}% on the quiz! Better luck next time!`)
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Welcome ${candidateName}!`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};