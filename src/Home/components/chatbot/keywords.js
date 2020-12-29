export const KEYWORDS = {
  resume: "resume",
  cv: "resume",
  education: "education",
  school: "education",
  training: "education",
  learn: "education",
  mobile: "mobile",
  native: "mobile",
  ios: "mobile",
  android: "mobile",
  web: "web",
  reactjs: "web",
  keywords: "keywords",
  help: "keywords",
  intro: "intro",
  introduction: "intro",
  skills: "webOrMobile",
  experience: "webOrMobile",
  development: "webOrMobile",
  project: "webOrMobile",
  projects: "webOrMobile",
  "gm-screen": "gmScreen",
  gm: "gmScreen",
  memory: "matchGame",
  match: "matchGame",
  gradebook: "gradeBook",
  grade: "gradeBook",
  book: "gradeBook",
  git: "social",
  hub: "social",
  linkedin: "social",
  "e-mail": "social",
  email: "social",
  mail: "social",
};

export const RESPONSES = {
  resume: {
    phrases: ["Let me get you a copy of my resume ..."],
    respond() {
      return this.phrases;
    },
  },
  education: {
    phrases: [
      "My college history is a bit all over the place, but I completed my BA in Philosophy/Theology (very STEM, right?) at California Baptist University in 2010. I also completed about 1 year of Master level work in that field before I decided to change careers.",
      "More recently, I completed a 3 month full-immersion web development program at LearningFuze in December of 2019.",
      "Used AGILE methodology on a daily basis, and spent over 400 hours of hands-on coding time under the supervision of senior developers. I think it laid an excellent foundation for a future in software development.",
      "There is where I learned the LAMP stack: Linux, Apache, MySQL, and PHP, along with HTML5, CSS3, JavaScript, jQuery, and React.js.",
    ],
    respond() {
      return this.phrases;
    },
  },
  webOrMobile: {
    phrases: ["Would you like to hear about my web, or mobile experience?"],
    respond() {
      return this.phrases;
    },
  },
  mobile: {
    phrases: [
      "For about the past 3 months I have been working on a native mobile app using React Native.",
      "It's a contract project and the app is not mine, so I'm afraid I can't show you the code ... but I can give you an idea of the features and the tech used:",
      "I used AWS Cognito and JSON Web Tokens using the Amplify library to manage secure user logins, and built a Node.js/Express/Postgres backend API from scratch to give full CRUD functionality of users, business, jobs, and more. I also integrated Socket.io (websocket-like) to handle real-time messaging and notifications.",
      `The UI was created using a Material-UI for React Native called Paper, and React Navigation as the router to navigate between screens. Other features like background location tracking and uploading images from the device's "camera roll" (to a S3 bucket) were integrated using Expo APIs.`,
      "This project is still ongoing (part-time) and I am looking forward to deeping my React Native knowledge and hopefully picking up Kotlin and/or Swift in the near future.",
    ],
    respond() {
      return this.phrases;
    },
  },
  web: {
    phrases: [
      "Web development is where I've had the most total hands-on time.",
      `I feel right at home in React.js and in "vanilla" JavaScript, and of course HTML5. CSS3 is an area where I'm currently applying myself to learning better, rather than leaning on libraries like Bootstrap 4 and Material-UI (and Tailwind sure looks promising, but I'm trying to focus on improving my plain CSS).`,
      "I'm also very practiced at building Node.js/Express REST APIs, and have used both MySQL and Postgres on the database end of the stack. I'm also familiar with PHP although I'll admit it's been a while since I've gotten my hands dirty in it.",
      "I have integrated unit and integration tests in some of my personal projects using Jest, Mocha/Chai, and Cypress.",
      "In addition to that, I have handled all the devOps for a part-time contract project I'm currently working on, continually deploying to a Kubernetes cluster using a CI/CD pipeline I set up in CircleCI. This has also meant doing some custom setup in Webpack, Babel, ESLint, and more.",
      "If you'd like, I can tell you more about my portfolio projects GM-Screen, Memory Match, or Gradebook.",
    ],
    respond() {
      return this.phrases;
    },
  },
  unknown: {
    phrases: [
      "I don't get it.",
      "I'm sorry, could you re-phrase that?",
      "Type 'help' for a list of key words.",
    ],
    index: 0,
    respond() {
      const response = this.phrases[this.index];
      if (this.index >= 2) {
        this.index = 0;
      } else {
        this.index += 1;
      }

      return [response];
    },
  },
  keywords: {
    phrases: [
      "I'm listening for key words to tell you more about me.",
      "You can try:",
      `"education"`,
      `"mobile"`,
      `"web"`,
      `or "resume."`,
    ],
    respond() {
      return this.phrases;
    },
  },
  intro: {
    phrases: [
      "Hello there, Rapha here.",
      "I'm a people person, and a talker, so I really wish I could have a conversation with every person who visits my portfolio site. But since I clearly can't, I figured this chatbot would be next closest thing. I made sure and programmed it will all the charm and charisma I am capable of. Soooo ... Your mileage may vary.",
      "You can ask for help or for a list of keywords at any time.",
      "What would you like to know about me?",
    ],
    respond() {
      return this.phrases;
    },
  },
  gmScreen: {
    phrases: [
      "GM-Screen was my final web development program project. I'm proud of the end result because although it's still flawed, the real-time updating feature called for websockets (I used Socket.io, not *quite* pure websockets), so I was advised to use create my backend in Node/Express. The program taught PHP at the backend language, so I essentially taught myself Node/Express using the online documentation (and a little support from instructors) in the two weeks we were given to do the project.",
      "And oh btw, I had to take a few days off in the middle for my child to be born sooooo ... :P",
      "GM-Screen is a tool for paper-and-dice roleplaying games, where there is a single Game Master (GM) who narrates the story and controls all the other characters in the game other than the player characters.",
      "The app allows groups to log into a session, one user as the GM, the others as players. The GM is able to push or remove, in real time, images representing locations and characters/items to the displays of all the players in a session.",
      "The UI is responsive down to a typical tablet landscape size, as the app is not intended for use on screens smaller than that.",
      "It was built using React.js, Node/Express with a MySQL database, Socket.io, Bootstrap 4, and of course HTML5 and CSS3.",
      "You can find it deployed at:",
      "https://gmscreen.slightlyskewedcreations.com/",
      "and on GitHub at:",
      "https://github.com/rbolet/gm-screen",
      "... I'm afraid you'll have to copy/paste for now, I'll be generating clickable links soon.",
    ],
    respond() {
      return this.phrases;
    },
  },
  gradeBook: {
    phrases: [
      "Gradebook is a simple example of a full-stack app. It is a simple UI that give full Create, Read, Update, and Delete functionality of student's course grades.",
      "It is fully mobile responsive.",
      "It was built using React.js, Bootstrap 4, and HTML5/CSS3. The backend was originally built in PHP, then refactored and expanded in Node.js, with a MySQL database.",
      "You can find it deployed at:",
      "https://gradebook.slightlyskewedcreations.com/",
      "and on GitHub at:",
      "https://github.com/rbolet/gradebook",
      "... I'm afraid you'll have to copy/paste for now, I'll be generating clickable links soon.",
    ],
    respond() {
      return this.phrases;
    },
  },
  matchGame: {
    phrases: [
      "Memory Match is the first project I built for portfolio purposes, to demonstrate my grasp on front end development.",
      "Why yes, it is hideously ugly >.< ... I plan on replacing it soon.",
      "The UI is fully mobile responsive.",
      "It was built using HTML5, CSS3, JavaScript, and jQuery.",
      "You can find it deployed at:",
      "https://memorymatch.slightlyskewedcreations.com/",
      "and on GitHub at:",
      "https://github.com/rbolet/memory-match",
      "... I'm afraid you'll have to copy/paste for now, I'll be generating clickable links soon.",
    ],
    respond() {
      return this.phrases;
    },
  },
  chatBot: {
    phrases: [
      "You're interacting with something of a portfolio project right now!",
      `This chat bot parses the words you type in and uses a lookup table to try to match one of several possible words with a handful of key words (e.g. "school," "education," and "college" all map to the "education" keyword).`,
      `Currently, each key word simply returns an array of string phrases, but I built it with an eye toward being able to modify this to return data with with I can "answer" with links, buttons, or other React components.`,
      "Mobile responsive using CSS Grid. It's fully mobile responsive ... right? Send me an e-mail if it's not, could you please? I built this in a bit of a hurry (less than 1 week)...",
      "This chat bot (and this site) was built using React.js and Next.js with a little bit of React-Bootstrap to simplify the transition of some elements from my original portfolio page.",
      "You can find it deployed at:",
      "Well ... you're looking at it.",
      "and on GitHub at:",
      "https://github.com/rbolet/v2_portfolio",
      "... I'm afraid you'll have to copy/paste for now, I'll be generating clickable links soon.",
    ],
  },
  social: {
    phrases: [
      "The links to my GitHub, LinkedIn, and to start an e-mail are on the site header.",
      "But just because you asked:",
      "https://github.com/rbolet",
      "https://linkedin.com/in/rbolet",
      "this.rapha.dev@gmail.com",
    ],
    respond() {
      return this.phrases;
    },
  },
};
