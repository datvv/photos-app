import { createApi } from "unsplash-js";

export const baseApi = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_TOKEN,
});
