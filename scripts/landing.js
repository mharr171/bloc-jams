var animatePoints, hidePoint, pointsArray, resetPoint, revealPoint;

pointsArray = document.getElementsByClassName('point');

revealPoint = function(element) {
  element.style.opacity = 1;
  element.style.transform = 'scaleX(1) translateY(0)';
  element.style.msTransform = 'scaleX(1) translateY(0)';
  element.style.WebkitTransform = 'scaleX(1) translateY(0)';
  element.style.transition = 'all 0.3s ease-in-out';
  element.style.msTransition = 'all 0.3s ease-in-out';
  element.style.WebkitTransition = 'all 0.3s ease-in-out';
  element.style.transitionDelay = '0.1s';
  element.style.msTransitionDelay = '0.1s';
  element.style.WebkitTransitionDelay = '0.1s';
};

hidePoint = function(element) {
  element.style.opacity = 0;
  element.style.transform = 'scaleX(1.5) scaleY(.01) translateY(8rem)';
  element.style.msTransform = 'scaleX(1.5) scaleY(.01) translateY(8rem)';
  element.style.WebkitTransform = 'scaleX(1.5) scaleY(.01) translateY(8rem)';
  element.style.transition = 'all .2s ease-in-out';
  element.style.msTransition = 'all .2s ease-in-out';
  element.style.WebkitTransition = 'all .2s ease-in-out';
};

resetPoint = function(element) {
  element.style.transitionDelay = '0s';
  element.style.msTransitionDelay = '0';
  element.style.WebkitTransitionDelay = '0';
  element.style.transform = 'scaleX(.1) scaleY(1) translateY(3rem)';
  element.style.msTransform = 'scaleX(.1) scaleY(1) translateY(3rem)';
  element.style.WebkitTransform = 'scaleX(.9) scaleY(1) translateY(3rem)';
  element.style.transition = 'all 0s ease-in-out';
  element.style.msTransition = 'all 0s ease-in-out';
  element.style.WebkitTransition = 'all 0s ease-in-out';
};

animatePoints = function(pointsArray, choice) {
  if (choice == null) {
    choice = 1;
  }
  if (choice === 1) {
    forEach(pointsArray, revealPoint);
  } else if (choice === 2) {
    forEach(pointsArray, hidePoint);
    setTimeout(function() {
      return forEach(pointsArray, resetPoint);
    }, 1000);
  }
};

window.onload = function() {
  var scrollDistance, sellingPoints;
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }
  sellingPoints = document.getElementsByClassName('selling-points')[0];
  scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  return window.addEventListener('scroll', function(e) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
};
