const quotes = [
  {
    quote: "해보자, 해보자, 후회하지말고",
    author: "배구선수 김연경",
  },
  {
    quote:
      "오늘의 나는 내일보다 젊습니다. 계속 도전하세요. 즐기면서 하는 것도 잊지말고요.",
    author: "탁구선수 니시라이란",
  },
  {
    quote: "never say never",
    author: "배구선수 김희진",
  },
  {
    quote: "잘해야하고, 잘하고 있고, 잘할 수 있다",
    author: "양궁선수 안산",
  },
  {
    quote:
      "남들 다 놀 나이에 유혹을 참아내가며서 치열한 공부를 한 기억은 나중에 어떤 것이든 도전하고자 할 때 큰 용기와 원동력이 될 거야.",
    author: "@study_or_not",
  },
  {
    quote: "자기 자신을 믿는다면 무엇이든 해낼 수 있다.",
    author: "스케이트보드선수 스카이 브라운",
  },
];

const quote = document.querySelector("#quote span.quote");
const author = document.querySelector("#quote span.author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
