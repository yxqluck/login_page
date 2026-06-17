const USERNAME = 'admin';
const PASSWORD = '123';

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const messageDiv = document.getElementById('message');
const togglePassword = document.getElementById('togglePassword');

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message show ${type}`;
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 3000);
}

function togglePasswordVisibility() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

async function handleLogin(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!username || !password) {
        showMessage('请输入账号和密码', 'error');
        return;
    }
    
    loginBtn.disabled = true;
    loginBtn.classList.add('loading');
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (username === USERNAME && password === PASSWORD) {
        showMessage('登录成功！欢迎回来', 'success');
        usernameInput.value = '';
        passwordInput.value = '';
    } else {
        showMessage('账号或密码错误，请重试', 'error');
    }
    
    loginBtn.disabled = false;
    loginBtn.classList.remove('loading');
}

loginForm.addEventListener('submit', handleLogin);
togglePassword.addEventListener('click', togglePasswordVisibility);

passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleLogin(e);
    }
});
