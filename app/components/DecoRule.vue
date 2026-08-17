<script setup lang="ts">
/**
 * The house printer's ornament: a stepped pyramid flanked by graduated
 * rules that thicken toward the centre. `plain` drops the medallion for
 * a quieter divider, used where a page already carries the full device.
 */
defineProps<{ plain?: boolean }>()
</script>

<template>
  <div class="deco-rule" :class="{ 'deco-rule--plain': plain }" aria-hidden="true">
    <span class="deco-rule__fan" />
    <svg
      v-if="!plain"
      class="deco-rule__mark"
      width="38"
      height="22"
      viewBox="0 0 38 22"
      fill="none"
    >
      <path d="M1 20.5H9V16H14V11H24V16H29V20.5H37" stroke="currentColor" />
      <path d="M19 2L21.6 5.5L19 9L16.4 5.5Z" fill="currentColor" />
    </svg>
    <span class="deco-rule__fan" />
  </div>
</template>
