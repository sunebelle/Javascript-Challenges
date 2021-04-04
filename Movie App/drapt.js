//https://github.com/mihaiandrei97/movie-list-app-react-hooks/blob/master/src/components/Discover.js
// const api_url = 'https://api.themoviedb.org/3/';
const api_key =  '04c35731a5ee918f014970082a0088b1';
const api_configuration = `https://api.themoviedb.org/3/configuration?api_key=${api_key}`
// const img_url = 'https://image.tmdb.org/t/p/w1280';
https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// url="https://api.themoviedb.org/3/movie/76341?api_key=04c35731a5ee918f014970082a0088b1"


// https://api.themoviedb.org/3/configuration?api_key=04c35731a5ee918f014970082a0088b1


async function fetchText() {
    let res = await fetch(api_configuration);

    console.log(res.status); // 200
    console.log(res.statusText); // OK

    if (res.status === 200) {
        let data = await res.json();
        // handle data
        const backdrop_sizes = data.images.backdrop_sizes;
        const logo_sizes = data.images.logo_sizes;
        const poster_sizes = data.images.poster_sizes;
        const profile_sizes = data.images.profile_sizes;
        const still_sizes = data.images.still_sizes;

    
    }
}

fetchText();


fetch(api_configuration)
  .then(response => response.json())
  .then(data => console.log(data));

$("input").on("change", (e) => {
    const searchKey = document.querySelector("input").value;
    const urlEncode = encodeURIComponent(searchKey);
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${urlEncode}`;
    // console.log(searchKey);
    // console.log(urlEncode);
    fetch(searchURL)
    .then (response => response.json())
    .then (img => {
        imgData = img.results[0].poster_path
        const imgSrc = `https://image.tmdb.org/t/p/w780${imgData}`
        // console.log(imgURL);
        const title = img.results[0].title;
        const overview = img.results[0].overview;
        const vote = img.results[0].vote_average;

    });
  });





// onclick (img, button), onchange (select, input,textera)  onclick/onchange = myClick()
// adEventListener ("submit, change, click, mouseover,select,search,toggle,keypress, input, copy,...")
//button; type submit => use to submit a form, remember to preventdefault() for (submit a button, but not a form)