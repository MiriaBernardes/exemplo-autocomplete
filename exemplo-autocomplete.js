var axios = require('axios')

var input = document.getElementById('name-or-id-pokemon');

input.addEventListener('input', (event) => {
    var param = event.target.value;

    if (param.length >= 3) {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${param}`)
            .then((response) => {
                console.log(response.data.name)
            });
    }

})