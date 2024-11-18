import './App.scss';
import './style/style.scss'
import { Provider, useDispatch, useSelector } from 'react-redux';
import  store  from './redux/store';
import AppRouter from './routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import {Layout} from './views/layout/layout'

// import { LayoutProvider } from './views/layout/context/layoutcontext';
// import { PrimeReactProvider } from 'primereact/api';
// import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';
// import './styles/layout/layout.scss';
// import './styles/demo/Demos.scss';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';              
import 'primeicons/primeicons.css';                      
import 'primeflex/primeflex.css';       




const  App = () => {
  return (
    <Provider store={store()}>
        <AppRouter />
         {/* <Layout />; */}
    </Provider>
    // <PrimeReactProvider>
    // <LayoutProvider></LayoutProvider>
    // </PrimeReactProvider>
  );
}

export default App;