<script setup>
    import BoundaryList from "../BoundaryList"
    import { onMounted, ref, watch } from 'vue'

    let controls = {
        xScl: 10,
        yScl: 1,
        xOff: 0,
        yOff: 0
    }

    const graph = ref(null)
    
    onMounted(() => {
        var ctx = graph.value.getContext('2d')
        graph.value.width = 400
        graph.value.height = 400

        function updateRender() {
            ctx.clearRect(0, 0, 400, 400)

            ctx.strokeStyle = "black"
    
            ctx.moveTo(200 - controls.xOff, 0)
            ctx.lineTo(200 - controls.xOff, 400)

            ctx.moveTo(0, 200 - controls.yOff)
            ctx.lineTo(400, 200 - controls.yOff)
            ctx.stroke()

            ctx.strokeStyle = 'green'
            
            for(let b of BoundaryList.boundaries.value) {
                b.calculatePoints(controls)

                ctx.beginPath()

                for(let point of b.pts) {
                    ctx.lineTo(point[0], point[1])
                }

                ctx.stroke()
            }
        }

        window.setInterval(updateRender, 100)
    })
</script>

<template>
    <div id="container">
        <canvas ref="graph" id="graph"></canvas>
        <div class="controls">
            <p>X-Scale</p>
            <input v-model="controls.xScl" id="x-scl" type="range" min="1" max="100">
            <p>Y-Scale</p>
            <input v-model="controls.yScl" id="y-scl" type="range" min="1" max="100">
        </div>
        <div class="controls">
            <p>X-Offset</p>
            <input v-model="controls.xOff" id="x-off" type="range" min="0" max="100">
            <p>Y-Offset</p>
            <input v-model="controls.yOff" id="y-off" type="range" min="0" max="100">
        </div>
    </div>
</template>

<style scoped>
  #graph {
    width: 400px;
    height: 400px;
    border: solid gray 1px;
  }

  #container {
    display: flex;
    flex-direction: column;
  }

  .controls {
    display: flex;
    flex-direction: row;
  }
</style>