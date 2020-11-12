const authors = ['Gillian C.', 'Chapman U.', 'Isaiah L.', 'Blair B.', 'Bentle P.', 'Menzie F.', 'Alexander R.', 'Walton S.', 'Rosemary D.', 'Wheeler I.', 'Britney P.', 'Morton M.', 'Damian E.', 'Duncan B.', 'Stan E.', 'Brooks A.', 'Ward O.', 'Benson T.', 'Ferris S.', 'Mitchell E.', 'Ulderico O.', 'Toscani Y.', 'Fiorenza B.', 'Lombardi V.', 'Amando X.', 'Sabbatini P.', 'Salvatore S.', 'Gallo L.', 'Susana C.', 'Deluca G.', 'Luisina G.', 'Inocencio F.', 'Hilario F.', 'Oquendo T.', 'Felipe B.', 'Serna U.', 'Rosario A.', 'Lizardo T.', 'Rebeca O.', 'Encina I.', 'Franc P.', 'Comtois U.', 'Orianne P.', 'Belmont D.', 'Toussaint M.', 'Lefurgey N.', 'Denis F.', 'David A.', 'Océane Y.', 'Jacques W.'];

const sellers = function generateSellers() {
  const string = 'Live-edge fam knausgaard butcher Helvetica 3 wolf moon beard air plant activated charcoal hoodie stumptown Food truck art party cold-pressed activated charcoal jianbing etsy drinking vinegar blog waistcoat man braid succulents Taxidermy sriracha kitsch gochujang mixtape photo booth mustache small batch shaman skateboard Photo booth readymade Roof umami swag before they sold out woke Vegan glossier tacos biodiesel hexagon hot chicken deep v everyday carry four loko umami butcher beard man braid kale chips pickled Roof party synth williamsburg truffaut Tousled kogi synth venmo fam flannel hashtag XOXO trust fund mustache helvetica etsy next level pickled wayfarers Master cleanse 8-bit';
  const listOfSellers = string.split(' ');
  for (let i = 0; i < listOfSellers.length - 1; i += 1) {
    listOfSellers[i] += listOfSellers[i + 1];
  }

  return listOfSellers.length;
};

sellers();

const questions = function createQuestion(authorsParam, questionParam) {
  const paragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat? Tortor posuere ac ut consequat semper viverra nam. Quis auctor elit sed vulputate. Ac turpis egestas maecenas pharetra convallis posuere.\nEnim nunc faucibus a pellentesque. Ut faucibus pulvinar elementum integer enim neque. Tincidunt arcu non sodales neque sodales ut etiam sit. Elementum nibh tellus molestie nunc non blandit.\nAmet volutpat consequat mauris nunc congue nisi vitae. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Varius morbi enim nunc faucibus a pellentesque sit amet?\nNibh tortor id aliquet lectus.Tellus cras adipiscing enim eu turpis egestas pretium aenean. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. At tempor commodo ullamcorper a lacus vestibulum.\nScelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.\nVenenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Amet nulla facilisi morbi tempus. Viverra orci sagittis eu volutpat odio facilisis mauris? Eget mi proin sed libero enim. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Id donec ultrices tincidunt arcu non sodales neque sodales. Tristique sollicitudin nibh sit amet commodo nulla.\nVelit egestas dui id ornare arcu odio ut. Posuere ac ut consequat semper viverra?\nMolestie at elementum eu facilisis sed odio morbi quis commodo. Tristique senectus et netus et malesuada. Tortor posuere ac ut consequat semper viverra? Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.\nTempor commodo ullamcorper a lacus vestibulum sed. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Nunc consequat interdum varius sit amet. Sapien eget mi proin sed libero enim sed faucibus turpis. Mauris pharetra et ultrices neque ornare aenean euismod elementum.';

  const start = Math.floor(Math.random() * (300));
  const end = Math.floor(Math.random() * (500 - 350) + 350);
  let question = paragraphs.slice(start, end);

  if (question[0] === ' ') {
    question = question.substring(1);
  }
  if (question[0] === '.') {
    question = question.substring(2);
  }
  return question[0].toUpperCase() + question.substring(1);
};