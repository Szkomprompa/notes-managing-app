type CommentDto = {
    id: number;
    content: string;
}

type CommentDtoWithoutId = {
    content: string;
}

export type {CommentDto, CommentDtoWithoutId};