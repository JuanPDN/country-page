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