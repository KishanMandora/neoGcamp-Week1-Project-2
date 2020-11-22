// importing chalk and readline-sync
const chalk = require("chalk");
const readlineSync = require("readline-sync");

// clearing console for every new run
console.clear();

//taking user's name and rules
const userName = readlineSync.question(
  chalk.bgWhiteBright.black("What is your name?  "),
  { hideEchoBack: true, mask: " #" }
);
console.log(
  chalk.blueBright(
    `\n${chalk.bold.bgWhiteBright.black(
      userName
    )} Welcome to the Programming fun game`
  )
);
console.log(
  chalk.bgCyan.green(
    `\nLets go over the rules: \n1: You have 3 lives if your answers are Wrong 3 times the Game is Over. \n2: You have to answer either in ${chalk.bold.black(
      "a"
    )} or ${chalk.bold.black("b")} or ${chalk.bold.black(
      "c"
    )} or ${chalk.bold.black("d")} \n`
  )
);

let score = 0;
let life = 2;

// array of questions
const array = [
  {
    question:
      "When was World Wide Web invented by Tim Berners-Lee? \na: 1988 \nb: 1989 \nc: 1991 \nd: 1992",
    answer: "b",
    fact: "Tim was the same person who introduced HTML in 1993. ",
  },
  {
    question:
      "When was JavaScript released? \na: 1992 \nb: 1993 \nc: 1995 \nd: 1996",
    answer: "c",
    fact:
      "JavaScript has nothing in common with JAVA it was a marketing tactic to  divert some attention, ",
  },
  {
    question:
      "For which browser was the first JS engine was created for by Brendan Eich? \na: Netscape Navigator  \nb: Google Chrome \nc: Microsoft Edge \nd: Opera",
    answer: "a",
    fact:
      " The Netscape Navigator later evolved into Spider Monkey which is used in Firefox Browsers",
  },
  {
    question:
      "On 1st April of 2004 which product did Google launch which everyone thought was intended for April fools day? \na: Google Translate \nb: Google Drive \nc: Google Slides \nd: Gmail",
    answer: "d",
    fact:
      "Sundar Pichai the current CEO was interviewed on that day and he too thought Gmail was an April fools joke.",
  },
  {
    question:
      "What is full form of PHP? \na: Pre Hypertext Processor \nb: Hypertext Program Processor \nc: Hypertext Preprocessor \nd: Program Hypertext Processor",
    answer: "c",
    fact:
      "PHP is an acronym for Personal Home Page. It was created by Rasmus Lerdorf to manage his personal website.",
  },
  {
    question:
      "When was Git created and who is it's originl author? \na: Guido Van Rossum in 1991 \nb: Larry Page in 1999 \nc: Linus Torvalds in 2005 \nd: Jordan Walke in 2013",
    answer: "c",
    fact: "Linus Torvalds is also the man behind Linux Operating Systems.",
  },
  {
    question:
      "When was ReactJS released by Facebook? \na: 2013 \nb: 2014 \nc: 2015 \nd: 2016",
    answer: "a",
    fact:
      "Though ReactJS was open sourced in 2013 it was created in 2011 Jordan Walke for Facebook.",
  },
  {
    question:
      "When was VueJS released by Evan You? \na: 2012 \nb: 2013 \nc: 2014 \nd: 2015",
    answer: "c",
    fact:
      "Evan You worked at Google and used Angular while he thought of making a lightweight JS Framework.",
  },
  {
    question:
      "Which company develops and maintains Typescript? \na: Apple \nb: Microsoft \nc: Google \nd: Facebook",
    answer: "b",
    fact:
      "TypeScript is a superset of JS designed to build large applications. It is used in JS frameworks like Angular, Vue.",
  },
  {
    question:
      "When was Node.js released and who is it's originl author? \na: Ryan Dahl in 2009 \nb: Robert Griesemer in 2009 \nc: James Gosling in 1995 \nd: Graydon Hoare in 2010",
    answer: "a",
    fact: "Ryan Dahl released another runtime named Deno in 2020.",
  },
];

// array of Highscores
const highScore = [
  {
    name: "kishan",
    points: 9,
  },
  {
    name: "Dhruv",
    points: 8,
  },
  {
    name: "Vishal",
    points: 7,
  },
  {
    name: "Sreyash",
    points: 5,
  },
  {
    name: "Tussi",
    points: 4,
  },
];

// function to play the quiz
const playQuiz = (question, answer, fact) => {
  const userAns = readlineSync.keyIn(`${question} \n`, { limit: "$<a-d>" });

  if (answer.toLowerCase() === userAns.toLowerCase()) {
    console.log(chalk.bgGreenBright("Correct answer 😀  "));
    score++;
  } else {
    console.log(
      chalk.bgRedBright(`Wrong answer  ☹️  You have ${life} life left`)
    );
    life--;
  }

  console.log(chalk.bgYellowBright.red(`Fun Fact: ${chalk.black(fact)}`));
  console.log(
    chalk.bgMagentaBright(`Your current score is ${chalk.bold(score)} \n`)
  );
};

// loop to keep playing the quiz
for (let i = 0; i < array.length; i++) {
  if (life < 0) {
    console.log(chalk.bgRedBright.black("===== Game Over 😓  =====\n"));
    break;
  }
  playQuiz(array[i].question, array[i].answer, array[i].fact);
}

if (life >= 0) {
  console.log(chalk.bgGreenBright.black(" 🥳  WOW you completed the game \n"));
}

console.log(chalk.bgBlueBright.black("The previous Highscores were: "));
// loop to display previous Highscores
for (let i = 0; i < highScore.length; i++) {
  console.log(
    chalk.bgWhiteBright.black(
      `${chalk.italic(i + 1)} was ${chalk.bold.red(
        highScore[i].name
      )} with ${chalk.bold.red(highScore[i].points)} points.`
    )
  );
}

// sorting and updating array to current scores
highScore.push({ name: userName, points: score });
highScore.sort(function (a, b) {
  return b.points - a.points;
});
highScore.pop();

console.log(chalk.bgBlueBright.black("\nThe New Highscores are: "));
// loop to print current Highscores
for (let i = 0; i < highScore.length; i++) {
  console.log(
    chalk.bgWhiteBright.black(
      `${chalk.italic(i + 1)} is ${chalk.bold.green(
        highScore[i].name
      )} with ${chalk.bold.green(highScore[i].points)} points.`
    )
  );
}
