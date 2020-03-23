<template>
  <div class="details-wrapper">
    <section class="details">
      <h1 class="details--header">Very Long Title</h1>
      <div class="details--image--wrapper">
        <img src="https://images2.alphacoders.com/556/thumb-1920-556413.jpg" alt="" class="details--image">
        <div class="details--image--shadow"></div>
      </div>
      <div class="details--description">
        <p class="details--description--item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero modi temporibus. Aperiam deleniti dolore earum eos est expedita facere harum illo, itaque, iusto numquam possimus repellendus tenetur vero vitae!</p>
        <p class="details--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero modi temporibus. Aperiam deleniti dolore earum eos est expedita facere harum illo, itaque, iusto numquam possimus repellendus tenetur vero vitae!</p>
        <p class="details--description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero modi temporibus. Aperiam deleniti dolore earum eos est expedita facere harum illo, itaque, iusto numquam possimus repellendus tenetur vero vitae!</p>
      </div>
      <div class="button-group">
        <BaseButton>
          <a href="" class="button button--learn-more">Learn more on Avatar Wiki</a>
        </BaseButton>
        <BaseButton>
          <button class="button button--back">Back to world map</button>
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import BaseButton from "./BaseButton.vue";

  @Component({
    components: {
      BaseButton,
    }
  })
  export default class DetailsComponent extends Vue {}
</script>

<style scoped lang="scss">
  .details-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem 3rem;
    width: 40%;
    height: calc(100% - 4rem);

    .details {
      padding: 2rem;
      height: 100%;
      border-radius: 30px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, .25);
      transition: all .2s ease-out;

      &--header {
        text-align: center;
        font-size: 2rem;
      }

      &--image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        transition: all .2s ease-out;

        &--wrapper {
          position: relative;
          height: 200px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;

          &:hover {
            .details--image {
              transform: translate(-50%, -50%) scale(1.5);
            }
            .details--image--shadow {
              box-shadow: inset 0 0 1rem 0 rgba(0,0,0,.5);
            }
          }
        }

        &--shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 2rem 0 rgba(0,0,0,.5);
          border-radius: inherit;
          transition: all .2s ease-out;
        }
      }

      .button-group {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
