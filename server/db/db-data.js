const mathRandom = function getRandomInt(minParam, maxParam) {
  const min = Math.ceil(minParam);
  const max = Math.floor(maxParam);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const authors = function pickAuthors() {
  const names = ['Gillian C.', 'Chapman U.', 'Isaiah L.', 'Blair B.', 'Bentle P.', 'Menzie F.', 'Alexander R.', 'Walton S.', 'Rosemary D.', 'Wheeler I.', 'Britney P.', 'Morton M.', 'Damian E.', 'Duncan B.', 'Stan E.', 'Brooks A.', 'Ward O.', 'Benson T.', 'Ferris S.', 'Mitchell E.', 'Ulderico O.', 'Toscani Y.', 'Fiorenza B.', 'Lombardi V.', 'Amando X.'];
  const index = mathRandom(0, 24);

  return names[index];
};

const questionDate = () => {
  let month = mathRandom(1, 12);
  if (month < 10) {
    month = `0${month.toString()}`;
  }
  let day = mathRandom(1, 27);
  if (day < 10) {
    day = `0${day.toString()}`;
  }
  const year = mathRandom(2018, 2019).toString();

  return `${year}-${month}-${day}`;
};

const answerDate = (qDate) => {

  let day = Number(qDate.slice(8, 10));
  let month = Number(qDate.slice(5, 7));
  let year = Number(qDate.slice(0, 4));

  if (day < 24) {
    day += 3;
  } else {
    day = 1;
    if (month > 11) {
      month = 1;
      year += 1;
    } else {
      month += 1;
    }
  }

  if (day < 10) {
    day = '0' + day.toString();
  }
  if (month < 10) {
    month = `0${month.toString()}`;
  }

  return `${year}-${month}-${day}`;
};


const string = 'Live-edge fam knausgaard butcher Helvetica three wolf moon beard air plant activated charcoal hoodie stumptown Food truck art party cold-pressed activated charcoal jianbing etsy drinking vinegar blog waistcoat man braid succulents Taxidermy sriracha kitsch gochujang mixtape photo booth mustache small batch shaman skateboard Photo booth readymade Roof umami swag before they sold out woke Vegan glossier tacos biodiesel hexagon hot chicken deep fried everyday carry four loko umami butcher beard man braid k.';

const sellers = function generateSellers(sellersParam) {
  const index = mathRandom(0, 71);
  const listOfSellers = sellersParam.split(' ');

  return listOfSellers[index] + listOfSellers[index + 1];
};

const text = function createQuestionOrAnswer(textParam) {
  const start = mathRandom(0, 300);
  const end = mathRandom(500, 350);
  let questionOrAnswer = textParam.slice(start, end);

  if (questionOrAnswer[0] === ' ') {
    questionOrAnswer = questionOrAnswer.substring(1);
  }
  if (questionOrAnswer[0] === '.') {
    questionOrAnswer = questionOrAnswer.substring(2);
  }

  return questionOrAnswer[0].toUpperCase() + questionOrAnswer.substring(1);
};

const helpful = () => {

  return mathRandom(0, 10);
};

const dbData = () => {
  let answers = [];
  let questions = [];
  let id = 1;
  let numberOfQs;
  let seller;
  for (let i = 1; i < 101; i += 1) {
    numberOfQs = mathRandom(3, 5);
    seller = sellers(string);
    for (let j = 0; j < numberOfQs; j += 1) {
      const questionArr = [
        id,
        i,
        seller,
        questionDate(),
        authors(),
        text(string),
        0,
      ];
      questions.push(questionArr);

      const answerArr = [
        answerDate(questionArr[3]),
        text(string),
        id,
        0,
        helpful(),
      ];
      answers.push(answerArr);

      id += 1;
    }
  }

  return [questions, answers];
};

exports.dbData = dbData;