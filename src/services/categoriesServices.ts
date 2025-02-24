import api from '../api/axios';
import { CategoryResponse } from '../types/categoriesTypes';

export const getCategories = async (): Promise<CategoryResponse> => {
    try {
        const response = await api.get('/getCategories');
        return response.data;
    } catch (error) {
        console.error('category Error', error);
        throw error;
    }
};