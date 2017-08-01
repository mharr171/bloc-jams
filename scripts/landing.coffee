pointsArray = document.getElementsByClassName('point');

animatePoints = (pointsArray, choice = 1) ->

  if choice == 1
    revealPoint = (pointsArray) ->
      i = 0
      while i < pointsArray.length
        pointsArray[i].style.opacity = 1
        pointsArray[i].style.transform = 'scaleX(1) translateY(0)'
        pointsArray[i].style.msTransform = 'scaleX(1) translateY(0)'
        pointsArray[i].style.WebkitTransform = 'scaleX(1) translateY(0)'
        if i == 1
          pointsArray[i].style.opacity = 1
          pointsArray[i].style.transform = 'scaleX(1) translateY(0)'
          pointsArray[i].style.msTransform = 'scaleX(1) translateY(0)'
          pointsArray[i].style.WebkitTransform = 'scaleX(1) translateY(0)'
          pointsArray[i].style.transition =  'all 0.3s ease-in-out'
          pointsArray[i].style.msTransition = 'all 0.3s ease-in-out'
          pointsArray[i].style.WebkitTransition = 'all 0.3s ease-in-out'
          pointsArray[i].style.transitionDelay = '0.15s'
          pointsArray[i].style.msTransitionDelay = '0.15s'
          pointsArray[i].style.WebkitTransitionDelay = '0.15s'
        i++
      return
    revealPoint(pointsArray)
  else if choice == 2
    hidePoint = (pointsArray) ->
      i = 0
      while i < pointsArray.length
        pointsArray[i].style.transition =  'all 0.15s ease-in-out'
        pointsArray[i].style.msTransition = 'all 0.15s ease-in-out'
        pointsArray[i].style.WebkitTransition = 'all 0.15s ease-in-out'
        pointsArray[i].style.opacity = 0
        pointsArray[i].style.transform = 'scaleX(1.5) scaleY(.01) translateY(3rem)'
        pointsArray[i].style.msTransform = 'scaleX(1.5) scaleY(.01) translateY(3rem)'
        pointsArray[i].style.WebkitTransform = 'scaleX(1.5) scaleY(.01) translateY(3rem)'
        i++
      return
    resetPoint = (pointsArray) ->
      i = 0
      while i < pointsArray.length
        pointsArray[i].style.transition =  'all 0.25s ease-in-out'
        pointsArray[i].style.msTransition = 'all 0.25s ease-in-out'
        pointsArray[i].style.WebkitTransition = 'all 0.25s ease-in-out'
        pointsArray[i].style.transform = 'scaleX(.9) scaleY(1) translateY(3rem)'
        pointsArray[i].style.msTransform = 'scaleX(.9) scaleY(1) translateY(3rem)'
        pointsArray[i].style.WebkitTransform = 'scaleX(.9) scaleY(1) translateY(3rem)'
        i++
      return
    hidePoint(pointsArray)
    #resetPoint(pointsArray)
    setTimeout(()->
      resetPoint(pointsArray)
      return
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
