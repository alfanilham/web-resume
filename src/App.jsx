import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
