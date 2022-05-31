<script lang="ts">
  import { onMount } from 'svelte';

  import { groupGenres, groupNames } from './group';
  import Header from './Header.svelte';
  import Invite from './Invite.svelte';

  import stage, { Stage } from './stage';

  let names: string[] = [];
  let favGenres: string[] = [];

  onMount(() => {
    const _names = $groupNames;
    const _favGenres = $groupGenres;

    names = ['You', ..._names];
    favGenres = ['Sci-Fi', ..._favGenres];
  });

  const analyze = () => {
    stage.set(Stage.ANALYZE);
  };
</script>

<main class="invite">
  <Header toStage={Stage.CREATE_GROUP} />

  <h1>Creating a group</h1>
  <p>
    You have invited {names.length - 1} other people to the group. <br /> Once everyone
    is ready, you can proceed to analyze and suggest a movie.
  </p>

  <div class="new-friend-list">
    {#each names as name, i (i)}
      <div class="new-friend">
        <div class="material-icons account-icon">account_circle</div>
        <div class="new-friend-info">
          <div class="new-friend-info-info">
            <span class="bold">{name}</span>
            <span>Favourite genre: {favGenres[i]}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="btn-d">
    <button class="button" on:click={analyze}>Analyze!</button>
  </div>
</main>

<style type="text/postcss">
  .btn-d {
    @apply mt-4;
    @apply w-full;
    @apply flex;
    @apply justify-center;
    @apply items-center;
  }

  .new-friend {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .new-friend-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.8rem;
    padding: 0.4rem;
    font-size: 0.8rem;

    background-color: #fff1d7b2;
  }

  .account-icon {
    width: 4.4rem;
    height: 4.4rem;
    font-size: 3.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffffcf;
  }

  .new-friend-info-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.4rem;
  }

  .underline {
    text-decoration: underline;
  }

  .bold {
    font-weight: bold;
  }

  .new-friend-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .pr-1 {
    padding-right: 0.5rem;
  }

  .button {
    box-sizing: border-box;

    width: 300px;
    height: 48px;

    background: rgba(255, 241, 215, 0.8);
    border: 1px solid #000000;
  }
</style>
