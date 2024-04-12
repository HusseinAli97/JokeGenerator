const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("getBtn");
const api = "https://api.chucknorris.io/jokes/random";

// const generateJoke = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             let currantJoke = JSON.parse(this.responseText);
//             joke.innerHTML = currantJoke.value;
//         }
//     }
//     xhr.send();
// }
const xhr = new XMLHttpRequest();
function getJoke() {
    xhr.open("GET", api);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let currantJoke = JSON.parse(this.responseText);
                joke.innerHTML = currantJoke.value;
            } else {
                joke.innerHTML = "Loading...";
            }
        }
    };
    xhr.send();
}
jokeBtn.addEventListener("click", getJoke);
