<script lang="typescript">
  import Analyze from './Analyze.svelte';
  import Find from './Find.svelte';
  import Finish from './Finish.svelte';
  import FriendRequests from './FriendRequests.svelte';
  import Group from './GroupV.svelte';
  import Home from './Home.svelte';
  import Invite from './Invite.svelte';
  import MovieInfo from './MovieInfo.svelte';
  import MovieSuggestion from './MovieSuggestion.svelte';
  import NotYetImpl from './NotYetImpl.svelte';

  import Onboarding from './Onboarding.svelte';
  import Questions from './Questions.svelte';
  import Review from './Review.svelte';

  import stage, { Stage } from './stage';
</script>

{#if $stage == Stage.ONBOARDING}
  <Onboarding />
{:else if $stage == Stage.QUESTIONS}
  <Questions />
{:else if $stage == Stage.HOME}
  <Home />
{:else if $stage == Stage.FIND}
  <Find />
{:else if $stage == Stage.CREATE_GROUP}
  <Invite />
{:else if $stage == Stage.GROUP}
  <Group />
{:else if $stage == Stage.ANALYZE}
  <Analyze />
{:else if $stage == Stage.MOVIE_SUGGESTION}
  <MovieSuggestion />
{:else if $stage == Stage.MOVIE_INFO}
  <MovieInfo />
{:else if $stage == Stage.REVIEW}
  <Review />
{:else if $stage == Stage.FINISH}
  <Finish />
{:else if $stage == Stage.FRIEND_REQUESTS}
  <FriendRequests />
{:else if $stage == Stage.NOT_IMPL}
  <NotYetImpl />
{/if}

<style>
  :global(body) {
    font-family: 'Montserrat', sans-serif;
  }
</style>
