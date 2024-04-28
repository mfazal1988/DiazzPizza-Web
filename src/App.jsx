import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/layout';
import AppRoutes from "./routes";
import { store } from './store';
import { Provider } from "react-redux";
// import './css/bootstrap.min.css';
// import $ from 'jquery';
// import './js/common.js';
// import './js/combined.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
