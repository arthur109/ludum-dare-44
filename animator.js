class Animator{
    constructor(frameList,switchDelay){
        this.frames = frameList;
        this.frameIndex = 0;
        this.switchDelay = switchDelay;
        this.delayCounter = 0;
    }
    getFrame(){
    }
    checkFrameIncrement(){
        this.delayCounter++;
        if(this.delayCounter >= this.switchDelay){
            frameIndex++;
            this.delayCounter = 0;
        }
    }

}