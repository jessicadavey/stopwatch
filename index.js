function Stopwatch() {
    this.duration = 0;
    let watchStart = 0;
    let watchStop = null;

    this.timeFormat = function(millisec){
        if(millisec >= 60000){
            let minutes = Math.floor(millisec/60000);
            let seconds = (millisec % 60000)/1000;
            return `${minutes}m ${seconds}s`;
        } else {
            return `${millisec/1000}s`;
        }
    }

    this.message=function(errorMessage, element){
        document.getElementById(element).innerHTML = errorMessage;
        setTimeout(function () {document.getElementById(element).innerHTML=""}, 1000);

    }
    
    this.start=function(){
    if(watchStart === 0){
      watchStart = Date.now();
      document.getElementById("duration").innerHTML = `...`;
      watchStop = 0;
    }else{
      this.message('Timer already started!', 'error');
     
    }
    },
      
    this.stop=function(){
    if(watchStop === 0){
      watchStop = Date.now();
      this.duration += (watchStop - watchStart);
      document.getElementById("duration").innerHTML = this.timeFormat(this.duration);
      watchStart = 0;
    } else {
        this.message("Timer wasn't running!!", "error");
    }

    }

    this.reset = function(){
      this.duration = 0;
      this.message("Timer reset!!", "error");
      document.getElementById("duration").innerHTML = "0.0s";
    }
    
  }
  
  const sw = new Stopwatch;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  