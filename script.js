const generateQuote = () => {
  const displayQuote = document.getElementById("quote");
  const allQuotes = [
    // Emociones
    "alegría",
    "tristeza",
    "ira",
    "miedo",
    "amor",
    "odio",
    "esperanza",
    "sorpresa",
    "calma",
    "ansiedad",
    "emoción",
    "decepción",
    "ternura",
    "asco",
    "entusiasmo",
    "paz",
    "preocupación",
    "confusión",
    "vergüenza",
    "gratitud",

    // Verbos
    "correr",
    "saltar",
    "llorar",
    "reír",
    "amar",
    "odiar",
    "esperar",
    "sorprender",
    "calmar",
    "temer",
    "alegrar",
    "entristecer",
    "enfadar",
    "consolar",
    "abrazar",
    "besar",
    "soñar",
    "pensar",
    "hablar",
    "escuchar",
  ];
  const randomQuote = Math.floor(Math.random() * allQuotes.length);
  displayQuote.textContent = allQuotes[randomQuote];
};
