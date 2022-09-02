import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameList from "views/children/GameList";
import Public from "views/layouts/Public";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="games" element={<GameList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
