

<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer">
      <v-shape
          v-for="(shape, index) in shapes"
          :key="index"
          :config="shape.config"
          @dragend="(event) => dragMove(event, index)"
      />

    </v-layer>
  </v-stage>
</template>

<script>

const width = window.innerWidth
const height = window.innerHeight

export default {
  name: 'konva-app',
  data() {
    return {
      stageSize: {
        width: width,
        height: height
      },
      isDragging: false,
      img: null,
      imageSrc: require('@/assets/puzzle-icon.png'),
      shapeSizes: [
        {
          height: 100,
          width: 60
        },
        {
          height: 30,
          width: 100
        },
        {
          height: 30,
          width: 100
        },
      ],
      shapes: [
        {
          config: {
            sceneFunc: (context, shape) => {
              // Define dimensions for the puzzle piece
              const startX = 20 // X-coordinate where the puzzle piece starts
              const startY = 20 // Y-coordinate where the puzzle piece starts
              const pieceWidth = 60 // The width of the puzzle piece
              const pieceHeight = 100 // The height of the puzzle piece
              const tabWidth = 20 // The width of the tabs on the puzzle piece
              const tabHeight = 20 // The height of the tabs on the puzzle piece

              context.beginPath()

              // Move to the starting point (top left corner of the puzzle piece)
              context.moveTo(startX, startY)

              // Draw the top side with an inward tab (female slot)
              context.lineTo(startX + (pieceWidth / 2) - (tabWidth / 2), startY)
              context.quadraticCurveTo(
                  startX + (pieceWidth / 2), startY + tabHeight, // Control point for the inward tab
                  startX + (pieceWidth / 2) + (tabWidth / 2), startY // End point for the inward tab
              )

              // Draw the right side of the puzzle piece
              context.lineTo(startX + pieceWidth, startY)
              context.lineTo(startX + pieceWidth, startY + pieceHeight)

              // Draw the bottom side with an outward tab (male tab)
              context.lineTo(startX + (pieceWidth / 2) + (tabWidth / 2), startY + pieceHeight)
              context.quadraticCurveTo(
                  startX + (pieceWidth / 2), startY + pieceHeight - tabHeight, // Control point for the outward tab
                  startX + (pieceWidth / 2) - (tabWidth / 2), startY + pieceHeight // End point for the outward tab
              )

              // Draw the left side of the puzzle piece
              context.lineTo(startX, startY + pieceHeight)
              context.lineTo(startX, startY)

              // Finish the path
              context.closePath()

              // Style the shape
              context.fillStyle = 'pink'
              context.fill()
              context.lineWidth = 2
              context.strokeStyle = 'black'
              context.stroke()
              context.fillStrokeShape(shape)
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
          },
          horizontal: false,
          left: 'empty',
          right: 'empty',
          top: 'in',
          bottom: 'in',
        },
        {
          config: {
            sceneFunc: (context, shape) => {
              // Define puzzle piece parameters
              const startX = 20 // X-coordinate where the puzzle piece starts
              const startY = 20 // Y-coordinate where the puzzle piece starts
              const pieceWidth = 100 // The width of the puzzle piece
              const pieceHeight = 30 // The height of the puzzle piece
              const tabWidth = 20 // The width of the tab on the puzzle piece
              const tabHeight = 12 // The height of the tab on the puzzle piece

              context.beginPath()

              // Start at the top-left corner of the puzzle piece
              context.moveTo(startX, startY)

              // Draw the left straight side
              context.lineTo(startX, startY + pieceHeight)

              // Draw the bottom side with a tab
              // Left side of the bottom tab
              context.lineTo(startX + (pieceWidth - tabWidth) / 2, startY + pieceHeight)
              // Curve out for the tab
              context.bezierCurveTo(
                  startX + (pieceWidth - tabWidth) / 2, startY + pieceHeight + tabHeight, // First control point
                  startX + (pieceWidth + tabWidth) / 2, startY + pieceHeight + tabHeight, // Second control point
                  startX + (pieceWidth + tabWidth) / 2, startY + pieceHeight // Ending point
              )
              // Right side of the bottom tab
              context.lineTo(startX + pieceWidth, startY + pieceHeight)

              // Draw the right straight side
              context.lineTo(startX + pieceWidth, startY)

              // Draw the top side with a slot
              // Right side of the top slot
              context.lineTo(startX + (pieceWidth + tabWidth) / 2, startY)
              // Curve in for the slot
              context.bezierCurveTo(
                  startX + (pieceWidth + tabWidth) / 2, startY - tabHeight, // First control point
                  startX + (pieceWidth - tabWidth) / 2, startY - tabHeight, // Second control point
                  startX + (pieceWidth - tabWidth) / 2, startY // Ending point
              )
              // Left side of the top slot
              context.lineTo(startX, startY)

              // Complete the path
              context.closePath()

              // Style the shape
              context.fillStyle = 'pink'
              context.fill()
              context.lineWidth = 2
              context.strokeStyle = 'black'
              context.stroke()
              context.fillStrokeShape(shape)
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
          },
          horizontal: true,
          left: 'empty',
          right: 'empty',
          top: 'out',
          bottom: 'out',
        },
        {
          config: {
            sceneFunc: (context, shape) => {
              // Define puzzle piece parameters
              const startX = 20 // X-coordinate where the puzzle piece starts
              const startY = 20 // Y-coordinate where the puzzle piece starts
              const pieceWidth = 100 // The width of the puzzle piece
              const pieceHeight = 30 // The height of the puzzle piece
              const tabWidth = 20 // The width of the tab on the puzzle piece
              const tabHeight = 12 // The height of the tab on the puzzle piece

              context.beginPath()

              // Start at the top-left corner of the puzzle piece
              context.moveTo(startX, startY)

              // Draw the left straight side
              context.lineTo(startX, startY + pieceHeight)

              // Draw the bottom side with a tab
              // Left side of the bottom tab
              context.lineTo(startX + (pieceWidth - tabWidth) / 2, startY + pieceHeight)
              // Curve out for the tab
              context.bezierCurveTo(
                  startX + (pieceWidth - tabWidth) / 2, startY + pieceHeight + tabHeight, // First control point
                  startX + (pieceWidth + tabWidth) / 2, startY + pieceHeight + tabHeight, // Second control point
                  startX + (pieceWidth + tabWidth) / 2, startY + pieceHeight // Ending point
              )
              // Right side of the bottom tab
              context.lineTo(startX + pieceWidth, startY + pieceHeight)

              // Draw the right straight side
              context.lineTo(startX + pieceWidth, startY)

              // Draw the top side with a slot
              // Right side of the top slot
              context.lineTo(startX + (pieceWidth + tabWidth) / 2, startY)
              // Curve in for the slot
              context.bezierCurveTo(
                  startX + (pieceWidth + tabWidth) / 2, startY - tabHeight, // First control point
                  startX + (pieceWidth - tabWidth) / 2, startY - tabHeight, // Second control point
                  startX + (pieceWidth - tabWidth) / 2, startY // Ending point
              )
              // Left side of the top slot
              context.lineTo(startX, startY)

              // Complete the path
              context.closePath()

              // Style the shape
              context.fillStyle = 'pink'
              context.fill()
              context.lineWidth = 2
              context.strokeStyle = 'black'
              context.stroke()
              context.fillStrokeShape(shape)
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
          },
          horizontal: true,
          left: 'empty',
          right: 'empty',
          top: 'out',
          bottom: 'out',
        },
      ],
      shapeIndex: 0,
      otherShapeIndex: 0,
    }
  },
  methods: {
    dragMove(e, index) {
      let shapes = this.$refs.stage.getStage().children[0].children
      const shape = shapes[index]
      this.shapeIndex = index
      shape.horizontal = this.shapes[index].horizontal

      shapes.forEach((otherShape, otherShapeIndex) =>  {
        this.otherShapeIndex = otherShapeIndex
        if(shape !== otherShape) {
          // Get the current position of the shape being dragged
          const shapePos = e.target.position()

          // Get the position of the other shape
          const otherShapePos = otherShape.position()

          // Calculate the distance between the relevant points (e.g., the end of the tab and the start of the slot)
          const distance = this.calculateDistance(
              shapePos.x, shapePos.y, otherShapePos.x, otherShapePos.y
          )

          let clip = this.getClip(distance, shapePos, otherShapePos)


          if (clip === 'top clip') {
            shape.position({
              x: otherShapePos.x + (this.shapeSizes[this.otherShapeIndex].width / 2) - (this.shapeSizes[this.shapeIndex].width / 2),
              y: otherShapePos.y + this.shapeSizes[this.otherShapeIndex].height + 3
            })
          }

          if (clip === 'bottom clip') {
            shape.position({
              x: otherShapePos.x + (this.shapeSizes[this.otherShapeIndex].width / 2) - (this.shapeSizes[this.shapeIndex].width / 2),
              y: otherShapePos.y - this.shapeSizes[this.shapeIndex].height -3
            })
          }

          // Redraw the layer to update the position
          this.$refs.stage.getStage().children[0].batchDraw()
        }
      })

    },
    getRightSideDifference(shape1, shape2) {
      return Math.abs(shape1.x + this.shapeSizes[this.shapeIndex].width - shape2.x)
    },
    getLeftSideDifference(shape1, shape2) {
      return Math.abs(shape1.x - shape2.x  + this.shapeSizes[this.otherShapeIndex].width)
    },
    getTopDifference(shape1, shape2) {
      return Math.abs(shape1.y - shape2.y - this.shapeSizes[this.otherShapeIndex].height)
    },
    getBottomDifference(shape1, shape2) {
      return Math.abs(shape1.y + this.shapeSizes[this.shapeIndex].height - shape2.y)
    },
    getClip(distance, shape1, shape2) {
      const rightSideDifference = this.getRightSideDifference(shape1, shape2)
      const leftSideDifference =  this.getLeftSideDifference(shape1, shape2)
      const topDifference =  this.getTopDifference(shape1, shape2)
      const bottomDifference =  this.getBottomDifference(shape1, shape2)

      let shape1MiddleY = shape1.y + (this.shapeSizes[this.shapeIndex].height / 2) - 10
      let shape2MiddleY = shape2.y + (this.shapeSizes[this.otherShapeIndex].height / 2) - 10

      let yDifference =  Math.abs(shape1MiddleY - shape2MiddleY)

      let shape1MiddleX = shape1.x + (this.shapeSizes[this.shapeIndex].width / 2) - 10
      let shape2MiddleX = shape2.x + (this.shapeSizes[this.otherShapeIndex].width / 2) - 10

      let xDifference = Math.abs(shape1MiddleX - shape2MiddleX)

      if(rightSideDifference < 10 && yDifference < 10 && this.rightSideMatch) {
        return 'right clip'
      }

      if(leftSideDifference < 10 && yDifference < 10 && this.leftSideMatch) {
        return 'left clip'
      }

      if(topDifference < 10 && xDifference < 10 && this.topSideMatch) {
        return 'top clip'
      }

      if(bottomDifference < 10 && xDifference < 10 && this.bottomSideMatch) {
       return 'bottom clip'
      }
    },

    calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    },
  },
  created() {
    const image = new window.Image()
    image.src = this.imageSrc
    image.width=100
    image.height=100
    image.onload = () => {
      // set image only when it is loaded
      this.img = image
    }
  },
  computed: {
    rightSideMatch() {
      return this.shapes[this.shapeIndex].right !== this.shapes[this.otherShapeIndex].left
    },
    leftSideMatch() {
      return this.shapes[this.shapeIndex].left !== this.shapes[this.otherShapeIndex].right
    },
    topSideMatch() {
      return this.shapes[this.shapeIndex].top !== this.shapes[this.otherShapeIndex].bottom
    },
    bottomSideMatch() {
      return this.shapes[this.shapeIndex].bottom !== this.shapes[this.otherShapeIndex].top
    }
  }
}
</script>
