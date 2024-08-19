import apiSlice from "./api-slice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // === get all users ===
    getAllUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["USERS"] as any,
    }),

    // === get user by email ===
    getUserByEmail: builder.query({
      query: ({ email }) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
      providesTags: ["SINGLE_USER"] as any,
    }),

    // === get user by username ===
    getUserByUsername: builder.query({
      query: ({ username }) => ({
        url: `/users/username/${username}`,
        method: "GET",
      }),
      providesTags: ["SINGLE_USER"] as any,
    }),

    // === check available username ===
    checkUsernameAvailability: builder.query({
      query: ({ username }) => ({
        url: `/users/check-username/${username}`,
        method: "GET",
      }),
    }),

    // === create user ===
    createUser: builder.mutation({
      query: ({ payload }) => ({
        url: `/users/create-new`,
        method: "POST",
        body: payload,
      }),
    }),

    // === upate user ===
    updateUser: builder.mutation({
      query: ({ payload, userId }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["SINGLE_USER"] as any,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByEmailQuery,
  useGetUserByUsernameQuery,
  useCheckUsernameAvailabilityQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
