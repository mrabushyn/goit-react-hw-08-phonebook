// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://638ec7284ddca317d7e5fbf1.mockapi.io/contacts',
//   }),
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => ({
//         url: '/contacts',
//         method: 'GET',
//       }),
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetContactsQuery } = contactsApi