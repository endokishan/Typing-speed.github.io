// 1.  These are the messeges which shown to user.
const testWords = [
    "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    "If you want to forget something or someone, never hate it, or never hate him/her. Everything and everyone that you hate is engraved upon your heart; if you want to let go of something, if you want to forget, you cannot hate.",
    "Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.",
    "Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.",
    "Even if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don’t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved.",
    "The outer world is a reflection of the inner world. Other people’s perception of you is a reflection of them; your response to them is an awareness of you.",
    "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.",
    "Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind."
]


// 2.  Assigning the values
const msg = document.getElementById('msg');
const typedWords = document.getElementById('userWord');
const btn = document.getElementById('btn');
let startTime, endTime;



// 4.  playGame function started here......
//  then it goes to else if part....
const playGame = () => {
    let randomNumber = Math.floor(Math.random() * testWords.length);
    msg.innerText = testWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Finish";
}



// 5.  endplay functon started here...
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    // it goes to wordCounter function

    let speed = Math.floor((wordCount / totalTime) * 60);

    let finalMsg = "🤟 Awsome, Your Speed is " + speed + " words per minute.\n";

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
    typedWords.value = "";
}

const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let correctWord = 0;

    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            correctWord++;
        }
    })

    let errorWords = (word1.length - correctWord);
    return ("✅ Correct Words : " + correctWord + " out of " + word1.length + ".\n❌ Error Words : " + errorWords + ".")
}


const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


// 3.  This is the first event which started after user clicks the start button..
//  after play game function it goes back to else if part and started endplay function...
typedWords.disabled = true;
btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        playGame();
    } else if (this.innerText == "Finish") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})