window.addEventListener('load', function() {
    let Sbtn = document.querySelector("#searchBtn");
    let result= this.document.querySelector("#result");
    let searchField = this.document.querySelector("#searchField");
    


    Sbtn.addEventListener('click', function(event){
        event.preventDefault();

        let searchTxt = searchField.value;
        searchTxt = searchTxt.trim();

        let safeSrch = encodeURIComponent(searchTxt);

        let url="superheroes.php?query="+safeSrch;

        fetch(url)
        .then(function(response)  {
                return response.text();
        })
        .then(function(data) {
                result.innerHTML = data;
            })
            
            .catch(function (error) {
             result.innerHTML = "<p> error present <p>"
             console.log(error);
            })

    });

});