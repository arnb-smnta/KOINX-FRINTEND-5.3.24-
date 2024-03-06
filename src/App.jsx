import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import appstore from "./reduxStore/appstore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CoinPage from "./components/CoinPage";
const App = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/coin/:coinid",
      element: <CoinPage />,
    },
  ]);

  return (
    <Provider store={appstore}>
      <div className="bg-gray-200">
        {/* change the tailwind class min-h-screen later*/}
        <RouterProvider router={approuter}></RouterProvider>
      </div>
    </Provider>
  );
};

export default App;
