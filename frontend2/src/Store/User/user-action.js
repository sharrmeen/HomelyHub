// import axios from "../../utils/axiosInstance";
// import { userActions } from "./user-slice";



// //handle user signup
// export const getSignUp = (user) => async (dispatch) => {
//   try {
//     dispatch(userActions.getSignupRequest());
//     const { data } = await axios.post("/api/v1/rent/user/signup", user);

//     dispatch(userActions.getSignupDetails(data.user));
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// //handle user login
// export const getLogIn = (user) => async (dispatch) => {
//   try {
//     dispatch(userActions.getLoginRequest());
//     const { data } = await axios.post("/api/v1/rent/user/login", user);
//     dispatch(userActions.getLoginDetails(data.user));
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// // get current user information

// export const currentUser = () => async (dispatch) => {
//   try {
//     dispatch(userActions.getCurrentUserRequest());
//     const { data } = await axios.get("/api/v1/rent/user/me");
//     dispatch(userActions.getCurrentUser(data.user));
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// // to update user information
// export const updateUser = (updateUser) => async (dispatch) => {
//   try {
//     dispatch(userActions.getUpdateUserRequest());
//     await axios.patch("/api/v1/rent/user/updateMe", updateUser);
//     const { data } = await axios.get("/api/v1/rent/user/me");
//     dispatch(userActions.getCurrentUser(data.user));
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// //to handle forgot password

// export const forgotPassword = (email) => async (dispatch) => {
//   try {
//     await axios.post("/api/v1/rent/user/forgotPassword", { email });
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// // password reset
// export const resetPassword = (repassword, token) => async (dispatch) => {
//   try {
//     await axios.patch(`/api/v1/rent/user/resetPassword/${token}`, repassword);
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// //password update
// export const updatePassword = (passwords) => async (dispatch) => {
//   try {
//     dispatch(userActions.getPasswordRequest());
//     await axios.patch("/api/v1/rent/user/updateMyPassword", passwords);
//     dispatch(userActions.getPasswordSuccess(true));
//   } catch (error) {
//     dispatch(userActions.getError(error.response.data.message));
//   }
// };

// //user Logout
// export const Logout = () => async (dispatch) => {
//   try {
//     await axios.get("/api/v1/rent/user/logout");
//     dispatch(userActions.getLogout(null));
//   } catch (error) {
//     dispatch(userActions.getError(error));
//   }
// };


import axios from "../../utils/axiosInstance";
import { userActions } from "./user-slice";

// 🔧 Helper to extract error message safely
const getErrorMessage = (error) =>
  error?.response?.data?.message || error?.message || "Something went wrong";

// Signup
export const getSignUp = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest());
    const { data } = await axios.post("/api/v1/rent/user/signup", user);
    dispatch(userActions.getSignupDetails(data.user));
  } catch (error) {
    console.error("Signup error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Login
export const getLogIn = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getLoginRequest());
    const { data } = await axios.post("/api/v1/rent/user/login", user);
    dispatch(userActions.getLoginDetails(data.user));
  } catch (error) {
    console.error("Login error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Get current user
export const currentUser = () => async (dispatch) => {
  try {
    dispatch(userActions.getCurrentUserRequest());
    const { data } = await axios.get("/api/v1/rent/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch (error) {
    console.error("Current user fetch error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Update user
export const updateUser = (updateUser) => async (dispatch) => {
  try {
    dispatch(userActions.getUpdateUserRequest());
    await axios.patch("/api/v1/rent/user/updateMe", updateUser);
    const { data } = await axios.get("/api/v1/rent/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch (error) {
    console.error("Update user error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Forgot password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    await axios.post("/api/v1/rent/user/forgotPassword", { email });
  } catch (error) {
    console.error("Forgot password error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Reset password
export const resetPassword = (repassword, token) => async (dispatch) => {
  try {
    await axios.patch(`/api/v1/rent/user/resetPassword/${token}`, repassword);
  } catch (error) {
    console.error("Reset password error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch(userActions.getPasswordRequest());
    await axios.patch("/api/v1/rent/user/updateMyPassword", passwords);
    dispatch(userActions.getPasswordSuccess(true));
  } catch (error) {
    console.error("Update password error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// Logout
export const Logout = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/rent/user/logout");
    dispatch(userActions.getLogout(null));
  } catch (error) {
    console.error("Logout error:", error);
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};
