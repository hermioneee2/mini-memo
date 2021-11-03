import Header from "./components/Header";
import PostIt from "./components/PostIt";
import List from "./components/List";
import AddMemo from "./components/AddMemo";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddMemo />
      <PostIt />
    </div>
  );
};

export default App;
