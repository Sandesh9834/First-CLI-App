let input = require('readline-sync');

let userName = input.question("Enter your name:");

console.log("Welcome " + userName);
console.log("How well do you know Sandesh?");
console.log("-----------------------------------------------------")


let score = 0;

function play(question, answer)
{
      var userAnswer = input.question(question);

      if(userAnswer.toUpperCase() === answer.toUpperCase())
      {
            console.log("Correct!")
            score = score + 1;
      }
      else{
            console.log("Wrong!");
      }

      console.log("Current score:" + score);
      console.log("-----------------------------------------------------")
}

var questions = [
      {
            question: "Where does Sandesh live? ",
            answer: "Pune"
      },
      {
            question: "What is Sandesh's surname? ",
            answer: "Shinde"
      },
      {
            question: "Which college did Sandesh went? ",
            answer: "PICT"
      },
      {
            question: "Which sport does Sandesh play? ",
            answer: "Cricket"
      },
      {
            question: "What is Sandesh's engineering branch? ",
            answer: "EnTC"
      }
]

for(var i=0; i<questions.length; i++){
      let current = questions[i];
      play(current.question, current.answer);
}

console.log("Final score is: "+ score);