import { writable } from 'svelte/store';

export enum Stage {
  ONBOARDING,
  QUESTIONS,
  HOME,

  FIND,
  CREATE_GROUP,
  GROUP,
  ANALYZE,

  MOVIE_SUGGESTION,
  MOVIE_INFO,
  REVIEW,
  FINISH,

  FRIEND_REQUESTS,

  NOT_IMPL,
}

export default writable<Stage>(Stage.ONBOARDING);
