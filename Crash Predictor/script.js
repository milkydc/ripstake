let submitButton = document.querySelector('button');
let input = document.querySelector('input');
let form = document.querySelector('form');
let arrow = document.querySelector('.icon-arrow');
let close = document.querySelector('.icon-error');
let check = document.querySelector('.icon-success');
let checkPath = document.querySelector('.icon-success path');

console.log(checkPath.getTotalLength());
submitButton.addEventListener('click', e => {
  e.preventDefault();
  if (form.dataset.state != "typing") {
    TweenMax.to(close, 0.5, {
      opacity: 0,
      rotation: 0 });

    TweenMax.fromTo(check, 0.5, {
      rotation: 360 * 3 },
    {
      rotation: 0 });

    TweenMax.to(checkPath, 0.5, {
      strokeDashoffset: 175 });

    form.dataset.state = "typing";
    TweenMax.fromTo(arrow, 0.45, {
      rotation: 0,
      x: '-60px',
      opacity: '0' },
    {
      rotation: 0,
      x: '0',
      opacity: '1' });

    return;
  }

  TweenMax.to(arrow, 1, {
    rotation: 360 * 5,
    transformOrigin: "50% 50%",
    opacity: 0 });


  setTimeout(() => {
    if (input.value != 'ripstakecrash') {
      form.dataset.state = "error";
      TweenMax.to(close, 0.5, {
        rotation: 360 * 3,
        opacity: 1 });

    } else {
      form.dataset.state = "success";
      TweenMax.to(checkPath, 0.65, {
        strokeDashoffset: 0 });

    }
  }, 500);
});