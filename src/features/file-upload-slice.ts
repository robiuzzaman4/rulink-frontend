import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const fileUploadApi = createApi({
  reducerPath: "fileUploadApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.imgbb.com/1" }),
  endpoints: (builder) => ({
    // === upload a file ===
    uploadFile: builder.mutation({
      query: ({ file, apikey }) => ({
        url: `/upload?key=${apikey}`,
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = fileUploadApi;

export default fileUploadApi;
