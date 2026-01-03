import axios from "axios";
import type { Note } from "../types/note";

const api = axios.create({
    baseURL: "https://api.notehub.app",
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
});

export const fetchNotes = async (query = ""): Promise<Note[]> => {
    const { data } = await api.get(`/notes?search=${query}`);
    return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
    const { data } = await api.get(`/notes/${id}`);
    return data;
};

export const createNote = async (note: Partial<Note>) => {
    const { data } = await api.post("/notes", note);
    return data;
};

export const deleteNote = async (id: string) => {
    await api.delete(`/notes/${id}`);
};
