//your JS code here. If required.
 const cupSmallElements = document.querySelectorAll('.cup-small');
  const remainedElement = document.querySelector('.remained');
  const percentageElement = document.querySelector('.percentage');

  let totalCups = 0;

  cupSmallElements.forEach((cupSmallElement, index) => {
    cupSmallElement.addEventListener('click', () => {
      if (cupSmallElement.classList.contains('full')) {
        for (let i = index; i >= 0; i--) {
          cupSmallElements[i].classList.remove('full');
        }
        totalCups -= (index + 1) / 8;
      } else {
        for (let i = 0; i <= index; i++) {
          cupSmallElements[i].classList.add('full');
        }
        totalCups += (index + 1) / 8;
      }
      remainedElement.textContent = `${(2 - totalCups).toFixed(2)} L`;
      percentageElement.textContent = `${((totalCups / 2) * 100).toFixed()}%`;
    });
  });