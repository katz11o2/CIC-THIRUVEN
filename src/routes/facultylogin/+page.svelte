<script>
    import { goto } from '$app/navigation';
    import { writable } from 'svelte/store';
  
    let username = '';
    let password = '';
    let errorMessage = writable('');
  
    function login() {
      if (username === '321' && password === '321') {
        goto('/table');
      } else {
        errorMessage.set('Invalid username or password');
      }
    }
  </script>
  
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #6a11cb, #2575fc, #ff6b6b, #ffcc00);
      font-family: 'Poppins', sans-serif;
      margin: 0;
    }
    .login-container {
      background: rgba(129, 61, 170, 0.2);
      padding: 2rem;
      border-radius: 15px;
      position: relative;
      top: 100px;
      left: 470px;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(20px);
      text-align: center;
      animation: fadeIn 1s ease-in-out;
      width: 90%;
      max-width: 400px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    h2 {
      color: rgb(46, 0, 0);
      font-size: 1.8rem;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 12px;
      margin: 12px 0;
      border: none;
      border-radius: 10px;
      outline: none;
      background: rgba(255, 255, 255, 0.3);
      color: rgb(0, 0, 0);
      font-size: 1rem;
      transition: 0.3s;
    }
    input::placeholder {
      color: rgba(30, 5, 5, 0.8);
    }
    input:focus {
      background: rgba(255, 255, 255, 0.5);
    }
    button {
      width: 100%;
      padding: 12px;
      background: linear-gradient(to right, #ff6b6b, #ffcc00);
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;
      font-size: 1rem;
      font-weight: 600;
    }
    button:hover {
      background: linear-gradient(to right, #ffcc00, #ff6b6b);
      transform: scale(1.05);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 400px) {
      .login-container {
        padding: 1.5rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      input, button {
        font-size: 1rem;
      }
    }
  </style>
  
  <div class="login-container">
    <h2>Login</h2>
    <input type="text" placeholder="Username" bind:value={username} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button on:click={login}>Login</button>
    {#if $errorMessage}
      <p style="color: red;">{$errorMessage}</p>
    {/if}
  </div>
  