import api from '../api/axios';
import { Questions } from '../types/questionsTypes';


export const getQuestions = async (): Promise<Questions[]> => {
    try {
        const response = await api.get('/getQuestions');
        return response.data;
    } catch (error) {
        console.error('Questions Error', error);
        throw error;
    }
};