async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  let result="";
    const response2 = await fetch(`https://proclubs.ea.com/api/fc/allTimeLeaderboard?platform=common-gen5`).catch(err=>console.log('err'))
    const movies =  await response2.json().then(c=>{
      if(c.length== 0){
        result="err"
      }else{
      result = c
      }
  }).catch(err=>result = 'err')
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
