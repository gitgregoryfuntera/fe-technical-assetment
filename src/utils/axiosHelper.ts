import axios from "axios";

export const getMethod = (url: string) =>
  axios.get(url).then((res) => res.data);

export const postMethod = (url: string, { arg }: { arg: Object }) =>
  axios
    .post(url, {
      ...arg,
    })
    .then((res) => res.data);
