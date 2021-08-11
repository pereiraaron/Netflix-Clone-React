import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
// import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Route exact path="/profile" component={ProfileScreen} /> */}
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Router>
    </div>
  );
};

export default App;
