let checkedBox = document.querySelectorAll('input[data-human-body-no]');
let corcleNo = document.querySelectorAll('.UrTavla');

const handleClick = (e) => {
  let current = e.target.dataset.humanBodyNo - 1;
  corcleNo[current].classList[1] == 'visible'
    ? corcleNo[current].classList.remove('visible')
    : corcleNo[current].classList.add('visible');
};

checkedBox.forEach((e) => e.addEventListener('click', handleClick));
