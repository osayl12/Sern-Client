import {backURL} from "../../vars.jsx";
const section = "LG";


async function GetAllLangs() {
    let url=`${backURL}/${section}/List`;
    console.log(url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export{
    GetAllLangs,
}