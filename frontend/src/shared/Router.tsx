import MainPage from "../pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import DocumentsPage from "../pages/DocumentsPage/DocumentsPage";
import AllEmployees from "../pages/AllEmployees/AllEmployees";
import AboutEmployee from "../pages/AboutEmployee/AboutEmployee";
import UniversalPage from "../pages/UniversalPage/UniversalPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import PostPage from "../pages/PostPage/PostPage";
import CivilService from "../pages/CivilService/CivilService";
import ONSPage from "../pages/ONS/ONSPage";

interface AppRoute {
  title: string;
  url: string;
  page: React.FC;
}

const routes: AppRoute[] = [
  { title: "Main page", url: "/", page: MainPage },
  { title: "Documents page", url: "/documents/:category", page: DocumentsPage },
  {
    title: "Documents page",
    url: "/documents/civil_service",
    page: CivilService,
  },
  { title: "All employees page", url: "/employees", page: AllEmployees },
  { title: "About employee", url: "/employees/:id", page: AboutEmployee },
  { title: "Page", url: "/page/:id", page: UniversalPage },
  { title: "Posts", url: "/posts/:category", page: PostsPage },
  { title: "Post", url: "/posts/:category/:id", page: PostPage },
  { title: "ONS", url: "/ons", page: ONSPage },
];

const Router: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.url} path={route.url} element={<route.page />} />
      ))}
    </Routes>
  );
};

export default Router;
