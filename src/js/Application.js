import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    const monkeyWithBanana = this.emojis.map((monkey) => {
      return `${monkey} ${this.banana}`;
    });

    monkeyWithBanana.forEach((emoji) => {
      let newParagraph = document.createElement("p");
      newParagraph.innerHTML = emoji;
      let divEmojis = document.getElementById("emojis");
      divEmojis.appendChild(newParagraph);
    });
  }
}
