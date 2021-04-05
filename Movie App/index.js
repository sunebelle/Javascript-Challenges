//https://github.com/mihaiandrei97/movie-list-app-react-hooks/blob/master/src/components/Discover.js
// const api_url = 'https://api.themoviedb.org/3/';
// http://omdbapi.com/

const api_key =  '04c35731a5ee918f014970082a0088b1';
const urlDiscover_movie=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`

getMovies(urlDiscover_movie);


async function getMovies(url){
    $("#main").html("");
    const res = await fetch(url);
    if (res.status===200) {
        const data = await res.json();
        data.results.forEach(element => {
            const {poster_path,title,vote_average,overview} = element;

            $("#main").append(
            `<div class="movie-list">
                <img src=${image(poster_path)} alt="${title}">
                <h4 class="title">${title}</h4>
                <div class = "rate d-flex justify-content-between pb-4">
                    <span class="vote">${vote_average}</span>
                    <span class="star">	${rate(vote_average)}</span>
                </div>
                <p class="overview">${overview}</p>
            </div>`)
        });
    }
};

function image(src){
    if (src) return `https://image.tmdb.org/t/p/w780${src}`
    return "https://tse3.mm.bing.net/th?id=OIP.1umjRUVLTbPQCPVU_q1HPgHaK-&pid=Api&P=0&w=300&h=300"
}


function rate(vote){
    if (vote>9) {
        return "&starf; &starf; &starf; &starf; &starf;"
    } else if (vote> 8) {
        return "&starf; &starf; &starf; &starf;"

    } else {
        return "&starf; &starf; &starf;"
    }
};


$("form").submit(e => {
    e.preventDefault();
    const searchKey = input.value;
    const urlEncode = encodeURIComponent(searchKey);
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${urlEncode}`;
    // console.log(searchKey)
    // console.log(searchURL);
    getMovies(searchURL);
    input.value="";
})


