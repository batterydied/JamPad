export interface NoteProps {
    title: string;
    content: string;
    id: number;
    del: () => void;
}

export interface NoteInputProps {
    addNote: (note: NoteProps) => void;
    deleteNote: (id: number) => void;
}

export interface DeleteBtnProps{
    del: () => void;
}
