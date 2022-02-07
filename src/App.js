import './App.css';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

