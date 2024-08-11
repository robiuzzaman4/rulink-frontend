import apiSlice from "./api-slice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // === get all users ===
    getAllUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
    }),

    // === get user by email ===
    getUserByEmail: builder.query({
      query: ({email}) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
    }),

    // === check available username ===
    checkUsernameAvailability: builder.query({
      query: ({username}) => ({
        url: `/users/check-username/${username}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByEmailQuery,
  useCheckUsernameAvailabilityQuery,
} = userApi;
