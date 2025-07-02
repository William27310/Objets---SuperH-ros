fetch('assets/json/dc.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        data.forEach(hero => {
            document.getElementById('conteneur').innerHTML += `
            <div class="card mb-5 bg-dark" style="width: 24rem; height: 68rem;">
                <h5 class="card-title mt-2 text-white text-center"> ${hero.name} </h5>
                <img src= ${hero.image} class="card-img-top border rounded" alt="...">
                <div class="card-body">
                    <ul>
                        <li class="card-text text-white"> <b>Capacités</b> : <br> ${hero.powers}</li><br>
                        <li class="card-text text-white"> <b>Ville</b> : ${hero.city}</li><br>
                        <li class="card-text text-white"> <b>Première apparition</b> : ${hero.firstappearance}</li>
                    </ul>
                </div>
            </div>
            `

        });

    })

