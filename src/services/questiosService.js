import { axiosConfig } from "../configurations/axiosConfig";

export const ObtenerPreguntas = () => {
    return axiosConfig.get('/questions', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
