function Timer(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.nInter = 0;
}

 Timer.prototype.tick = function(th) {
        console.log("Timer " + th.title + " Tick! | cycles left " + th.stopCount);
         if(th.stopCount <= 0)
             th.stop(th);
        (th.stopCount)--;
}

Timer.prototype.start = function () {
    console.log("Timer " + this.title + " started (delay=" + this.delay + ", stopCount=" + this.stopCount + ")");
        let v = this.stopCount;
        this.nInter = setInterval(this.tick, this.delay, this);
}

Timer.prototype.stop = function (th) {
         clearInterval(th.nInter);
         console.log("Timer " + th.title + " stopped");
}

function runTimer(title, delay, stopCount) {
        let t = new Timer(title, delay, stopCount);
        t.start();
}


runTimer("Bleep", 1000, 5);
/*
Console output:Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
