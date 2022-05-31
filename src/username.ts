import { writable } from 'svelte/store';

const username = writable<String>('Stranger');

export default username;
