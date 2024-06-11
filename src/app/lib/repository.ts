import dotenv from "dotenv"

import { Countries } from "@/app/interfaces/interfaces";

dotenv.config()
const api_url = process.env.API_URL



export const loadAllCountries = async (): Promise<Countries[]> => {
    try {
        if (!api_url) {
            return []
        }
        const data: Countries[] = await fetch(`${api_url}/api/countries`)
            .then((data) => data.json())
        return data;
    } catch (error) {
        console.error(error)
        throw (error)
    }

};

export const country = async (id: string): Promise<Countries | any> => {
    try {
        if (!api_url) {
            return null
        }
        const data: Countries[] = await fetch(`${api_url}/api/countries/${id}`)
            .then((data) => data.json())
        return data[0];
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
