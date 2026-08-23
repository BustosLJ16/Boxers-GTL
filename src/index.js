import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/Styles/app.css'
// Dependencias de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
