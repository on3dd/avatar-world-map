<template>
  <div class="base-button--wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class BaseButton extends Vue {}
</script>

<style scoped lang="scss">
  .base-button--wrapper {
    display: block;
    margin: .5rem;

    a {
      display: block;
      text-decoration: none;
    }
  }

  .button {
    padding: 1rem 2rem;
    background: none;
    border: 2px solid transparent;
    /*font-size: 1.25rem;*/
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 600;
    /*box-shadow: 0 5px 10px 0 rgba(0,0,0,.25);*/
    transition: all .1s ease-out;

    &--learn-more {
      color: #ffffff;
      background: #2980b9;

      &:hover {
        background: darken(#2980b9, 10%);
      }
    }

    &--back {
      color: #2980b9;
      background: transparent;
      border-color: #2980b9;

      &:hover {
        background: darken(#fafafa, 10%);
      }
    }
  }
</style>
