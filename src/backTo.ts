import { writable } from 'svelte/store';
import { Stage } from './stage';

export default writable<Stage>(Stage.ONBOARDING);
