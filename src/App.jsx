import { WebsiteList } from "./Component/WebsiteList";
import { WebsiteForm } from "./Component/WebsiteForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<WebsiteList />} />
          <Route path="add" element={<WebsiteForm />} />
          <Route path="edit/:id" element={<WebsiteForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
