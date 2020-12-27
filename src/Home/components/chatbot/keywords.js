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
      return this.phrases;
    },
  },
  education: {
    phrases: ["This is where I went to school ..."],
    respond() {
      return this.phrases;
    },
  },
  mobile: {
    phrases: ["Let me tell you a bit about my mobile dev experience"],
    respond() {
      return this.phrases;
    },
  },
  web: {
    phrases: ["Let me tell you a bit about my web dev experience"],
    respond() {
      return this.phrases;
    },
  },
  unknown: {
    phrases: ["I don't get it.", "I'm sorry, could you re-phrase that?"],
    respond() {
      const objResponse = this.phrases;
      console.log("phrases: ", objResponse);
      return objResponse;
    },
  },
};
