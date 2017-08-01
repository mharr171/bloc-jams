var animatePoints;

animatePoints = function(choice) {
  var hidePoint, points, resetPoint, revealPoint;
  if (choice == null) {
    choice = 1;
  }
  points = document.getElementsByClassName('point');
  if (choice === 1) {
    revealPoint = function(points) {
      var i;
      i = 0;
      while (i < points.length) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
        if (i === 1) {
          points[i].style.opacity = 1;
          points[i].style.transform = "scaleX(1) translateY(0)";
          points[i].style.msTransform = "scaleX(1) translateY(0)";
          points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
          points[i].style.transition = "all 0.3s ease-in-out";
          points[i].style.msTransition = "all 0.3s ease-in-out";
          points[i].style.WebkitTransition = "all 0.3s ease-in-out";
          points[i].style.transitionDelay = "0.15s";
          points[i].style.msTransitionDelay = "0.15s";
          points[i].style.WebkitTransitionDelay = "0.15s";
        }
        i++;
      }
    };
    revealPoint(points);
  } else if (choice === 2) {
    hidePoint = function(points) {
      var i;
      i = 0;
      while (i < points.length) {
        points[i].style.transition = "all 0.15s ease-in-out";
        points[i].style.msTransition = "all 0.15s ease-in-out";
        points[i].style.WebkitTransition = "all 0.15s ease-in-out";
        points[i].style.opacity = 0;
        points[i].style.transform = "scaleX(1.5) scaleY(.01) translateY(3rem)";
        points[i].style.msTransform = "scaleX(1.5) scaleY(.01) translateY(3rem)";
        points[i].style.WebkitTransform = "scaleX(1.5) scaleY(.01) translateY(3rem)";
        i++;
      }
    };
    resetPoint = function(points) {
      var i;
      i = 0;
      while (i < points.length) {
        points[i].style.transition = "all 0.25s ease-in-out";
        points[i].style.msTransition = "all 0.25s ease-in-out";
        points[i].style.WebkitTransition = "all 0.25s ease-in-out";
        points[i].style.transform = "scaleX(.9) scaleY(1) translateY(3rem)";
        points[i].style.msTransform = "scaleX(.9) scaleY(1) translateY(3rem)";
        points[i].style.WebkitTransform = "scaleX(.9) scaleY(1) translateY(3rem)";
        i++;
      }
    };
    hidePoint(points);
    setTimeout(function() {
      resetPoint(points);
    }, 1000);
  }
};
