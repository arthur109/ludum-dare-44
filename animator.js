class Animator{
    constructor(frameList,switchDelay, resetIndex){
        this.frames = frameList;
        this.frameIndex = 0;
        this.switchDelay = switchDelay;
        this.delayCounter = 0;
        this.resetIndex = resetIndex;
    }
    getFrame(){
        this.checkFrameIncrement()
        if(this.frameIndex >= this.frames.length-1){
            this.frameIndex = this.resetIndex;
        }
        return this.frames[this.frameIndex];
    }
    checkFrameIncrement(){
        this.delayCounter++;
        if(this.delayCounter >= this.switchDelay){
            this.frameIndex++;
            this.delayCounter = 0;
        }
    }
    reset(){
        this.delayCounter = 0;
        this.frameIndex = 0;
    }
}