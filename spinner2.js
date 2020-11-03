const spinIcon = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|  ','\r/   ','\r-   ','\r\\   ','\r|   ', '\n'];
let time = 100;
const spinMe = () => {
  for (let i = 0; i < spinIcon.length; i++) {
    setTimeout(() => process.stdout.write(spinIcon[i]), time);
    time += 50;
  }
};
spinMe();

