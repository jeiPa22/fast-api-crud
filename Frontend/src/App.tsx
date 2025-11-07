import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ListaUsuarios from "./components/ListaUsuarios";
import ListaProductos from "./components/ListaProductos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<ListaProductos />} />
            <Route path="/usuarios" element={<ListaUsuarios />} />
            <Route
              path="*"
              element={<h2 style={{ textAlign: "center" }}>Página no encontrada</h2>}
            />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 Stravinsky MusicShop</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
