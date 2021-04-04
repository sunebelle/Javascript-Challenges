//https://github.com/mihaiandrei97/movie-list-app-react-hooks/blob/master/src/components/Discover.js
// http://omdbapi.com/
const api_key =  '04c35731a5ee918f014970082a0088b1';

$("input").on("change", (e) => {
    const searchKey = document.querySelector("input").value;
    const urlEncode = encodeURIComponent(searchKey);
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${urlEncode}`;
    
    fetch(searchURL)
    .then (response => response.json())
    .then (img => {
        imgData = img.results[0].poster_path
        const imgSrc = `https://image.tmdb.org/t/p/w780${imgData}`
        const title = img.results[0].title;
        const overview = img.results[0].overview;
        const vote = img.results[0].vote_average;
    //    $("img").attr("src", imgSrc);
    //    $("h1").text(title);
    //    $("h4").text(vote);
    //    $("p").text(overview);
       $(".row.main").prepend(`<div class="col m-2">
       <img src=${imgSrc} alt="">
       <h3> ${title}</h3>
       <p> ${vote}</p>
       </div>`)
    });
    document.querySelector("input").value="";
});

//    <h4>  ${overview.substring(0,100)}</h4>
// https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=Jack+Reacher



// onclick (img, button), onchange (select, input,textera)  onclick/onchange = myClick()
// adEventListener ("submit, change, click, mouseover,select,search,toggle,keypress, input, copy,...")
//button; type submit => use to submit a form, remember to preventdefault() for (submit a button, but not a form)