<script lang="ts">
  import { match, movie } from './movie';
  import stage, { Stage } from './stage';

  const icons = ['bloodtype', 'computer', 'view_agenda', 'people', 'pets'];
  const matches = [98, 92, 86, 84, 75];

  const select = (i: number) => {
    movie.set(i);
    match.set(matches[i]);

    stage.set(Stage.MOVIE_INFO);
  };
</script>

<main class="suggestions">
  <h1>Movie suggestions</h1>
  <p>
    These are the movies with the highest match for the group. Now select which
    film the group would like to watch.
  </p>

  <div class="new-friend-list">
    {#each icons as name, i (i)}
      <div class="new-friend" on:click={() => select(i)}>
        <div class="material-icons account-icon">{name}</div>
        <div class="new-friend-info">
          <div class="new-friend-info-info">
            <span class="bold">Movie {i + 1}</span>
            <span>Match: {matches[i]}%</span>

            <span class="underline">More</span>
          </div>

          <div class="material-icons pr-1">chevron_right</div>
        </div>
      </div>
    {/each}
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
    height: 100%;
    padding: 0.4rem;
    font-size: 0.8rem;

    background-color: #fff1d7b2;
  }

  .account-icon {
    width: 4.4rem;
    height: 4.4rem;
    font-size: 3.2rem;

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

  .underline {
    text-decoration: underline;
  }
</style>
