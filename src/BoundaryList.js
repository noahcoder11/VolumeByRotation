import Boundary from "./boundary"
import { ref } from 'vue'

class BoundaryList {
    static boundaries = ref([])

    static addBoundary(b) {
        BoundaryList.boundaries.value.push(b)
    }
    static removeBoundary(i) {
        BoundaryList.boundaries.value.splice(i, 1)
    }
}

BoundaryList.addBoundary(new Boundary({ f: (x) => x*x }))
BoundaryList.addBoundary(new Boundary({ f: (x) => x*x*x }))

export default BoundaryList