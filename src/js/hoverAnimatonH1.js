
setTimeout(function() {
    const parentHeader = document.getElementById("delete-text")
    parentHeader.innerHTML = ''

    var comingText = document.createElement('h1')
    comingText.innerHTML = 'Coming'
    comingText.className = 'header-1'

    var soonText = document.createElement('h1')
    soonText.innerHTML = 'soon'
    soonText.className = 'header-2'

    parentHeader.appendChild(comingText)
    parentHeader.appendChild(soonText)



    let elements = document.querySelectorAll('.header-1')

    elements.forEach(element => {
    let innerText = element.innerText
    element.innerHTML = ''
    
    let textContainer = document.createElement('div')
    textContainer.classList.add('block')
    
    for (let letter of innerText) {
        let span = document.createElement('span')
        span.innerText = letter.trim() === '' ? '\xa0': letter
        span.classList.add('letter')
        span.classList.add('animationHeader')
        textContainer.appendChild(span)
    }
    
    element.appendChild(textContainer)
    element.appendChild(textContainer.cloneNode(true))
    });
    
    

    let elements2 = document.querySelectorAll('.header-2')

    elements2.forEach(element => {
    let innerText = element.innerText
    element.innerHTML = ''
    
    let textContainer = document.createElement('div')
    textContainer.classList.add('block')
    
    for (let letter of innerText) {
        let span = document.createElement('span')
        span.innerText = letter.trim() === '' ? '\xa0': letter
        span.classList.add('letter')
        span.classList.add('animationHeader')
        textContainer.appendChild(span)
    }
    
    element.appendChild(textContainer)
    element.appendChild(textContainer.cloneNode(true))
    });


}, 6470)