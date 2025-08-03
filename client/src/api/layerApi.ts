import axios from 'axios';
import { type Layer } from '../types/Layer';

const BASE_URL = 'http://localhost:4000';

export const getLayers = async (): Promise<Layer[]> => {
    const res = await axios.get(`${BASE_URL}/layers`);
    return res.data;
};

export const toggleLayerVisibility = async (id: string): Promise<Layer> => {
    const res = await axios.put(`${BASE_URL}/layers/${id}/toggleVisibility`);
    return res.data;
};
