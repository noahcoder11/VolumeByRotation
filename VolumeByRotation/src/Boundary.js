class Boundary {
    constructor(config) {
      this.f = config.f
      this.xy = config.xy || 0
      this.int = config.int || 2
      this.pts = []
    }
    calculatePoints(config) {
        this.pts = []
        config.xOff = config.xOff || 0
        config.yOff = config.yOff || 0
        
        if(this.xy) {
            for(let y = -200 + config.yOff;y < 200 + config.yOff;y += this.int / (config.yScl || 1)) {
                const x = 200 - config.xOff + this.f(y) * (config.xScl || 1)
                this.pts.push([x, 200 - config.yOff - y * (config.yScl || 1)])
            }
        }else {
            for(let x = -200 + config.xOff;x < 200 + config.xOff;x += this.int / (config.xScl || 1)) {
                const y = 200 - config.yOff - this.f(x) * (config.yScl || 1)
                this.pts.push([200 - config.xOff + x * (config.xScl || 1), y])
            }      
        }
    }
}

export default Boundary