function printCurrentTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
}

setInterval(printCurrentTime, 1000);
