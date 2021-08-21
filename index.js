function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

const spy = 'hello'
function logShout(spy) {
  console.log(spy.toUpperCase());
}


function logWhisper(string) {
  console.log(string.toLowerCase());
}

const greetingToGrandma = "I love you, Grandma."
function sayHiToGrandma(greetingToGrandma) {
    if (greetingToGrandma === "I love you, Grandma.") {
      return "I love you, too."
    } else if (greetingToGrandma === greetingToGrandma.toLowerCase()) {
      return "I can\'t hear you!"
    } else if (greetingToGrandma = greetingToGrandma.toUpperCase()) {
      return "YES INDEED!"
    }
}
console.log(greetingToGrandma)