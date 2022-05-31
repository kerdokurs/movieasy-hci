<script>
  import stage, { Stage } from './stage';
</script>

<main class="finish">
  <h1>THANKS</h1>
  <p>Thank you for leaving a review!</p>
  <p>
    Don’t forget to tell your friends to leave a review too! It will greatly
    increase the match of the next movie you guys will watch together!
  </p>

  <div class="btn-d">
    <button class="button" on:click={() => stage.set(Stage.CREATE_GROUP)}
      >Watch another one?</button
    >
    <button class="button" on:click={() => stage.set(Stage.HOME)}
      >Back home</button
    >
  </div>
</main>

<style>
  .btn-d {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
  }

  .button {
    box-sizing: border-box;

    width: 300px;
    height: 48px;

    background: rgba(255, 241, 215, 0.8);
    border: 1px solid #000000;
  }
</style>
