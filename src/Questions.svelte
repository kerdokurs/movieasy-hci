<script lang="ts">
  import stage, { Stage } from './stage';

  const genresToChooseFrom = [
    'Action',
    'Drama',
    'Horror',
    'Thriller',
    'Comedy',
    'Science Fiction',
    'Romance',
    'Western',
    'Crime',
    'Adventure',
    'Musical',
    'Documentary',
    'Animation',
    'Romantic Comedy',
    'Fantasy',
    'War',
  ];

  let selectedGenres: Record<string, boolean> = {};
  let selectedMovies: Record<number, boolean> = {};

  const movieIcons = [
    // 1
    'water',
    'nature_people',
    'family_restroom',

    // 2
    'pets',
    'accessibility',
    'ac_unit',

    // 3
    'blender',
    'architecture',
    'article',

    // 4
    'pest_control_rodent',
    'car_rental',
    'calendar_today',

    // 5
    'airplanemode_active',
    'running_with_errors',
    'rocket_launch',

    // 6
    'beach_access',
    'confirmation_number',
    'directions_car',

    // 7
    'movie',
    'bungalow',
    'hotel_class',

    // 8
    'feed',
    'cloud',
    'directions_subway',

    // 9
    'cloud_queue',
    'card_giftcard',
    'houseboat',

    // 10
    'call',
    'deblur',
    'food_bank',
  ];

  const chooseGenre = (genre: string) => {
    let isSelected = !!selectedGenres[genre];

    if (
      Object.values(selectedGenres).filter(Boolean).length >= 5 &&
      !isSelected
    ) {
      return;
    }

    if (selectedGenres[genre]) {
      selectedGenres = {
        ...selectedGenres,
        [genre]: false,
      };
    } else {
      selectedGenres = {
        ...selectedGenres,
        [genre]: true,
      };
    }
  };

  const selectMovie = (i: number, k: number) => {
    i = i * 3;
    selectedMovies = {
      ...selectedMovies,
      [i]: false,
      [i + 1]: false,
      [i + 2]: false,
      [k]: true,
    };
  };

  let error: string | null = null;
  let tryCount = 0;

  const next = () => {
    if (
      Object.values(selectedMovies).filter(Boolean).length < 10 &&
      tryCount == 0
    ) {
      error = 'Please pick a movie from each category.';
      tryCount++;
      return;
    } else {
      error = null;
    }

    stage.set(Stage.HOME);
  };
</script>

<main class="questions">
  <h2>What are your favourite movie genres?</h2>
  <p>Choose up to 5</p>
  <div>
    {#each genresToChooseFrom as genre, i (i)}
      <div
        class="chip"
        class:selected={selectedGenres[genre]}
        on:click={() => chooseGenre(genre)}
      >
        {genre}
      </div>
    {/each}
  </div>

  {#each Array(movieIcons.length / 3) as _, i}
    <div>
      <h3>Which is your favourite movie out of these?</h3>
      <div class="h-list">
        {#each movieIcons.slice(i * 3, i * 3 + 3) as icon, k}
          <div
            class="material-icons movie-icon"
            class:selected={selectedMovies[i * 3 + k]}
            on:click={() => selectMovie(i, i * 3 + k)}
          >
            {icon}
          </div>
        {/each}
      </div>
    </div>
  {/each}

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <div class="btn-row">
    <button class="button" on:click={next}>
      Next <span class="material-icons">chevron_right</span>
    </button>
  </div>
</main>

<style>
  .questions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .chip {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    border-radius: 25px;
    background-color: #e0e0e0;
    margin: 0.5rem;
  }

  .chip.selected {
    background-color: #ffc107;
  }

  .h-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .movie-icon {
    font-size: 4rem;
    background-color: #fff;
    padding: 1rem;
  }

  .movie-icon.selected {
    background-color: #ffc107;
  }

  .button {
    box-sizing: border-box;
    margin-top: 0.4rem;

    width: 135px;
    height: 43px;

    background: rgba(255, 241, 215, 0.5);
    border: 1px solid #000000;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-row {
    display: flex;
    justify-content: flex-end;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }
</style>
