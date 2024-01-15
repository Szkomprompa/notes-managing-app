import {NoteDto, NoteDtoWithoutId} from "@/types/note/noteTypes";
import axios, {AxiosResponse} from "axios";

const API_BASE_URL = 'http://localhost:8080/notes';

export const createNote = async (note: NoteDtoWithoutId): Promise<NoteDtoWithoutId> => {
    try {
        const response: AxiosResponse<NoteDtoWithoutId> = await axios.post(API_BASE_URL, note);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNotes = async (): Promise<NoteDto[]> => {
    try {
        const response: AxiosResponse<NoteDto[]> = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNoteById = async (id: number): Promise<NoteDto> => {
    try {
        const response: AxiosResponse<NoteDto> = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteNote = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
};

export const updateNote = async (id: number, updatedNote: NoteDto): Promise<NoteDto> => {
    try {
        const response: AxiosResponse<NoteDto> = await axios.put(`${API_BASE_URL}/${id}`, updatedNote);
        return response.data;
    } catch (error) {
        throw error;
    }
};
