<template>
  <div class="details-wrapper" ref="detailsWrapper" :style="{display: display}">
    <section class="details">
      <h1 class="details--header">{{ name }}</h1>
      <div class="details--image--wrapper">
        <img :src="image" alt="" class="details--image">
        <div class="details--image--shadow"></div>
      </div>
      <div class="details--description">
        <p v-for="(paragraph, idx) in paragraphs" :key="idx" class="details--description--item">{{ paragraph }}</p>
        </div>
      <div class="button-group">
        <BaseButton>
          <a :href="link" class="button button--learn-more">Learn more on Avatar Wiki</a>
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
  import {Getter} from "vuex-class";
  import BaseButton from "./BaseButton.vue";

  @Component({
    components: {
      BaseButton,
    }
  })
  export default class DetailsComponent extends Vue {
    @Getter name!: string;
    @Getter image!: string;
    @Getter paragraphs!: string[];
    @Getter link!: string;

    $refs!: {
      detailsWrapper: HTMLDivElement;
    };

    get display(): string {
      return this.name === '' ? 'none' : 'block';
    }
  }
</script>

<style scoped lang="scss">
  .details-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem 3rem;
    width: 30%;
    max-width: 600px;
    height: calc(100% - 4rem);

    .details {
      display: flex;
      flex-direction: column;
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

      &--description {
        flex-grow: 1;
        overflow: auto;

        &--item {
          text-align: center;
        }
      }

      .button-group {
        /*align-self: flex-end;*/
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
