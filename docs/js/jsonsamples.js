//To show JSON samples
$(document).ready(function() {
    // POKEMON
    var a1 = document.getElementsByClassName("getpokemonall");
    var a2 = document.getElementsByClassName("getpokemonrand");
    var a3 = document.getElementsByClassName("getpokemonname");
    var a4 = document.getElementsByClassName("getpokemonid");

    $(a1).append(JSON.stringify(
        [{
            "id": 1,
            "name": "bulbasaur",
            "names": {
                "french": "Bulbizarre",
                "german": "Bisasam",
                "spanish": "Bulbasaur",
                "italian": "Bulbasaur",
                "english": "Bulbasaur",
                "japanese": "フシギダネ"
            },
            "pokedex_numbers": {
                "national": 1,
                "kanto": 1,
                "original-johto": 226,
                "updated-johto": 231,
                "kalos-central": 80,
                "isle-of-armor": 68,
                "updated-kanto": 1
            },
            "region": "kanto",
            "region_id": 1
    }, {
        "onwards": true
    }], null, 4
    ));
    fetch("https://thepokeapi.com/pokemon/random").then(res => res.json()).then((pokemon) => {

    $(a2).append(JSON.stringify({
        "id": pokemon.id,
        "name": pokemon.name,
        "names": {
            "french": pokemon.names.french,
            "german": pokemon.names.german,
            "spanish": pokemon.names.spanish,
            "italian": pokemon.names.italian,
            "english": pokemon.names.english,
            "japanese": pokemon.names.japanese
        },
        "region": pokemon.region,
        "region_id": pokemon.region_id
    }, null, 4));
    })

    $(a3).append(JSON.stringify({
        "id": 428,
        "name": "lopunny",
        "names": {
            "french": "Lockpin",
            "german": "Schlapor",
            "spanish": "Lopunny",
            "italian": "Lopunny",
            "english": "Lopunny",
            "japanese": "ミミロップ"
        },
        "region": "sinnoh",
        "region_id": 4
    }, null, 4));


    $(a4).append(JSON.stringify({
        "id": 574,
        "name": "gothita",
        "names": {
            "french": "Scrutella",
            "german": "Mollimorba",
            "spanish": "Gothita",
            "italian": "Gothita",
            "english": "Gothita",
            "japanese": "ゴチム"
        },
        "region": "unova",
        "region_id": 5
    }, null, 4));
});