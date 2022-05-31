<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './Header.svelte';
  import { movie, match as m } from './movie';
  import stage, { Stage } from './stage';

  let i: number = -1;
  let match: number = -1;

  onMount(() => {
    i = $movie;
    match = $m;
  });

  const reviews = [
    {
      rating: 5,
      text: 'This is my favourite movie ever!',
    },
    {
      rating: 4,
      text: 'Movie was really romantic and ngl it made me tear up a bit :’)',
    },
    {
      rating: 4,
      text: 'Quite interesting movie. Would watch again!',
    },
    {
      rating: 2,
      text: 'Not really my type of movie...',
    },
  ];

  const placeIcons = ['movie_filter', 'computer', 'card_travel'];
  const urls = [
    'https://www.primevideo.com/',
    'https://www.netflix.com/',
    'https://www.hulu.com/',
  ];

  const play = () => {
    const url = 'https://youtu.be/dQw4w9WgXcQ';
    window.open(url, '_blank');
  };
</script>

<main class="info">
  <Header toStage={Stage.MOVIE_SUGGESTION} />

  <div style="position: relative; margin-top: 1rem;" on:click={play}>
    <img src="/romance_movie.jpeg" alt="" class="h-img" />
    <div class="material-icons play-arrow">play_arrow</div>
  </div>

  <div class="m-info">
    <span><strong>Movie {i + 1}</strong></span>
    <span><i>Match: {match}%</i></span>
  </div>
  <div style="margin-top: 0.5em;">
    <span>Romance</span>
  </div>

  <h2 class="lighter">DESCRIPTION</h2>

  <div class="description">
    Ken goes to the store. Barbie is in the store. Their meeting is straight out
    of the movies. No-one can predict what happens next. Movie {i + 1} is filled
    with love, laughter and mystery.
  </div>

  <h2 class="lighter">REVIEWS LEFT BY USERS</h2>

  <img src="/reviews.png" alt="" class="h-img" />

  <div class="reviews">
    {#each reviews as review, i (i)}
      <div class="description review">
        <div class="rating">
          {#each Array(5) as _, i}
            <span class="material-icons sml">
              {#if i < review.rating}
                star
              {:else}
                star_border
              {/if}
            </span>
          {/each}
        </div>
        {review.text}
      </div>
    {/each}

    <div>
      <div style="float: left;" on:click={() => stage.set(Stage.REVIEW)}>
        Leave a review
      </div>
      <!-- <div style="float: right;">View more</div> -->
    </div>
  </div>

  <h2 class="lighter">WHERE TO WATCH</h2>

  <div class="places">
    {#each placeIcons as placeIcon, i (i)}
      <a
        class="place"
        href={urls[i]}
        rel="noopener nofollow noreferrer"
        target="_blank"
      >
        <div class="material-icons account-icon">{placeIcon}</div>
        <span>Place {i + 1}</span>
      </a>
    {/each}
  </div>
</main>

<style type="text/postcss">
  .h-img {
    width: 100%;
  }

  .play-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #fff;
  }

  .m-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.5em;
  }

  .description {
    padding: 0.5rem;
    border-radius: 20px;
    background-color: #fff1d7b2;
    border: 1px solid black;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .review {
    display: flex;
    flex-direction: column;
  }

  .sml {
    font-size: 0.9rem;
  }

  .places {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  .place {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border: 1px solid black;

    background-color: #fff1d7b2;

    text-decoration: none;
    color: black;
  }

  .lighter {
    font-weight: 300;
    font-size: 1.2rem;
  }
</style>
