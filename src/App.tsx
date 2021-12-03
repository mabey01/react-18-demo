import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainContent } from "./main/main-content";
import { Sidebar } from "./sidebar/sidebar";
import { Search } from "./pages/search";
import { Navigation } from "./navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <MainLayout className="bg-primary text-gray-700">
        <nav className="bg-white text-gray-600">
          <div className="sticky top-0">
            <Navigation />
          </div>
        </nav>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>

        <aside className="p-8">
          <Sidebar />
        </aside>
      </MainLayout>
    </BrowserRouter>
  );
}

const MainLayout = styled.div`
  display: grid;

  grid-template-columns: 350px 1fr 300px;
  min-height: 100vh;

  @media (max-width: 1024px) {
    grid-template-columns: 250px 1fr 0px;
  }
`;

export default App;
