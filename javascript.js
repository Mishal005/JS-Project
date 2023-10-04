const searchButton =() =>{

const search = document.getElementById("search").value;

const year = document.getElementById("filter").value;

fetch(`https://www.omdbapi.com/?s=${search}&y=${year}&apikey=8da1f38f`)
.then((resp)=> {
    return resp.json();
  })
  .then((data) =>{
    
    console.log(data);
    // console.log(data.Search[0].Title);
    let url=data.Search;
    const Tag = document.getElementById("resultContainer");
    Tag.innerHTML = "";
    // const year = document.getElementById("filter").value;
    console.log(year);
    if (year) {
      url = url.filter((movie) => movie.Year >= Number(year));
    }
    console.log(url);
    url.map(resultMovies);
    function resultMovies(movie) {
      const listItem = `
        <div class="movieIitem"> 
        <img src="${movie.Poster}" alt="Image not found" >
        <p >Title: ${movie.Title}</p>
        <p>Year: ${movie.Year}</p>
        </div>
        `;
      Tag.innerHTML = Tag.innerHTML + listItem;
    }
  });
  


}