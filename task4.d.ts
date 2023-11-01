declare const COMMENTS_URL: string;
interface IComment {
    postId: number;
    id: number;
    name: string;
    body: string;
    email: string;
}
declare const getData: (url: string) => Promise<IComment[]>;
