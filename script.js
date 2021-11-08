let movie={
    apikey:'k_ibinuz1a',
    fetchdata_2: function(movie_name) {
        fetch(
            'https://imdb-api.com/en/API/SearchMovie/k_ibinuz1a/'+movie_name
            ).then((response) => response.json())
            .then((data) => this.getim_id(data));
    },
    getim_id: function(data){
        const {id} = data.results[0];
        this.fetchdata(id);
    },
    fetchdata: function(id){
        fetch(
            "https://imdb-api.com/en/API/Title/k_ibinuz1a/"+id
        ).then((response) => response.json())
        .then((data) => this.displaydata(data));


    },
    displaydata: function(data){
        const {fullTitle} = data;
        const {image} =data;
        const {releaseDate}=data;
        const {imDbRating}=data;
        const {genres}=data;
        const {runtimeStr}=data;
        const {languages}=data; 

        document.querySelector('.fin_image').src=image;
        document.querySelector('.mov_name').innerHTML=fullTitle;
        document.querySelector('.Genre').innerHTML="Genre: "+genres;
        document.querySelector('.Date').innerHTML="Date of Relase: "+releaseDate;
        document.querySelector('.language').innerHTML='Language: '+languages;
        document.querySelector('.runtime').innerHTML="Duration:"+runtimeStr;
        document.querySelector('.imdb').innerHTML=imDbRating;
    },
    search: function(){
        this.fetchdata_2(document.querySelector("input.searchbox").value);
    }
};
document.querySelector('button.response').addEventListener('click',function(){
    movie.search();
});
