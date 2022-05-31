<script>
  import backTo from './backTo';

  import stage, { Stage } from './stage';
  import usernameStore from './username';

  let usernameError: string | null = null;
  let passwordError: string | null = null;

  let username: string = '';
  let password: string = '';

  const getAction = (home: boolean) => {
    return () => {
      let errors = false;
      if (username.length == 0) {
        usernameError = 'Username is required';
        errors = true;
      } else {
        usernameError = null;
      }

      if (password.length == 0) {
        passwordError = 'Password is required';
        errors = true;
      } else {
        passwordError = null;
      }

      if (errors) {
        return;
      }

      usernameStore.set(username);

      if (home) {
        stage.set(Stage.HOME);
      } else {
        stage.set(Stage.QUESTIONS);
      }
    };
  };

  const forgorPasswd = () => {
    backTo.set(Stage.ONBOARDING);
    stage.set(Stage.NOT_IMPL);
  };
</script>

<main>
  <img src="/logo.png" alt="" class="logo" />

  <div class="form">
    <div>
      <input
        type="text"
        class="input"
        name="username"
        placeholder="Enter your username"
        bind:value={username}
      />
      {#if usernameError}
        <p class="error">{usernameError}</p>
      {/if}
    </div>

    <div>
      <input
        type="password"
        class="input"
        name="password"
        placeholder="Enter your password"
        bind:value={password}
      />
      {#if passwordError}
        <p class="error">{passwordError}</p>
      {/if}
    </div>

    <div class="rm-me">
      <input type="checkbox" /> Remember me
    </div>

    <div>
      <button class="button" on:click={getAction(true)}>SIGN IN</button><br />
      <span on:click={forgorPasswd}>Forgot password?</span>
    </div>
    <button class="button" on:click={getAction(false)}>SIGN UP</button>
  </div>
</main>

<style type="text/postcss">
  :global(body) {
    background-image: url('/bg1.png');
  }

  .logo {
    @apply w-full;
  }

  .form {
    @apply w-full;
    @apply relative;
    @apply h-full;
    @apply flex flex-col;
    @apply items-center;
    @apply gap-4;

    transform: translateY(-10%);
  }

  .input {
    box-sizing: border-box;

    width: 300px;
    height: 48px;
    background: rgba(255, 241, 215, 0.5);
    border: 1px solid #000000;
    border-radius: 66px;
    padding: 0.5em;
    text-align: center;
  }

  .button {
    box-sizing: border-box;

    width: 300px;
    height: 48px;

    background: rgba(255, 241, 215, 0.8);
    border: 1px solid #000000;
  }

  .rm-me {
    width: 300px;
    text-align: left;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }
</style>
