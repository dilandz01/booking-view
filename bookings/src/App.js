import "./App.css";
import BookingList from "./components/BookingList";
import SearchBar from "./components/SearchBar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={<SearchBar/>} />
        <Route path="/:storeID" exact component={<BookingList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
