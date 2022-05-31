<script lang="ts">
  import stage, { Stage } from './stage';

  export let toStage: Stage = Stage.HOME;

  const onClick = () => {
    stage.set(toStage);
  };
</script>

<div class="header">
  <button on:click={onClick}>
    <span class="material-icons">chevron_left</span>
  </button>
</div>

<style type="text/postcss">
  .header {
    @apply mt-6;
  }

  button {
    @apply bg-transparent;
    @apply border-0;
    @apply text-black;
    @apply border-2 border-black;
    @apply w-8 h-8;
    @apply rounded-full;
    @apply flex;
    @apply items-center;
    @apply justify-center;
  }
</style>
