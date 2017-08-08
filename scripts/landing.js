pointsArray = document.getElementsByClassName('point');


var revealPoint = function(point) {
  for(var i = 0; i < point.length; i++){
    point[i].style.opacity = 1;

    point[i].style.transition = 'all 0.3s ease-in-out';
    point[i].style.msTransition = 'all 0.3s ease-in-out';
    point[i].style.WebkitTransition = 'all 0.3s ease-in-out';

    point[i].style.transform = 'scaleX(1) translateY(0)';
    point[i].style.msTransform = 'scaleX(1) translateY(0)';
    point[i].style.WebkitTransform = 'scaleX(1) translateY(0)';

    point[i].style.transitionDelay = '0.15s';
    point[i].style.msTransitionDelay = '0.15s';
    point[i].style.WebkitTransitionDelay = '0.15s';
  }
};

var hidePoint = function(point) {
  for(var i = 0; i < point.length; i++){
    point[i].style.opacity = 0;

    point[i].style.transition = 'all 0.15s ease-in-out';
    point[i].style.msTransition = 'all 0.15s ease-in-out';
    point[i].style.WebkitTransition = 'all 0.15s ease-in-out';

    point[i].style.transform = 'scaleX(1.5) scaleY(.01) translateY(3rem)';
    point[i].style.msTransform = 'scaleX(1.5) scaleY(.01) translateY(3rem)';
    point[i].style.WebkitTransform = 'scaleX(1.5) scaleY(.01) translateY(3rem)';

    point[i].style.transitionDelay = '0s';
    point[i].style.msTransitionDelay = '0s';
    point[i].style.WebkitTransitionDelay = '0s';
  }
};

var resetPoint = function(point) {
  for(var i = 0; i < point.length; i++){
    point[i].style.transition = 'all 0s ease-in-out';
    point[i].style.msTransition = 'all 0s ease-in-out';
    point[i].style.WebkitTransition = 'all 0s ease-in-out';

    point[i].style.transform = 'scaleX(.9) scaleY(1) translateY(3rem)';
    point[i].style.msTransform = 'scaleX(.9) scaleY(1) translateY(3rem)';
    point[i].style.WebkitTransform = 'scaleX(.9) scaleY(1) translateY(3rem)';
  }
};

var animatePoints = function(pointsArray, choice) {
  if (choice == null) {
    choice = 1;
  }
  if (choice === 1) {
    revealPoint(pointsArray);
  } else if (choice === 2) {
    hidePoint(pointsArray);

    setTimeout(function() {resetPoint(pointsArray);}, 1000);
  }
};

window.onload = function() {
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  return window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
};
