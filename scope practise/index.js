let makerTimer = () => {
  let elapse = 0;
  const stopWatch = () => {
    return elapse;
  };
  const increase = () => {
    elapse++;
  };
  setInterval(increase, 2000);
    return stopWatch;

};
let makeTime = makerTimer();
makeTime();
