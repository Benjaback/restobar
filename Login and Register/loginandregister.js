const contenedor = document.getElementById('contenedor');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
    contenedor.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    contenedor.classList.remove("active");
});
