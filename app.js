const select = document.querySelector('.select');
const image = document.querySelector('.media');
const nom = document.querySelector('.name');
const body = document.querySelector('body');
const defaultImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';


let api =  async () =>{
  body.classList.remove('reveal');
  let selectedType = select.value;
  let url = `https://pokeapi.co/api/v2/type/${selectedType}`;

  let data = await fetch(url);
  let reponse = await data.json();
  
  const pokemonList = reponse.pokemon;
  const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  nom.textContent = randomPokemon.pokemon.name;

  let urlIMG = await fetch(randomPokemon.pokemon.url)
  let dataIMG = await urlIMG.json()
  image.src  = dataIMG.sprites.front_default;
  body.classList.add('reveal');

}

select.addEventListener('change',api)