const baseUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1320";
const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const PokeContainer = document.getElementById("basePokeContainer");
ManagePokemonCards(baseUrl, ImgSrc);

function ManagePokemonCards(baseUrl, ImgSrc){
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            let PokeList = [];
            let PokeListSliced = [];
            PokeList = data.results;
            PokeListSliced = PokeList.slice(0,500);

            let cont = 1;
            let AllImg = [];
            PokeListSliced.forEach(PokeInfo => {
                AllImg = ImgSrc + String(cont) + ".png";
                const createCard = (PokeInfo) =>{
                    const Poke = document.createElement("div");
                    Poke.setAttribute("dataID", PokeInfo.id)
                    Poke.classList.add("Pokemon");
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
                const Poke = createCard(PokeInfo);
                PokeContainer.appendChild(Poke);
                cont = cont +1;
            })

        })
}