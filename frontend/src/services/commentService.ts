import axios, {AxiosResponse} from "axios";
import {CommentDto, CommentDtoWithoutId} from "@/types/comment/commentDto";

const API_BASE_URL = 'http://localhost:8080/comments';

export const createComment = async (noteId: number, comment: CommentDtoWithoutId): Promise<CommentDtoWithoutId> => {
    try {
        const response: AxiosResponse<CommentDtoWithoutId> = await axios.post(`${API_BASE_URL}/${noteId}`, comment);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getComments = async (): Promise<CommentDto[]> => {
    try {
        const response: AxiosResponse<CommentDto[]> = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCommentById = async (id: number): Promise<CommentDto> => {
    try {
        const response: AxiosResponse<CommentDto> = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCommentsByNoteId = async (noteId: number): Promise<CommentDto[]> => {
    try {
        const response: AxiosResponse<CommentDto[]> = await axios.get(`${API_BASE_URL}/note/${noteId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteComment = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
};

export const updateComment = async (id: number, updatedComment: CommentDtoWithoutId): Promise<CommentDtoWithoutId> => {
    try {
        const response: AxiosResponse<CommentDtoWithoutId> = await axios.put(`${API_BASE_URL}/${id}`, updatedComment);
        return response.data;
    } catch (error) {
        throw error;
    }
};