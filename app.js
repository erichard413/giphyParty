console.log("Let's get this party started!");

async function giphyGet(term){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q:`${term}`,api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    let numResults = res.data.data.length;
    const idx = Math.floor(Math.random() * numResults) //random number within data
    const url = (res.data.data[idx].images.original.url);
    const img = document.createElement('IMG');
    const results = document.querySelector('#results');
    img.classList.add("finishedimages");
    img.src = url;
    results.append(img);
}

const searchBtn = document.querySelector('#searchGiphy');
searchBtn.addEventListener("click", function(e){
    e.preventDefault(); 
    const search = document.querySelector('#search');
    const searchTerm = search.value;
    giphyGet(searchTerm);
})

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener("click", function(e){
    e.preventDefault();
    const results = document.getElementById('results');
    results.innerHTML = "";
})