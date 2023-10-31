interface IPost {
    id: string;
    title: string;
    body: string;
}
declare const posts: IPost[];
interface NormalizePost {
    [id: string]: IPost;
}
declare const normalizeData: (unnormalizedData: IPost[]) => {
    byId: NormalizePost;
    allIds: string[];
};
