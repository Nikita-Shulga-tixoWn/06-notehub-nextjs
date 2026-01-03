"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function NotesClient() {
    const [search, setSearch] = useState("");

    const { data, isLoading, error } = useQuery({
        queryKey: ["notes", search],
        queryFn: () => fetchNotes(search),
    });

    if (isLoading) return <p>Loading, please wait...</p>;
    if (error) return <p>Something went wrong.</p>;

    return (
        <>
            <SearchBox value={search} onChange={setSearch} />
            <NoteList notes={data ?? []} />
        </>
    );
}
