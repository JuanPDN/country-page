import dotenv from "dotenv"

import { Countries } from "@/app/interfaces/interfaces";

dotenv.config()
const api_url = process.env.API_URL



export const loadAllCountries = async (): Promise<Countries[]> => {
    try {
        if (!api_url) {
            return []
        }
        const data: Countries[] = await fetch(`${api_url}`)
            .then((data) => data.json())
        return data;
    } catch (error) {
        console.error(error)
        throw (error)
    }

};

export const allNeighbours = async (neighbour: string[]) => {
    const neighboursData = await Promise.all(
        neighbour.map((country) => {
            return fetch(`${api_url}/${country}`).then(
                async (response) => {
                    const data = await response.json();
                    return data;
                }
            );
        })
    );
    return neighboursData;
}

export const country = async (id: string): Promise<Countries | any> => {
    try {
        if (!api_url) {
            return null
        }
        const data = await fetch(`${api_url}/${id}`)
            .then((data) => data.json())
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const orderByPopulation = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => b.population - a.population)
}
const orderByname = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => a.name.common.localeCompare(b.name.common))
}

const orderByArea = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => b.area - a.area)
}

export const orderBy = (param: string, data: Countries[]) => {
    switch (param) {
        case "name":
            return orderByname(data);
        case "population":
            return orderByPopulation(data);
        case "area":
            return orderByArea(data);
        default:
            return orderByPopulation(data)
    }
}
