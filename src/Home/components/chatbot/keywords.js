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
};

export const RESPONSES = {
  resume: {
    phrases: ["Let me get you a copy of my resume ..."],
    respond() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
  },
  education: {
    phrases: ["This is where I went to school ..."],
    respond() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
  },
  mobile: {
    phrases: ["Let me tell you a bit about my mobile dev experience"],
    respond() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
  },
  unknown: {
    phrases: ["I don't get it.", "I'm sorry, could you re-phrase that?"],
    respond() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
  },
};
