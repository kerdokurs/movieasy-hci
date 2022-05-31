<script lang="ts">
  import { groupGenres, groupNames } from './group';
  import Header from './Header.svelte';

  import stage, { Stage } from './stage';

  const names = ['Timur', 'Jommu', 'Mick', 'Taavi', 'Norman'];
  const favGenres = ['Action', 'Sci-Fi', 'Comedy', 'Action', 'Romance'];

  let selectedNames: string[] = [];

  const toggleFriend = (name: string) => {
    if (selectedNames.indexOf(name) !== -1) {
      selectedNames = [...selectedNames.filter((n) => n !== name)];
    } else {
      selectedNames = [...selectedNames, name];
    }
  };

  const create = () => {
    const names = [...selectedNames];
    const genres = [];
    for (let i = 0; i < favGenres.length; i++) {
      const genre = favGenres[i];
      if (selectedNames.includes(names[i])) {
        genres.push(genre);
      }
    }

    groupNames.set(names);
    groupGenres.set(genres);

    stage.set(Stage.GROUP);
  };
</script>

<main class="invite">
  <Header />
  <h1>Create a group</h1>
  <p>Invite up to 10 friends to a group.</p>

  <div class="new-friend-list">
    {#each names as name, i (i)}
      <div class="new-friend">
        <div class="material-icons account-icon">account_circle</div>
        <div class="new-friend-info">
          <div class="new-friend-info-info">
            <span class="bold">{name}</span>
            <span>Favourite genre: {favGenres[i]}</span>

            <!-- <span class="underline">See full profile</span> -->
          </div>

          <input
            type="checkbox"
            checked={selectedNames.indexOf(name) !== -1}
            on:change={() => toggleFriend(name)}
          />
        </div>
      </div>
    {/each}
  </div>

  <div class="btn-d">
    <button class="button" on:click={create}>Create group</button>
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
