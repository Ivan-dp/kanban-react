import "./App.scss";
import { MyRoutes, Sidebar } from "./components";
function App() {
    return (
        <div className="App">
            <Sidebar />
            <MyRoutes />
        </div>
    );
}

export default App;
