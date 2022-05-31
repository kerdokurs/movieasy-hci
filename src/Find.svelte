<script lang="ts">
  import Header from './Header.svelte';
  import stage, { Stage } from './stage';

  const names = [
    'Andry',
    'Thomas',
    'Jack',
    'Marylin',
    'Anna',
    'Jaanika',
    'Nicky',
    'James',
    'Ross',
    'Matt',
    'Timur',
    'Jommu',
    'Mick',
    'Taavi',
    'Norman',
  ];

  let searchTerm: string = '';

  let shownNames: string[];
  $: shownNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let selectedNames: string[] = [];

  const toggleFriend = (name: string) => {
    if (selectedNames.indexOf(name) !== -1) {
      selectedNames = [...selectedNames.filter((n) => n !== name)];
    } else {
      selectedNames = [...selectedNames, name];
    }
  };

  const back = () => {
    stage.set(Stage.HOME);
  };
</script>

<main class="find">
  <Header />

  <h1>Find new friends</h1>
  <p>Find yourself partners to watch movies together with.</p>

  <div>
    <span>Filter by name: </span>
    <input type="text" bind:value={searchTerm} placeholder="Type here" />
  </div>

  <div class="new-friend-list">
    {#each shownNames as name, i (i)}
      <div class="new-friend">
        <div class="material-icons account-icon">account_circle</div>
        <div class="new-friend-info">
          <div class="new-friend-info-info">
            <span class="bold">{name}</span>
            <span>{name}'s bio</span>

            <!-- <span class="underline">See full profile</span> -->
          </div>

          {#if selectedNames.indexOf(name) === -1}
            <div
              class="material-icons pr-1"
              on:click={() => toggleFriend(name)}
            >
              person_add
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <div class="btn-d">
    <button class="button" on:click={back}>GO BACK</button>
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

  .new-friend-list {
    margin-top: 1rem;
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
