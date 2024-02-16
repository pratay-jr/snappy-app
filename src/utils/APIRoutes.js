export const host = "https://snappy-db.onrender.com";
//Represents the endpoint for user registration
export const registerRoute = `${host}/api/auth/register`;
// Represents the endpoint for user login
export const loginRoute = `${host}/api/auth/login`;
// Represents the endpoint for user logout
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
// Represents the endpoint for setting the user's avatar.
export const setAvatarRoute = `${host}/api/auth/setavatar`;
