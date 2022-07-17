import './App.css';
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {Provider} from "react-redux";
import store from "./store";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
            <Header/>
            <div className="container">
                <Dashboard/>
            </div>

        </div>
        </Provider>
    );
}

export default App;
