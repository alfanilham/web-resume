import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Set from "./pages/Set";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="set" element={<Set />} />
    </Routes>
  );
}
