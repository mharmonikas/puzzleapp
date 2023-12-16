<template>
<!--    <draggable-->
<!--        v-model="myArray"-->
<!--        group="people"-->
<!--        @start="drag=true"-->
<!--        @end="drag=false"-->
<!--        item-key="id">-->
<!--      <template #item="{element}">-->
<!--        <div>{{element.name}}</div>-->
<!--      </template>-->
<!--    </draggable>-->

  <konva></konva>
</template>

<script>
// import draggable from 'vuedraggable'
import konva from './konva'

export default {
  name: "puzzle-app",
  display: "PuzzleApp",
  order: 6,
  components: {
    // draggable
    konva
  },
  data() {
    return {
      drag: false,
      myArray: [{id: 1, name: 'test'}, {id: 2, name: 'test 2'}],
      colTwo: ['d', 'e', 'f'],
    };
  },
  methods: {
    onClick() {

    }
  },
  computed: {

  },
  setup() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
