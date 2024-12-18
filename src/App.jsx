import "./app.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { postsData } from "./data";
import { Ad } from "./components/Ad";

function App() {
  return (
    <div className="body">
      <Header />
      <Ad />
      <div className="bdy">
        <Posts postsData={postsData} />
      </div>
    </div>
  );
}

export default App;
