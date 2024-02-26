function fetchPokeDetails(PokeID, PokeName){
    const GetGifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${PokeID}.gif`;//id or name
    const GifContainer = document.getElementById("GifBox"); 
    GifContainer.innerHTML = `
    <div class="GifImageContainer"><img src="${GetGifUrl}"></div>  
    <div><h6>${PokeName.charAt(0).toUpperCase() + PokeName.slice(1)}</h6></div>
    `;
}

function PokeStats(ID){
    const BaseStatsURL = "https://pokeapi.co/api/v2/pokemon/" + String(ID);
    fetch(BaseStatsURL)
        .then(response => response.json())
        .then(stats =>{
            let PokeListStats =[];
            PokeListStats = stats;

            document.getElementById("SpanATK").innerHTML = PokeListStats.stats[0].base_stat;
            document.getElementById("SpanHP").innerHTML = PokeListStats.stats[1].base_stat;
            document.getElementById("SpanDEF").innerHTML = PokeListStats.stats[2].base_stat;
            document.getElementById("SpanSPA").innerHTML = PokeListStats.stats[3].base_stat;
            document.getElementById("SpanSPD").innerHTML = PokeListStats.stats[4].base_stat;
            document.getElementById("SpanSPEED").innerHTML = PokeListStats.stats[5].base_stat;
        })
}

function PokeType(ID){
    const BaseTypeURL = "https://pokeapi.co/api/v2/pokemon/" + String(ID);
    fetch(BaseTypeURL)
        .then(response => response.json())
        .then(type =>{
            let PokeType = [];
            PokeType = type;

            document.getElementById("Type1").innerHTML = '';
            document.getElementById("Type2").innerHTML = '';
            
            if(PokeType.types.length == 2){
                document.getElementById("Type1").innerHTML = PokeType.types[0].type.name.charAt(0).toUpperCase() + PokeType.types[0].type.name.slice(1);
                document.getElementById("Type2").innerHTML = PokeType.types[1].type.name.charAt(0).toUpperCase() + PokeType.types[1].type.name.slice(1);
            }
            else if(PokeType.types.length == 1){
                    document.getElementById("Type1").innerHTML = PokeType.types[0].type.name.charAt(0).toUpperCase() + PokeType.types[0].type.name.slice(1);
                    document.getElementById("Type2").innerHTML = "----";
            }
            else{
                    document.getElementById("Type1").innerHTML = "----";
                    document.getElementById("Type2").innerHTML = "----";
            }

        })
}
