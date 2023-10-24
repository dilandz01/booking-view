import "./App.css";
import BookingList from "./components/BookingList";
import SearchBar from "./components/SearchBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar/>} />
        <Route path="/:storeId" element={<BookingList/>} />
      </Routes>
    </Router>
  );
}

export default App;
