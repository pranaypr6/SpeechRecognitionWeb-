const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("started");
};
recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript;

  //   document.body.style.backgroundColor = "white";
  // }
  // if (transcript.includes("switch to normal mode")) {
  //   document.body.style.backgroundColor = "white";
  // }
  // if (transcript.includes("switch to dark mode")) {
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.color = "white";
  // }
  console.log(transcript);
  
  readOutLoud(transcript);
};
let readOutLoud = (message) => {
  const texta = " you looser are u still alive";
  const speech = new SpeechSynthesisUtterance();
  const speech2 = new SpeechSynthesisUtterance();
  const speech3 = new SpeechSynthesisUtterance();
  const speech4 = new SpeechSynthesisUtterance();
  const speech5 = new SpeechSynthesisUtterance();
  const speech6 = new SpeechSynthesisUtterance();

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  if (message.includes("hey open Google search")) {
    speech.text = texta;
    speech2.text = "you are alone";
    speech3.text = "no one cares you";
    speech4.text = "you better gonna die";
    speech5.text = "hahahah";
  }else{
  	 speech2.text = message + "hahahahahah"
  }

  window.speechSynthesis.speak(speech);
  window.speechSynthesis.speak(speech2);
  window.speechSynthesis.speak(speech3);
  window.speechSynthesis.speak(speech4);
  window.speechSynthesis.speak(speech5);
  window.speechSynthesis.speak(speech6);


};

// recognition.onend = () => {
//   recognition.restart();
// };

btn.addEventListener("click", () => {
  recognition.start();
});
