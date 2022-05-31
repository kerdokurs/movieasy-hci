import { writable } from 'svelte/store';

const movie = writable<number>(-1);
const match = writable<number>(-1);

export { movie, match };
