"use client";

import { useState } from "react";
import css from "./NoteForm.module.css";

interface Props {
    onSubmit: (title: string, content: string) => void;
}

export default function NoteForm({ onSubmit }: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.input}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className={css.textarea}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button type="submit">Create</button>
        </form>
    );
}
