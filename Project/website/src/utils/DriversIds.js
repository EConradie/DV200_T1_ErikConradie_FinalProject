// var DriversIds= [];

//     useEffect(() => {

//         axios.get('https://api-formula-1.p.rapidapi.com/rankings/drivers', {
//             headers: {
//                 'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',

//                 'x-rapidapi-key': 'e62dc10aa5msh39921492f48bc1ep1c251fjsn53b4cd5e4cf1'
//             }, params: { season: '2021' }
//         }).then((response) => {

//             for (let k = 0; k < 20; k++) {

//                 var tempObj = {
//                     name: response.data.response[k].driver.name,
//                     id: response.data.response[k].driver.id
//                 }

//                 DriversIds.push(tempObj)

//             }


//         }).catch((error) => {
//             console.log(error);
//         })

//     }, [])

//     console.log(DriversIds) ;


export const DriversIds = [
    {
        name: 'Max Verstappen',
        id: 25,
        label: 'Max Verstappen',
        value: 25

    },
    {
        name: 'Lewis Hamilton',
        id: 20,
        label: 'Lewis Hamilton',
        value: 20

    },
    {
        name: 'Valtteri Bottas',
        id: 5,
        label: 'Valtteri Bottas',
        value: 5

    },
    {
        name: 'Sergio Perez',
        id: 10,
        label: 'Sergio Perez',
        value: 10

    },
    {
        name: 'Carlos Sainz Jr',
        id: 24,
        label: 'Carlos Sainz Jr',
        value: 24

    },
    {
        name: 'Lando Norris',
        id: 49,
        label: 'Lando Norris',
        value: 49

    },
    {
        name: 'Charles Leclerc',
        id: 34,
        label: 'Charles Leclerc',
        value: 34

    },
    {
        name: 'Daniel Ricciardo',
        id: 14,
        label: 'Daniel Ricciardo',
        value: 14

    },
    {
        name: 'Pierre Gasly',
        id: 36,
        label: 'Pierre Gasly',
        value: 36

    },
    {
        name: 'Fernando Alonso',
        id: 4,
        label: 'Fernando Alonso',
        value: 4

    },
    {
        name: 'Esteban Ocon',
        id: 28,
        label: 'Esteban Ocon',
        value: 28

    },
    {
        name: 'Sebastian Vettel',
        id: 19,
        label: 'Sebastian Vettel',
        value: 19

    },
    {
        name: 'Lance Stroll',
        id: 31,
        label: 'Lance Stroll',
        value: 31

    },
    {
        name: 'Yuki Tsunoda',
        id: 82,
        label: 'Yuki Tsunoda',
        value: 82

    },
    {
        name: 'George Russell',
        id: 51,
        label: 'George Russell',
        value: 51

    },
    {
        name: 'Kimi Raikkonen',
        id: 7,
        label: 'Kimi Raikkonen',
        value: 7

    },
    {
        name: 'Nicholas Latifi',
        id: 61,
        label: 'Nicholas Latifi',
        value: 61

    },
    {
        name: 'Antonio Giovinazzi',
        id: 29,
        label: 'Antonio Giovinazzi',
        value: 29

    },
    {
        name: 'Mick Schumacher',
        id: 80,
        label: 'Mick Schumacher',
        value: 80

    },
    {
        name: 'Nikita Mazepin',
        id: 81,
        label: 'Nikita Mazepin',
        value: 81

    },


];
