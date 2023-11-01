const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
  postId: number
  id: number,
  name: string,
  body: string,
  email: string
}

const getData = async (url: string): Promise<IComment[]> => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
}

getData(COMMENTS_URL)
  .then(data => {
    const res = data.map(item => {
      return {
        ID: item.id,
        Email: item.email
      }
    });
    console.log(res);
  })