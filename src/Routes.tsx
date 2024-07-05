import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Typography } from "@mui/material";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <Typography>
                so, you're probably wondering how I got here. Lets start at the
                beginning...
              </Typography>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
