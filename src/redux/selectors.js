export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectAuth = state => state.auth;
export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserName = state => state.auth.user.name
