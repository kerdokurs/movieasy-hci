<script lang="ts">
  import Find from './Find.svelte';

  import stage, { Stage } from './stage';

  import username from './username';
</script>

<main class="home">
  <h1>Good evening, {$username}!</h1>

  <button class="button" on:click={() => stage.set(Stage.FIND)}
    >Find new friends</button
  >
  <button class="button" on:click={() => stage.set(Stage.CREATE_GROUP)}
    >Create a group</button
  >
  <button class="button" on:click={() => stage.set(Stage.FRIEND_REQUESTS)}>
    Friend requests
  </button>
</main>

<style type="text/postcss">
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

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
