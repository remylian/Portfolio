import { Route, Routes } from "react-router-dom";

import AppLayout from "../AppLayout";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import NotFoundPage from "../../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
