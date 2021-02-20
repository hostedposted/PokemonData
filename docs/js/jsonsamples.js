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
            "region": "kanto",
            "region_id": 1
    }, {
        "onwards": true
    }], null, 4
    ));
    fetch("https://thepokeapi.com/pokemon/random").then(res => res.json()).then((pokemon) => {

    $(a2).append(`{
    <span class="hljs-attr">"id"</span>: <span class="hljs-number">${pokemon.id}</span>,
    <span class="hljs-attr">"name"</span>: <span class="hljs-string">"${pokemon.name}"</span>,
    <span class="hljs-attr">"names"</span>: {
        <span class="hljs-attr">"french"</span>: <span class="hljs-string">"${pokemon.names.french}"</span>,
        <span class="hljs-attr">"german"</span>: <span class="hljs-string">"${pokemon.names.german}"</span>,
        <span class="hljs-attr">"spanish"</span>: <span class="hljs-string">"${pokemon.names.spanish}"</span>,
        <span class="hljs-attr">"italian"</span>: <span class="hljs-string">"${pokemon.names.italian}"</span>,
        <span class="hljs-attr">"english"</span>: <span class="hljs-string">"${pokemon.names.english}"</span>,
        <span class="hljs-attr">"japanese"</span>: <span class="hljs-string">"${pokemon.names.japanese}"</span>
    },
    <span class="hljs-attr">"region"</span>: <span class="hljs-string">"${pokemon.region}"</span>,
    <span class="hljs-attr">"region_id"</span>: <span class="hljs-number">${pokemon.region_id}</span>
}`);
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

        // MOVES
        var t1 = document.getElementsByClassName("gettypeall");
        var t2 = document.getElementsByClassName("gettyperand");
        var t3 = document.getElementsByClassName("gettypename");
        var t4 = document.getElementsByClassName("gettypeid");
    
    
        $(t1).append(JSON.stringify([{
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://thepokeapi.com/type/fighting"
                    }
                ],
                "double_damage_to": [],
                "half_damage_from": [],
                "half_damage_to": [
                    {
                        "name": "rock",
                        "url": "https://thepokeapi.com/type/rock"
                    },
                    {
                        "name": "steel",
                        "url": "https://thepokeapi.com/type/steel"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "ghost",
                        "url": "https://thepokeapi.com/type/ghost"
                    }
                ],
                "no_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://thepokeapi.com/type/ghost"
                    }
                ]
            },
            "name": "normal",
            "id": 1
        }, {
            "onwards": true
        }], null, 4));
        
        fetch("https://thepokeapi.com/type/random").then(res => res.json()).then((type) => {
        $(t2).append(JSON.stringify({
            "damage_relations": type["damage_relations"],
            "name": type.name,
            "id": type.id
        }, null, 4));

        })
    
        $(t3).append(JSON.stringify({
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "bug",
                        "url": "https://thepokeapi.com/type/bug"
                    },
                    {
                        "name": "ghost",
                        "url": "https://thepokeapi.com/type/ghost"
                    },
                    {
                        "name": "dark",
                        "url": "https://thepokeapi.com/type/dark"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "fighting",
                        "url": "https://thepokeapi.com/type/fighting"
                    },
                    {
                        "name": "poison",
                        "url": "https://thepokeapi.com/type/poison"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "fighting",
                        "url": "https://thepokeapi.com/type/fighting"
                    },
                    {
                        "name": "psychic",
                        "url": "https://thepokeapi.com/type/psychic"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "steel",
                        "url": "https://thepokeapi.com/type/steel"
                    },
                    {
                        "name": "psychic",
                        "url": "https://thepokeapi.com/type/psychic"
                    }
                ],
                "no_damage_from": [],
                "no_damage_to": [
                    {
                        "name": "dark",
                        "url": "https://thepokeapi.com/type/dark"
                    }
                ]
            },
            "name": "psychic",
            "id": 14
        }, null, 4));
    
        $(t4).append(JSON.stringify({
            "damage_relations": {
                "double_damage_from": [
                    {
                        "name": "ghost",
                        "url": "https://thepokeapi.com/type/ghost"
                    },
                    {
                        "name": "dark",
                        "url": "https://thepokeapi.com/type/dark"
                    }
                ],
                "double_damage_to": [
                    {
                        "name": "ghost",
                        "url": "https://thepokeapi.com/type/ghost"
                    },
                    {
                        "name": "psychic",
                        "url": "https://thepokeapi.com/type/psychic"
                    }
                ],
                "half_damage_from": [
                    {
                        "name": "poison",
                        "url": "https://thepokeapi.com/type/poison"
                    },
                    {
                        "name": "bug",
                        "url": "https://thepokeapi.com/type/bug"
                    }
                ],
                "half_damage_to": [
                    {
                        "name": "dark",
                        "url": "https://thepokeapi.com/type/dark"
                    }
                ],
                "no_damage_from": [
                    {
                        "name": "normal",
                        "url": "https://thepokeapi.com/type/normal"
                    },
                    {
                        "name": "fighting",
                        "url": "https://thepokeapi.com/type/fighting"
                    }
                ],
                "no_damage_to": [
                    {
                        "name": "normal",
                        "url": "https://thepokeapi.com/type/normal"
                    }
                ]
            },
            "name": "ghost",
            "id": 8
        }, null, 4));
});