

let recBtn = document.querySelector('#recommendation-button')
let genre = document.querySelector('input[name=q4]:checked').value
let year = document.querySelector('input[name="q3"]:checked').value
let length = document.querySelector('input[name="q2"]:checked').value
let rating = document.querySelector('input[name="q1"]:checked').value
let displaySection = document.querySelector('#display-section')

const createCard = (movieArr) => {
    movieArr.results.map((result) => {
      let displayDiv = document.createElement("div");
      displayDiv.classList.add("card");
      displayDiv.style.width = "18rem";
      let resultObj = JSON.stringify({ ...result }).replace(
        /[\/\(\)\']/g,
        "&apos;"
      );
      // console.log(resultObj);
      displayDiv.innerHTML = `
        <img src='https://image.tmdb.org/t/p/w500/${result.poster_path}'/>
        <div class="card-body bg-light">
        <h5 class="card-title">${result.title}</h5>
        <p class="card-text overflow-hidden">${result.overview}</p>
        </div>
        `;
      displaySection.appendChild(displayDiv);
    });
  };

function getMovie() {
    axios.get(`http://localhost:4004/api/movie/${genre}`)
    .then(res => createCard(res.data))
    .catch(err => console.log(err))
}

recBtn.addEventListener("click", getMovie)


