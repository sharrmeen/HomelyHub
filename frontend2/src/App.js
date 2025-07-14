// import "./App.css";

// //Importing necessary components amd functions from the react-router-dom library for routing.
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import Main from "./Components/Home/Main";
// import PropertyList from "./Components/Home/PropertyList";
// import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
// import Login from "./Components/User/Login";
// import { Flip, flip, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { useDispatch, UseDispatch, useSelector } from "react-redux";
// import { currentUser } from "./Store/User/user-action";
// import { userActions } from "./Store/User/user-slice";
// import Signup from "./Components/User/Signup";
// import Profile from "./Components/User/Profile";
// import EditProfile from "./Components/User/EditProfile";
// import UpdatePassword from "./Components/User/UpdatePassword";
// import ForgotPassword from "./Components/User/ForgotPassword";
// import ResetPassword from "./Components/User/ResetPassword";
// import Payment from "./Components/Payment/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import MyBookings from "./Components/Mybookings/MyBookings";
// import BookingDetails from "./Components/Mybookings/BookingDetails";

// import AccomodationForm from "./Components/Accomodation/AccomodationForm";
// import Accomodation from "./Components/Accomodation/Accomodation";

// function App() {
//   const stripePromise = loadStripe(
//     "pk_test_51P0jhYDCRwok2d5jNZLA8U8AjxWEra1sbSSI8zRn00iKQI94Kvv3jEdvaUFvH0J56o9w3CwhzCo18FsDuqcAuu8b00hxgqWsIh"
//   );
//   const dispatch = useDispatch();
//   const { errors } = useSelector((state) => state.user);
//   useEffect(() => {
//     if (errors) {
//       dispatch(userActions.clearError());
//     }
//     dispatch(currentUser());
//   }, [errors, dispatch]);
//   //mananges the routing configuration for the application.
//   const router = createBrowserRouter(
//     // creates routes from the elements passed to it.
//     createRoutesFromElements(
//       //defines a Route component that matches all paths "/" and renders the Main component.
//       //exact properties ensure that the route matches exactly what u gave in path
//       <Route path="/" element={<Main />} id="main" exact>
//         <Route id="home" index element={<PropertyList />} exact />
//         <Route
//           element={<PropertyDetails />}
//           id="PropertyDetails"
//           path="propertylist/:id"
//           exact
//         />
//         <Route id="login" path="login" element={<Login />} />
//         <Route id="signup" path="signup" element={<Signup />} />
//         <Route id="profile" path="profile" element={<Profile />} />
//         <Route
//           id="editprofile"
//           path="user/editprofile"
//           element={<EditProfile />}
//         />
//         <Route
//           id="updatepassword"
//           path="user/updatepassword"
//           element={<UpdatePassword />}
//         />
//         <Route
//           id="forgotpassword"
//           path="user/forgotpassword"
//           element={<ForgotPassword />}
//         />
//         <Route
//           id="resetpassword"
//           path="user/resetPassword/:token"
//           element={<ResetPassword />}
//         />
//         <Route
//           id="payment"
//           path="payment/:propertyId"
//           element={
//             <Elements stripe={stripePromise}>
//               <Payment />
//             </Elements>
//           }
//         />
//         <Route id="mybookings" path="user/booking" element={<MyBookings />} />
//         <Route
//           id="bookingdetails"
//           path="user/booking/:bookingId"
//           element={<BookingDetails />}
//         />

//         {/*accomodation*/}
//         <Route
//           id="accomodation"
//           path="accommodation"
//           element={<Accomodation />}
//         />

//         <Route
//           id="accomodationForm"
//           path="accomodationForm"
//           element={<AccomodationForm />}
//         />
//       </Route>
//     )
//   );
//   return (
//     <div className="App">
//       {/* This ensures that the rounting functionallity is available throughout the application */}
//       <RouterProvider router={router} />
//       <ToastContainer
//         position="bottom-center"
//         autoClose={3000}
//         draggable={true}
//         transition={Flip}
//       />
//     </div>
//   );
// }

// export default App;


import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "./Components/Home/Main";
import PropertyList from "./Components/Home/PropertyList";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import Login from "./Components/User/Login";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./Store/User/user-action";
import { userActions } from "./Store/User/user-slice";
import Signup from "./Components/User/Signup";
import Profile from "./Components/User/Profile";
import EditProfile from "./Components/User/EditProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import Payment from "./Components/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyBookings from "./Components/Mybookings/MyBookings";
import BookingDetails from "./Components/Mybookings/BookingDetails";
import AccomodationForm from "./Components/Accomodation/AccomodationForm";
import Accomodation from "./Components/Accomodation/Accomodation";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51P0jhYDCRwok2d5jNZLA8U8AjxWEra1sbSSI8zRn00iKQI94Kvv3jEdvaUFvH0J56o9w3CwhzCo18FsDuqcAuu8b00hxgqWsIh"
  );

  const dispatch = useDispatch();
  const { errors, user } = useSelector((state) => state.user);

  // Only fetch current user once on initial load
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  // Clear errors separately
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearError());
    }
  }, [errors, dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} id="main">
        <Route index element={<PropertyList />} />
        <Route path="propertylist/:id" element={<PropertyDetails />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="user/editprofile"
          element={user ? <EditProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="user/updatepassword"
          element={user ? <UpdatePassword /> : <Navigate to="/login" />}
        />
        <Route
          path="user/booking"
          element={user ? <MyBookings /> : <Navigate to="/login" />}
        />
        <Route
          path="user/booking/:bookingId"
          element={user ? <BookingDetails /> : <Navigate to="/login" />}
        />

        <Route path="user/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="user/resetPassword/:token"
          element={<ResetPassword />}
        />

        <Route
          path="payment/:propertyId"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />

        {/* Accomodation */}
        <Route path="accommodation" element={<Accomodation />} />
        <Route path="accomodationForm" element={<AccomodationForm />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable
        transition={Flip}
      />
    </div>
  );
}

export default App;



