// const error = 'Error';

// console.log(Error);

function sum(numb_1, numb_2) {
    return numb_1 + numb_2;
}

console.log(sum(4, 7));
console.log(sum(5, 3));
console.log(sum(1, 4));

const video = document.getElementById('myVideo');

if (video) {
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      video.controls = true;
    } else {
      video.pause();
    }
  });
}
