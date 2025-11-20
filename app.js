window.addEventListener('load', function() {
    let loadBtn = document.querySelector('#loadTextBtn');


    loadBtn.addEventListener('click', function(event){
        event.preventDefault();

        fetch("superheroes.php")
        .then(response => {
            if (response.ok){
                return response.text();
            } else {
                return Promise.reject('Something  went wrong');
            }
            
        })
            .then(data => {
                alert(data);
            })
            
            .catch(error => console.log(error));

    });

});