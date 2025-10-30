import { axiosConfig } from "../configurations/axiosConfig";

export const ObtenerGrades = () => {
    return axiosConfig.get('/grades', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}