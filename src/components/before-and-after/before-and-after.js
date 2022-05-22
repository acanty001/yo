const beforeAfterCard1 = document.getElementById('before-and-after-card-1')
const beforeAfterCard2 = document.getElementById('before-and-after-card-2')
const beforeAfterCard3 = document.getElementById('before-and-after-card-3')
const beforeAfterCard4 = document.getElementById('before-and-after-card-4')
const beforeAfterCard5 = document.getElementById('before-and-after-card-5')
const beforeAfterCard6 = document.getElementById('before-and-after-card-6')
const beforeAfterModal = document.getElementById('before-and-after-modal')
const beforeAfterModalCloseBtn = document.getElementById('before-after-modal-close-btn')
const beforeAfterModalContents = document.getElementById('before-and-after-modal-contents')
const beforeAfterCardArr = [beforeAfterCard1, beforeAfterCard2, beforeAfterCard3, beforeAfterCard4, beforeAfterCard5, beforeAfterCard6]
const beforeAfterCardObj = {
  beforeAfterCard1: ['beforePlayroom1-1.jpg', 'afterPlayroom1-1.jpg', 'afterPlayroom1-2.jpg'],
  beforeAfterCard2: ['beforeBasement1-1.jpg', 'afterBasement1-1.jpg'],
  beforeAfterCard3: ['beforeRoom1-1.jpg', 'afterRoom1-1.jpg', 'afterRoom1-2.jpg'],
  beforeAfterCard4: ['beforePantry1-1.jpg', 'afterPantry1-1.jpg'],
  beforeAfterCard5: ['beforeCloset1-1.jpg', 'afterCloset1-1.jpg'],
  beforeAfterCard6: ['beforeCloset2-1.jpg', 'beforeCloset2-2.jpg', 'afterCloset2-1.jpg']
}
let beforeAfterCount = 0

const domainName = 'http://www.googlywiggly.com'

class BeforeAndAfter {
  constructor() {

    this.cardClick = this.cardClick()
    this.modalClose = this.modalClose()
  }

  cardClick() {
    if (window.location.href === `${domainName}/index.html` || window.location.href === `${domainName}/` || window.location.href === `${domainName}/index.html#how-we-operate`) {
      for (let i = 0; i < beforeAfterCardArr.length; i++) {
        beforeAfterCardArr[i].addEventListener('click', () => {
          console.log(i)
          beforeAfterCount = 0
          // clear modal
          beforeAfterModalContents.innerHTML = ''
  
          // open before&after modal
          beforeAfterModal.className = 'before-and-after-modal'
  
          // display images in grid format
          for (let j = 0; j < beforeAfterCardObj[`beforeAfterCard${i + 1}`].length; j++) {
            let newH1Element = document.createElement('div')
  
            if (i === 0) {
              newH1Element.className = `before-and-after-contents-card-${j + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
            } else if (i === 1) {
              beforeAfterCount = 3
              newH1Element.className = `before-and-after-contents-card-${j + beforeAfterCount + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
              beforeAfterCount++
            } else if (i === 2) {
              beforeAfterCount = 5
              newH1Element.className = `before-and-after-contents-card-${j + beforeAfterCount + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
              beforeAfterCount++
            } else if (i === 3) {
              beforeAfterCount = 8
              newH1Element.className = `before-and-after-contents-card-${j + beforeAfterCount + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
              beforeAfterCount++
            } else if (i === 4) {
              beforeAfterCount = 10
              newH1Element.className = `before-and-after-contents-card-${j + beforeAfterCount + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
              beforeAfterCount++
            } else if (i === 5) {
              beforeAfterCount = 12
              newH1Element.className = `before-and-after-contents-card-${j + beforeAfterCount + 1}`
              beforeAfterModalContents.appendChild(newH1Element)
              beforeAfterCount++
            }
          }
  
          // send element to full screen mode
          for (let k = 0; k < beforeAfterModalContents.children.length; k++) {
            beforeAfterModalContents.children[k].addEventListener('click', () => {
              beforeAfterModalContents.children[k].requestFullscreen()
            })
          }
        })
      }
    }
  }

  modalClose() {
    if (window.location.href === `${domainName}/index.html` || window.location.href === `${domainName}/` || window.location.href === `${domainName}/index.html#how-we-operate`) {
      beforeAfterModalCloseBtn.addEventListener('click', () => {
        beforeAfterModal.className = 'before-and-after-modal hide-container'
      })
  
      document.addEventListener('click', (event) => {
        if (event.target === beforeAfterModal) {
          beforeAfterModal.className = 'before-and-after-modal hide-container'
        }
      })
    }
  }
}

const beforeAfterComponent = new BeforeAndAfter()

module.exports = { beforeAfterComponent }










