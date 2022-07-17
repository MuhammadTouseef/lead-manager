import './App.css';
import Header from "./components/layout/Header";
import Dashboard from "./components/leads/Dashboard";
import {Provider} from "react-redux";
import store from "./store";
import {useAlert} from "@blaumaus/react-alert";
import Alert from "./components/layout/Alert";


function App() {

    return (
        <Provider store={store}>
            <div className="App">

            <Header/>
                <Alert/>
            <div className="container">
                <Dashboard/>
            </div>

        </div>
        </Provider>
    );
}

export default App;
