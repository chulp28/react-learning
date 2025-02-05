import './Login.css';

function Login() {
  function onSubmit(event) {
    console.log({
      username: event.target.username.value,
      password: event.target.password.value,
    });
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <label>
        Username: <input type="text" name="username" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <button type="submit"> Login </button>
    </form>
  );
}

export default Login;
