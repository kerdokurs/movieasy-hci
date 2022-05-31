import { writable } from 'svelte/store';

const groupNames = writable<string[]>([]);
const groupGenres = writable<string[]>([]);

export { groupNames, groupGenres };
