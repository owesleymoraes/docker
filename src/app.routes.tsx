import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form";
import { SubmitForm } from "./pages/SubmitForm";

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/newPage" element={<SubmitForm />} />
      </Routes>
    </BrowserRouter>
  );
};
