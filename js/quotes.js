const quotes = [
    {
    quote:"내가 제일 귀엽다.",
    author:"탱자",
},
{
    quote:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney",
},
{
    quote:"It is better to fail in originality than to succeed in imitation.",
    author:"Herman Melville",
},
{
    quote:"I am the Best.",
    author:"TangJa",
},
{
    quote:"All progress takes place outside the comfort zone.",
    author:"Michael John Bobak",
},
{
    quote:"Success usually comes to those who are too busy to be looking for it.",
    author:"Henry David Thoreau",
},
{
    quote:"Success seems to be connected with action. Successful people keep moving.",
    author:"Conrad Hilton",
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

