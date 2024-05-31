import { Countries } from "../interfaces/interfaces";

export const loadAllCountries = async (): Promise<Countries[]> => {
    try {
        const data: Countries[] = await fetch("https://restcountries.com/v3.1/all")
            .then((data) => data.json())
        return data;
    } catch (error) {
        console.error(error)
        throw (error)
    }

};

export const orderByPopulation = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => b.population - a.population)
}

export const orderByname = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => a.name.common.localeCompare(b.name.common))
}

export const orderByArea = (data: Countries[]) => {
    data.sort((a: Countries, b: Countries) => a.area - b.area)
}
