<script lang="ts">
  import Header from './Header.svelte';
  import Home from './Home.svelte';

  import stage, { Stage } from './stage';

  let rating = 0;
</script>

<main class="review">
  <Header toStage={Stage.MOVIE_INFO} />

  <h1>How did you like it?</h1>
  <p>
    Tell us how did you enjoy the movie. <br /> Filling out the following prompts
    will help us give you better suggestions next time and help other people find
    the movie they are looking for based on your review.
  </p>

  <h2>Rate the movie</h2>

  <div class="rating">
    {#each Array(5) as _, i (i)}
      <span class="material-icons bg" on:click={() => (rating = i + 1)}>
        {#if rating >= i + 1}
          star
        {:else}
          star_border
        {/if}
      </span>
    {/each}
  </div>

  <h2>Leave a review</h2>

  <div>
    <textarea class="review-text" placeholder="Type here..." />
  </div>

  <label for="dont" class="dont-label">
    <input type="checkbox" id="dont" class="dont" />
    Don't show my name
  </label>

  <div class="btn-d">
    <button class="button" on:click={() => stage.set(Stage.FINISH)}>
      Submit
    </button>
    <button class="button" on:click={() => stage.set(Stage.HOME)}
      >Don't want to review?</button
    >
  </div>
</main>

<style>
  .bg {
    font-size: 3.5rem;
  }

  .btn-d {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
  }

  .review-text {
    width: 99%;
    resize: none;
    height: 8rem;
  }

  .dont-label {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .dont {
    margin-left: 0.5rem;
  }

  .button {
    box-sizing: border-box;

    width: 300px;
    height: 48px;

    background: rgba(255, 241, 215, 0.8);
    border: 1px solid #000000;
  }
</style>
