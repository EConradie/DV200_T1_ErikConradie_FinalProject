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
        //value: 25
        value: 0

    },
    {
        name: 'Lewis Hamilton',
        id: 20,
        label: 'Lewis Hamilton',
        //value: 20
        value: 1

    },
    {
        name: 'Valtteri Bottas',
        id: 5,
        label: 'Valtteri Bottas',
        //value: 5
        value: 2

    },
    {
        name: 'Sergio Perez',
        id: 10,
        label: 'Sergio Perez',
        //value: 10
        value: 3

    },
    {
        name: 'Carlos Sainz Jr',
        id: 24,
        label: 'Carlos Sainz Jr',
        //value: 24
        value: 4
    },
    {
        name: 'Lando Norris',
        id: 49,
        label: 'Lando Norris',
        //value: 49
        value: 5
    },
    {
        name: 'Charles Leclerc',
        id: 34,
        label: 'Charles Leclerc',
        //value: 34
        value: 6
    },
    {
        name: 'Daniel Ricciardo',
        id: 14,
        label: 'Daniel Ricciardo',
        //value: 14
        value: 7
    },
    {
        name: 'Pierre Gasly',
        id: 36,
        label: 'Pierre Gasly',
        //value: 36
        value: 8
    },
    {
        name: 'Fernando Alonso',
        id: 4,
        label: 'Fernando Alonso',
        //value: 4
        value: 9
    },
    {
        name: 'Esteban Ocon',
        id: 28,
        label: 'Esteban Ocon',
        //value: 28
        value: 10
    },
    {
        name: 'Sebastian Vettel',
        id: 19,
        label: 'Sebastian Vettel',
        //value: 19
        value: 11
    },
    {
        name: 'Lance Stroll',
        id: 31,
        label: 'Lance Stroll',
        //value: 31
        value: 12

    },
    {
        name: 'Yuki Tsunoda',
        id: 82,
        label: 'Yuki Tsunoda',
        //value: 82
        value: 13

    },
    {
        name: 'George Russell',
        id: 51,
        label: 'George Russell',
        //value: 51
        value: 14
    },
    {
        name: 'Kimi Raikkonen',
        id: 7,
        label: 'Kimi Raikkonen',
        //value: 7
        value: 15

    },
    {
        name: 'Nicholas Latifi',
        id: 61,
        label: 'Nicholas Latifi',
        //value: 61
        value: 16
    },
    {
        name: 'Antonio Giovinazzi',
        id: 29,
        label: 'Antonio Giovinazzi',
        //value: 29
        value: 17
    },
    {
        name: 'Mick Schumacher',
        id: 80,
        label: 'Mick Schumacher',
        //value: 80
        value: 18
    },
    {
        name: 'Nikita Mazepin',
        id: 81,
        label: 'Nikita Mazepin',
        //value: 81
        value: 19
    },


];
