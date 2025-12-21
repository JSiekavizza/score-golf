const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

const golfScore = (par, strokes) => {
  if (strokes === 1) {
    console.log(strokes);
    return names[0];
  } else if (strokes <= par - 2) {
    console.log(strokes);
    return names[1];
  } else if (strokes === par - 1) {
    console.log(strokes);
    return names[2];
  } else if (strokes === par) {
    console.log(strokes);
    return names[3];
  } else if (strokes === par + 1) {
    console.log(strokes);
    return names[4];
  } else if (strokes === par + 2) {
    console.log(strokes);
    return names[5];
  } else {
    return names[6];
  }
};

const scoreEmojis = {
  "Hole-in-one!": "🏆",
  Eagle: "🦅",
  Birdie: "🐦",
  Par: "⛳",
  Bogey: "😐",
  "Double Bogey": "😬",
  "Go Home!": "💀",
};

function mostrarResultado() {
  const par = document.getElementById("par").value;
  const strokes = document.getElementById("strokes").value;
  const parNumero = parseInt(par);
  const strokesNumero = parseInt(strokes);

  //validacion básica de que par y stroke sea un número
  if (isNaN(parNumero) || isNaN(strokesNumero)) {
    alert("Por favor, ingrese un número válido");
    return;
  }

  const resultado = golfScore(parNumero, strokesNumero);
  const calculateScore = (parNumero, strokesNumero) => {
    return parNumero - strokesNumero;
  };
  const emoji = scoreEmojis[resultado];

  document.getElementById("resultado-nombre").textContent = resultado;
  document.getElementById("resultado-score").textContent = calculateScore(
    parNumero,
    strokesNumero
  );
  document.getElementById("resultado-emoji").textContent = emoji;
  console.log(golfScore(parNumero, strokesNumero));
}
