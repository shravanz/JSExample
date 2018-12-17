// StopWatch --
//Define a constructor function called StopWatch
function StopWatch() {
  //Decalre private variables
  let startTime,
    endTime,
    running,
    duration = 0;
  //Declare public function
  this.start = function() {
    if (running) throw new Error("StopWatch has already Running");
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if (!running) throw new Error("StopWatch is not Started");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  //To view-Access only we will use Object.defineProperty
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
const sw = new StopWatch();
sw.start();
console.log(sw.duration);
sw.stop();
console.log(sw.duration);
// sw.reset();
// console.log(sw.duration);
