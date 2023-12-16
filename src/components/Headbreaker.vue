<template>
  <div>Headbreaker from Vue</div>
  <div id="puzzle"></div>
</template>
<!--// test-->
<script>
import headbreaker from 'headbreaker';

const drawPuzzle = () => {
  const autogen = new headbreaker.Canvas('puzzle', {
    width: 800,
    height: 650,
    pieceSize: 100,
    proximity: 20,
    borderFill: 10,
    strokeWidth: 2,
    lineSoftness: 0.18,
    painter: new headbreaker.painters.Konva(),
  });

  autogen.autogenerate({
    horizontalPiecesCount: 2,
    verticalPiecesCount: 2,
    metadata: [
      { color: '#B83361' },
      { color: '#B87D32' },
      { color: '#A4C234' },
      { color: '#37AB8C' },
    ],
  });

  autogen.draw();
};
export default {
  name: 'Headbreaker-page',
  props: {
    msg: String
  },
  components: {
  },
  mounted() {
    drawPuzzle()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.input-errors {
  color: red;
}

.error-border {
  border: 1px solid red;
}
</style>
