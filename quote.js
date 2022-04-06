var arr = [{
    quote: 'If you want to know what God thinks of money, just look at the people he gave it to',
    author: 'Dorothy Parker',
    color: 'brown'
}, {
    quote: 'You educate a man; you educate a man. You educate a woman; you educate a generation',
    author: 'Brigham Young',
    color: 'gray'
}, {
    quote: 'Programming is not about what you know.it is about what you can figure out',
    author: ' Chris Pine',
    color: '#999966'
}, {
    quote: 'The best error message is the one that never shows up',
    author: 'Thomas Fuchs',
    color: '#8A7E8B'
}, {
    quote: 'I find television very educating. Every time somebody turns on the set, I go into the other room and read a book',
    author: 'Groucho Marx',
    color: 'black'
}, {
    quote: 'Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers',
    author: 'Charles W. Eliot',
    color: '#00658C'
}],

currentIndex = 0;

function setQuotes(){
    var hr = (new Date()).getHours();
    var curentGreeTing;
    if (hr < 12) {
        curentGreeTing = "Morning ";
    }
    else if(hr >=12 && hr <=17){
        curentGreeTing = "Afternoon ";
    }
    else if (hr > 17 && hr <21) {
        curentGreeTing = "Evening ";
    }
    else
    {
        curentGreeTing = "Night";
    }
document.getElementById("quote-container").style.background = arr[currentIndex].color;
document.getElementById("quote-text").style.color = arr[currentIndex].color;
document.getElementById("quote-text").innerHTML= "<i class='fa-solid fa-quote-left'></i> " + arr[currentIndex].quote+ " <i class='fa-solid fa-quote-right'></i>";
document.getElementById("auother").innerHTML="- By " + arr[currentIndex].author;
document.getElementById("auother").style.color =arr[currentIndex].color
document.getElementById("next-button").style.background=arr[currentIndex].color
document.getElementById("header-content").innerHTML="Let's start our "+curentGreeTing + " with a new quote."
}

function getNextQuote(){
    currentIndex++;
    if(currentIndex > arr.length-1)
    currentIndex =0;
    setQuotes();
}