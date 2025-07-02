fetch('assets/json/dc.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        data.forEach(hero => {
            document.getElementById('conteneur').innerHTML += `
            <div class="card mb-5" style="width: 24rem; height: 46rem;">
                <img src= ${hero.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title ms-">${hero.name} </h5>
                    <ul>
                        <li class="card-text">powers : ${hero.powers}</li>
                        <li class="card-text">city : ${hero.city}</li>
                        <li class="card-text">première apparition : ${hero.firstappearance}</li>
                    </ul>
                </div>
            </div>
            `

        });

    })

