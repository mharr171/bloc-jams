pointsArray = document.getElementsByClassName('point');

revealPoint = (joecannon) ->
  joecannon.style.opacity = 1
  joecannon.style.transform = 'scaleX(1) translateY(0)'
  joecannon.style.msTransform = 'scaleX(1) translateY(0)'
  joecannon.style.WebkitTransform = 'scaleX(1) translateY(0)'
  joecannon.style.transition =  'all 0.3s ease-in-out'
  joecannon.style.msTransition = 'all 0.3s ease-in-out'
  joecannon.style.WebkitTransition = 'all 0.3s ease-in-out'
  joecannon.style.transitionDelay = '0.1s'
  joecannon.style.msTransitionDelay = '0.1s'
  joecannon.style.WebkitTransitionDelay = '0.1s'
  return

hidePoint = (joecannon) ->
  joecannon.style.opacity = 0
  joecannon.style.transform = 'scaleX(.5) scaleY(.01) translateY(8rem)'
  joecannon.style.msTransform = 'scaleX(.5) scaleY(.01) translateY(8rem)'
  joecannon.style.WebkitTransform = 'scaleX(.5) scaleY(.01) translateY(8rem)'
  joecannon.style.transition =  'all .5s ease-in-out'
  joecannon.style.msTransition = 'all 55s ease-in-out'
  joecannon.style.WebkitTransition = 'all .5s ease-in-out'
  return

resetPoint = (joecannon) ->
  joecannon.style.transitionDelay = '0.5s'
  joecannon.style.msTransitionDelay = '0.5s'
  joecannon.style.WebkitTransitionDelay = '0.5s'
  joecannon.style.transform = 'scaleX(.1) scaleY(1) translateY(rem)'
  joecannon.style.msTransform = 'scaleX(.1) scaleY(1) translateY(3rem)'
  joecannon.style.WebkitTransform = 'scaleX(.9) scaleY(1) translateY(3rem)'
  joecannon.style.transition =  'all 0.25s ease-in-out'
  joecannon.style.msTransition = 'all 0.25s ease-in-out'
  joecannon.style.WebkitTransition = 'all 0.25s ease-in-out'
  return

animatePoints = (pointsArray, choice = 1) ->
  if choice is 1
    forEach pointsArray, revealPoint
  else if choice is 2
    forEach pointsArray, hidePoint
  else if choice is 3
    setTimeout(()->
      forEach pointsArray, resetPoint
      ,1000)
  return

window.onload = () ->
  if window.innerHeight > 950
    animatePoints pointsArray
  sellingPoints = document.getElementsByClassName('selling-points')[0]
  scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200
  return window.addEventListener 'scroll', (e) ->
    if document.documentElement.scrollTop or document.body.scrollTop >= scrollDistance
      animatePoints pointsArray
    return
