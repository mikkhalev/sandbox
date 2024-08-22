import './css/reset.scss'
import './css/general.scss'
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { BrowserRouter as Router} from 'react-router-dom';
import store from "../src/components/redux/store";
import {Provider} from "react-redux";

function App() {
    let pages = [
        {link: '/excel', title: 'Excel',                 image: '', border: false},
        {link: '/to-do', title: 'To Do',                 image: '', border: false},
        {link: '/calculator', title: 'Калькулятор',      image: '', border: false},
    ]
  return (
      <Router>
          <Provider store={store}>
              <div className="App">
                  <Sidebar pages={pages}/>
                  <Header />
                  <Main pages={pages}/>
              </div>
          </Provider>
      </Router>
  );
}

export default App;
