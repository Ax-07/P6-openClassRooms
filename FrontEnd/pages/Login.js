import { Navbar } from '../components/Navbar.js';
import { LoginForm } from '../components/logs/LoginForm.js';

const Login = () => {
    LoginForm();
    Navbar();
}
window.onload = Login;