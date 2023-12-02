const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inputWord = document.getElementById("input-word").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `<div class="word">
            <h3>${inputWord}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
    })
    .catch(() => {
        result.innerHTML = `<h2 class="error">Couldn't Find The Word</h2>`;
    });
});
