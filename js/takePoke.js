const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1320";
const PokeContainer = document.getElementById("basePokeContainer");
ManagePokemonCards(baseUrl);

function ManagePokemonCards(baseUrl){
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            let PokeList = [];
            let PokeListSliced = [];
            let Alldata = data;
            PokeList = data.results;
            PokeListSliced = PokeList.slice(0, 500);

            const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
            let cont = 1;
            let AllImg = [];

            PokeListSliced.forEach(PokeInfo => {
                const CreatePokemon = (PokeInfo) =>{
                    const Poke = document.createElement("div");
                    Poke.setAttribute("dataID", PokeInfo.order)
                    Poke.classList.add("Pokemon");
                    const PokeInfoURL = PokeInfo.url; 
                    const DividingUrl = PokeInfoURL.split("/");
                    let GetPokeID = DividingUrl[DividingUrl.length -2];
                    AllImg = ImgSrc + String(GetPokeID) + ".png";   
                    Poke.innerHTML = `
                    <div><img src=${AllImg}></div>
                    <div><h2>${PokeInfo.name.charAt(0).toUpperCase() + PokeInfo.name.slice(1)}</h2></div>
                    `;

                    const InfoBar = document.getElementById("LateralInfoBar");
                
                    Poke.addEventListener("click",() =>{  
                        InfoBar.style.display = "block"
                        const PokeInfoURL = PokeInfo.url; 
                        const DividingUrl = PokeInfoURL.split("/");
                        let GetPokeID = DividingUrl[DividingUrl.length -2];
                        fetchPokeDetails(GetPokeID, PokeInfo.name);
                        PokeStats(GetPokeID);
                        PokeType(GetPokeID);
                    });
                    return Poke;
                };
                
                let Poke = CreatePokemon(PokeInfo);
                PokeContainer.appendChild(Poke);
                cont = cont +1;
            })

        })
}