
type NoteDto = {
    id: number | undefined;
    title: string | undefined;
    content: string | undefined;
}

type NoteDtoWithoutId = {
    title: string | undefined;
    content: string | undefined;
}

export type {NoteDto, NoteDtoWithoutId};