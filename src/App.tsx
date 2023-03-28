import { ConfigProvider, theme } from "antd";

import "antd/dist/reset.css";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import { fetchCountriesData } from "./store/countries-slice";
import { useAppDispatch, useAppSelector } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from "./pages/Countries/Country-detail/CountryDetail";
import Countries from "./pages/Countries/Countries";

function App() {
  const dispatch = useAppDispatch();
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const isDarkMode = useAppSelector((state) => state.themes.theme);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <Countries /> },
        { path: "country/:name", element: <CountryDetail /> },
      ],
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "rgba(34,193,195,1)",
        },
      }}
    >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  );
}

export default App;
