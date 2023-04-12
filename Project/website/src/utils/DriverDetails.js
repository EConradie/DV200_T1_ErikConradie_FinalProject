// useEffect(() => {

//     axios.get('https://api-formula-1.p.rapidapi.com/drivers', {
//         headers: {
//             'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

//             //'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
//         }, params: { id: "29" }
//     }).then((response) => {

//         const index = 0;
//         setDriverName(response.data.response[index].name)
//         setDriverAbbr(response.data.response[index].abbr)
//         setDriverNat(response.data.response[index].nationality)
//         setDriverNum(response.data.response[index].number)
//         setDriverPoints(response.data.response[index].career_points)
//         setDriverTeam(response.data.response[index].teams[0].team.name)
//         setDriverPod(response.data.response[index].podiums)
//         setDriverPrix(response.data.response[index].grands_prix_entered)
//         setDriverChamps(response.data.response[index].world_championships)
//         setDriverImage(response.data.response[index].image)

//     }).catch((error) => {
//         console.log(error);
//     })

// }, [])

export const DriverDetails = [
    {
        abbr: 'Max Verstappen',
        champs: 2,
        name: 'Max Verstappen',
        nat: "Dutch",
        number: 1,
        pod: 80,
        points: 2080.5,
        prix: 166,
        team: "Red Bull Racing",
        image: "https://media-2.api-sports.io/formula-1/drivers/25.png",
        id: 25
    },
    {
        abbr: "HAM",
        champs: 7,
        name: "Lewis Hamilton",
        nat: "British",
        number: 44,
        pod: 192,
        points: 4443.5,
        prix: 313,
        team: "Mercedes-AMG Petronas",
        image: "https://media-2.api-sports.io/formula-1/drivers/20.png",
        id: 20
    },
    {
        name: "Valtteri Bottas",
        abbr: "BOT",
        nat: "Finnish",
        num: 77,
        points: 1791,
        team: "Alfa Romeo",
        pod: 67,
        prix: 203,
        champs: 0,
        image: "https://media-3.api-sports.io/formula-1/drivers/5.png",
        id: 5
    },
    {
        name: "Sergio Perez",
        abbr: "PER",
        nat: "Mexican",
        num: 11,
        points: 1255,
        team: "Red Bull Racing",
        pod: 28,
        prix: 239,
        champs: 0,
        image: "https://media-3.api-sports.io/formula-1/drivers/10.png",
        id: 10
    },
    {
        name: "Carlos Sainz Jr",
        abbr: "SAI",
        nat: "Spanish",
        num: 55,
        points: 802.5,
        team: "Scuderia Ferrari",
        pod: 15,
        prix: 166,
        champs: 0,
        image: "https://media-2.api-sports.io/formula-1/drivers/24.png",
        id: 24
    },
    {
        name: "Lando Norris",
        abbr: "NOR",
        nat: "British",
        num: 4,
        points: 436,
        team: "McLaren Racing",
        pod: 6,
        prix: 85,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/49.png",
        id: 49
    },
    {
        name: "Charles Leclerc",
        abbr: "LEC",
        nat: "Monégasque",
        num: 16,
        points: 874,
        team: "Scuderia Ferrari",
        pod: 24,
        prix: 106,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/34.png",
        id: 34
    },
    {
        name: "Daniel Ricciardo",
        abbr: "RIC",
        nat: "Australian",
        num: 3,
        points: 1309,
        team: "McLaren Racing",
        pod: 32,
        prix: 231,
        champs: 0,
        image: "https://media-2.api-sports.io/formula-1/drivers/14.png",
        id: 14
    },
    {
        name: "Pierre Gasly",
        abbr: "GAS",
        nat: "French",
        num: 10,
        points: 336,
        team: "Alpine F1 Team",
        pod: 3,
        prix: 111,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/36.png",
        id: 36
    },
    {
        name: "Fernando Alonso",
        abbr: "ALO",
        nat: "Spanish",
        num: 14,
        points: 2106,
        team: "Aston Martin F1 Team",
        pod: 101,
        prix: 361,
        champs: 2,
        image: "https://media-2.api-sports.io/formula-1/drivers/4.png",
        id: 4
    },
    {
        name: "Esteban Ocon",
        abbr: "OCO",
        nat: "French",
        num: 31,
        points: 368,
        team: "Alpine F1 Team",
        pod: 2,
        prix: 114,
        champs: 0,
        image: "https://media-3.api-sports.io/formula-1/drivers/28.png",
        id: 28
    },
    {
        name: "Sebastian Vettel",
        abbr: "VET",
        nat: "German",
        num: 5,
        points: 3097,
        team: "Aston Martin F1 Team",
        pod: 122,
        prix: 299,
        champs: 4,
        image: "https://media-2.api-sports.io/formula-1/drivers/19.png",
        id: 19
    },
    {
        name: "Lance Stroll",
        abbr: "STR",
        nat: "Canadian",
        num: 18,
        points: 214,
        team: "Aston Martin F1 Team",
        pod: 3,
        prix: 125,
        champs: 0,
        image: "https://media-2.api-sports.io/formula-1/drivers/31.png",
        id: 31
    },
    {
        name: "Yuki Tsunoda",
        abbr: "TSU",
        nat: "Japanese",
        num: 22,
        points: 45,
        team: "Scuderia AlphaTauri Honda",
        pod: 0,
        prix: 47,
        champs: 0,
        image: "https://media-2.api-sports.io/formula-1/drivers/82.png",
        id: 82
    },
    {
        name: "George Russell",
        abbr: "RUS",
        nat: "British",
        num: 63,
        points: 312,
        team: "Mercedes-AMG Petronas",
        pod: 9,
        prix: 85,
        champs: 0,
        image: "https://media-3.api-sports.io/formula-1/drivers/51.png",
        id: 51
    },
    {
        name: "Kimi Raikkonen",
        abbr: "RAI",
        nat: "Finnish",
        num: 7,
        points: 1859,
        team: "Alfa Romeo",
        pod: 0,
        prix: 0,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/7.png",
        id: 7
    },
    {
        name: "Nicholas Latifi",
        abbr: "LAT",
        nat: "Canadian",
        num: 6,
        points: 9,
        team: "Williams F1 Team",
        pod: 0,
        prix: 60,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/61.png",
        id: 61
    },
    {
        name: "Antonio Giovinazzi",
        abbr: "GIO",
        nat: "Italian",
        num: 99,
        points: 14,
        team: "Alfa Romeo",
        pod: 0,
        prix: 0,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/29.png",
        id: 29
    },
    {
        name: "Mick Schumacher",
        abbr: "MSC",
        nat: "German",
        num: 47,
        points: 12,
        team: "Haas F1 Team",
        pod: 0,
        prix: 42,
        champs: 0,
        image: "https://media-1.api-sports.io/formula-1/drivers/80.png",
        id: 80

    },
    {
        name: "Nikita Mazepin",
        abbr: "MAZ",
        nat: "Russian",
        num: 9,
        points: 0,
        team: "Haas F1 Team",
        pod: 0,
        prix: 21,
        champs: 0,
        image: "https://media-2.api-sports.io/formula-1/drivers/81.png",
        id: 81
    }

]