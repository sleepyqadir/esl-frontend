import axios from 'axios';

const baseURL = 'https://fyp-container-server.vercel.app/';

const instance = axios.create({
    baseURL,
});

export const loginUser = async (body) => {
    try {
        const response = await instance.post('/users/login', body);
        const { user, token } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('No user found');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}

export const register = async (body) => {
    try {
        const response = await instance.post('/users/register', body);
        const { user, token } = response.data;
        console.log(user, token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('No user found');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}

export const getAllClients = async () => {
    try {
        const response = await instance.get('/clients/getAllClients');
        return response.data.map(client => {
            const full_name = client.name.split(" ")
            return { first_name: full_name[0], last_name: full_name[1], id: client.clientId, email: `${full_name[0]}@gmail.com`, containers: client.containers.length }
        }).sort((a, b) => a.containers - b.containers);
    } catch (error) {
        if (error.response.status === 404) {
            console.log('No user found');
        } else {
            console.log(error);
        }

        return []
    }
}

export const getAllContainers = async () => {
    try {
        const response = await instance.get('/containers/getAllContainers');
        return response.data.map(container => {
            return {
                Container: container.containerId, Client: container.clientId, Date: container.date,
                Revenue: `${(new Date().getFullYear() - new Date(container.date).getFullYear()) * 12 * 50} $`,
                status: <i className="fa fa-circle font-success f-12"></i>
            }
        });
    } catch (error) {
        if (error.response.status === 404) {
            console.log('No user found');
        } else {
            console.log(error);
        }

        return []
    }
}

export const getTopClients = async () => {
    const clients = await getAllClients()

    const sorted = clients.sort((a, b) => a.containers.length > b.containers.length)

    return sorted
}

export const getLatestContainers = async () => {
    const containers = await getAllContainers()

    const sorted = containers.sort((c1, c2) => new Date(c1.Date).setHours(0, 0, 0, 0) - new Date(c2.Date).setHours(0, 0, 0, 0));

    return sorted
}

export const getLineDate = () => {

    const data1 = getMonthlyProfit()[2021]
    const data2 = getMonthlyProfit()[2022]

    const lineData = {
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        datasets: [
            {
                data: [data1.january, data1.febuary, data1.march, data1.april, data1.may, data1.june, data1.july, data1.augues, data1.september, data1.october, data1.november, data1.december],
                borderColor: "#ff8084",
                backgroundColor: "#ff8084",
                borderWidth: 3,
                barPercentage: 0.7,
                categoryPercentage: 0.4,
            },
            {
                data: [data2.january, data2.febuary, data2.march, data2.april, data2.may, data2.june, data2.july, data2.augues, data1.september, data1.october, data1.november, data1.december],
                borderColor: "#a5a5a5",
                backgroundColor: "#a5a5a5",
                borderWidth: 3,
                barPercentage: 0.7,
                categoryPercentage: 0.4,
            },
        ],
    };

    return lineData
}

export const getMonthContainerCount = (data) => {
    const one = data.filter((d) => {
        return new Date(d.Date).getMonth() === 1
    })

    const two = data.filter((d) => {
        return new Date(d.Date).getMonth() === 2
    })
    const three = data.filter((d) => {
        return new Date(d.Date).getMonth() === 3
    })

    const four = data.filter((d) => {
        return new Date(d.Date).getMonth() === 4
    })
    const five = data.filter((d) => {
        return new Date(d.Date).getMonth() === 5
    })
    const six = data.filter((d) => {
        return new Date(d.Date).getMonth() === 6
    })
    const seven = data.filter((d) => {
        return new Date(d.Date).getMonth() === 7
    })
    const eight = data.filter((d) => {
        return new Date(d.Date).getMonth() === 8
    })
    const nine = data.filter((d) => {
        return new Date(d.Date).getMonth() === 9
    })
    const ten = data.filter((d) => {
        return new Date(d.Date).getMonth() === 10
    })
    const eleven = data.filter((d) => {
        return new Date(d.Date).getMonth() === 11
    })
    const twelve = data.filter((d) => {
        return new Date(d.Date).getMonth() === 12
    })


    return [one.length, two.length, three.length, four.length, five.length, six.length, seven.length, eight.length, nine.length, ten.length, eleven.length, twelve.length]

}

export const getContainerData = async () => {

    const containers = await getAllContainers()

    const cont2020 = []
    const cont2021 = []
    const cont2022 = []
    const cont2023 = []


    for (let i = 0; i < containers.length; i++) {
        const date = new Date(containers[i].Date).getFullYear()
        if (date === 2020) {
            cont2020.push(containers[i])
        }
        else if (date === 2021) {
            cont2021.push(containers[i])

        }
        else if (date === 2022) {
            cont2022.push(containers[i])

        }
        else if (date === 2023) {
            cont2023.push(containers[i])

        }
    }

    const data2020 = getMonthContainerCount(cont2020)
    const data2021 = getMonthContainerCount(cont2021)
    const data2022 = getMonthContainerCount(cont2022)


    const buyData = {
        labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        datasets: [
            {
                backgroundColor: "transparent",
                borderColor: "#13c9ca",
                data: data2020,
                lineTension: 0.4,
            },
            {
                backgroundColor: "transparent",
                borderColor: "#a5a5a5",
                data: data2021,
                lineTension: 0.4,
            },
            {
                backgroundColor: "transparent",
                borderColor: "#ff8084",
                data: data2022,
                lineTension: 0.4,
            },
        ],
    };

    return buyData

}

export const getMonthlyProfit = () => {

    return {
        2020: {
            june: 1000,
            july: 1000,
            august: 1000,
            september: 750,
            october: 750,
            november: 800,
            december: 1300,
        },
        2021: {
            january: 1300,
            febuary: 1400,
            march: 1300,
            april: 1500,
            may: 1500,
            june: 2000,
            july: 2000,
            augues: 1500,
            september: 3000,
            october: 2000,
            november: 2000,
            december: 3000,
        },
        2022: {
            january: 3000,
            febuary: 2200,
            march: 2500,
            april: 2500,
            may: 2200,
            june: 3000,
            july: 2500,
            augues: 3100,
            september: 2200,
            october: 2400,
            november: 2500,
            december: 2700,
        }
    }

}


export const addClient = async (body) => {
    try {
        const response = await instance.post('/clients/', body);
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('Something went wrong');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}

export const addContainer = async (body) => {
    try {
        const response = await instance.post('/containers/', body);
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('Something went wrong');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}


export const updateClient = async (body) => {
    try {
        console.log({ body })
        const response = await instance.post('/clients/updateClient', body);
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('Something went wrong');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}

export const updateContainer = async (body) => {
    try {
        console.log({ body })
        const response = await instance.post('/containers/updateContainer', body);
        return {
            status: true
        }
    } catch (error) {
        if (error.response.status === 404) {
            console.log('Something went wrong');
        } else {
            console.log(error);
        }
        return {
            status: false
        }
    }
}