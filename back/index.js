const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});

function getRandomItem(items) {
  const length = items.length;
  const randomIdx = Math.floor(Math.random() * length);

  if (Array.isArray(items[randomIdx])) {
    let words = "";
    items[randomIdx].forEach((element) => {
      Array.isArray(element)
        ? (words += getRandomItem(element))
        : (words += element);
    });
    return words;
  }

  return items[randomIdx];
}

const randomTitles = [
  "JavaScript",
  "React",
  "TypeScript",
  "Styled Components",
  "Framer Motion",
  "Express",
];

app.get("/posts", (req, res, next) => {
  const data = [...Array(17)].map(() => ({
    title: getRandomItem(randomTitles),
    content: `${getRandomItem([
      "Пожалуйтса",
      "Просто",
    ])} сделайте так, чтобы это ${getRandomItem([
      "удивительное",
      "крутое",
      "простое",
    ])} тестовое предложение ${getRandomItem([
      ["изменялось ", ["быстро", "мгновенно"], " случайным образом"],
      "менялось каждый раз",
    ])}`,
  }));

  console.log(data);
  res.json(data);
});
