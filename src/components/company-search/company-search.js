const myApp = require('../../index.js')

// company search tab btns
const csFindLocation = document.getElementById('cs-find-a-location-btn')

const domainName = 'http://www.googlywiggly.com'

// tabs
const csTabsHeader = document.getElementById('cs-tabs-header')
const csTab1 = document.getElementById('cs-tab-1')
const csTab2 = document.getElementById('cs-tab-2')

// tab 1 details
const csTab1City = document.getElementById('cs-tab-1-city')
const csTab1State = document.getElementById('cs-tab-1-state')
const csTab1ZipCode = document.getElementById('cs-tab-1-zipcode')
const csTab1SearchBtn = document.getElementById('cs-tab-1-searchbtn')

// tab 1 results 
const csTab1Results = document.getElementById('cs-tab-1-results')
const csTab1ResultsNote = document.getElementById('cs-tab-1-results-note')
let csTab1ResultsLocation = document.querySelectorAll('.cs-tab-1-results-locations')

let newDivElement = document.createElement('div')

let locationSelected = false

let csAvailabilityObj = {
  start_at: '',
  end_at: '',
  service_variation_id: '',
  location_id: '',
  team_member_id: ''
}

// company search objects
let csObject = {
  details: {
    locality: '',
    administrative_district_level_1: '',
    postal_code: ''
  }
}

let filteredCompanyLocationsArr = []

let notValid = false

class CompanySearch {
  constructor() {

    this.runCsFindLocation = this.runCsFindLocation()
    this.runCsSearchBtn = this.runCsTab1SearchBtn()
  }

  runCsFindLocation() {
    // find location clicked
    if (window.location.href === `${domainName}/index.html` || window.location.href === `${domainName}/` || window.location.href === `${domainName}/#how-we-operate`) {
      csFindLocation.addEventListener('click', () => {
        csFindLocation.className = 'cs-tab-selected'

        csTab1.className = 'cs-tab-1'
      })      

     csTab1State.addEventListener('click', () => {
       newDivElement.innerHTML = ``
     })

    }
    // show csFindLocation container

    // hide csAvailabilites container
  }

  runCsTab1SearchBtn() {
    if (window.location.href === `${domainName}/index.html` || window.location.href === `${domainName}/` || window.location.href === `${domainName}/#how-we-operate`) {

      csTab1SearchBtn.addEventListener('click', () => {

        newDivElement.innerHTML = ''
        csTab1Results.children[0].className = ''
        filteredCompanyLocationsArr = []
        newDivElement.innerHTML = '' 

        // if 'find a location' selected
        if (csTab1.className === 'cs-tab-1') {
          // check that state selected
          if (csTab1State.value !== 'select-a-state') {
            csTab1State.className = 'input-valid-clear'
            csObject.details.administrative_district_level_1 = csTab1State.value
          } else {
            csTab1State.className = 'input-invalid'
          }

          if (csTab1State.className === 'input-valid-clear') {
              // get all the locations from Square account
              async function getCompanyLocations() {
                // req & res
                const get_company_locations_req = await fetch('/getCompanyLocations', { method: 'get' })
                const get_company_locations_res = await get_company_locations_req.json()

                console.log(get_company_locations_res)

                // filter through all locations and find only company business accounts
                get_company_locations_res.locations.filter((element) => {
                  let companyAbbreviation = element.name.slice(0, 16)
                  if (companyAbbreviation === 'So Posh Business') {
                    filteredCompanyLocationsArr.push(element)
                  }
                })

                csTab1Results.className = 'cs-tab-1-results'

                filteredCompanyLocationsArr.forEach((element, index) => {
                  console.log(index)
                  if (csTab1State.value === element.address.administrative_district_level_1) {
                    newDivElement.className ='cs-tab-1-results-locations'
                    newDivElement.innerHTML = `
                      <i class="bi bi-geo-alt"></i>
                      <h1>${element.address.locality}</h1>
                      <h1>${element.address.administrative_district_level_1}</h1>
                      <h1>${element.address.address_line_1}</h1>
                      <h1>${element.address.postal_code}</h1>
                      <h1 class='hide-container'>${element.id}</h1>
                    `
                    csTab1Results.innerHTML = `<h1 class='cs-tab-1-results-title'>Locations:</h1>`
                    csTab1Results.appendChild(newDivElement)
                    csTab1ResultsNote.className = 'cs-tab-1-results-note'
                  } else if (newDivElement.innerHTML === '') {
                    notValid = true
                    newDivElement.className ='cs-tab-1-results-locations'
                    csTab1Results.innerHTML = `<h1 class='cs-tab-1-results-title'>Locations:</h1>`
                    newDivElement.innerHTML = `<h1>Sorry, we are not currently located near this location. Check out our <a href=''>Unique Session</a> service for details on recieving our service anyway.</h1>`
                    csTab1Results.appendChild(newDivElement)
                    csTab1ResultsNote.className = 'cs-tab-1-results-note'
                  }
                })

                csTab1ResultsLocation = document.querySelectorAll('.cs-tab-1-results-locations')


                for (let i = 0; i < csTab1Results.children.length - 1; i++) {
                
                  csTab1Results.children[i + 1].addEventListener('mouseover', ()=> {
                    if (newDivElement.children.length === 6) {
                      csTab1ResultsLocation[i].style.backgroundColor = '#F05E7C'
                      csTab1ResultsLocation[i].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].style.borderRadius = '100px'
                      csTab1ResultsLocation[i].style.transitionDuration = '0.5s'
                      csTab1ResultsLocation[i].children[0].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].children[0].style.transitionDuration = '0.5s'
                      csTab1ResultsLocation[i].children[1].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].children[1].style.transitionDuration = '0.5s'
                      csTab1ResultsLocation[i].children[2].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].children[2].style.transitionDuration = '0.5s'
                      csTab1ResultsLocation[i].children[3].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].children[3].style.transitionDuration = '0.5s'
                      csTab1ResultsLocation[i].children[4].style.color = '#FFFFFF'
                      csTab1ResultsLocation[i].children[4].style.transitionDuration = '0.5s'
                    }
                  })

                  csTab1Results.children[i + 1].addEventListener('mouseout', ()=> {
                    if (newDivElement.children.length === 6 && locationSelected !== true) {
                        csTab1ResultsLocation[i].style.backgroundColor = ''
                        csTab1ResultsLocation[i].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].style.borderRadius = '100px'
                        csTab1ResultsLocation[i].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[0].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[0].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[1].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[1].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[2].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[2].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[3].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[3].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[4].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[4].style.transitionDuration = '0.5s'
                    }
                  })

                  document.addEventListener('click', (event)=> {  
                    if (event.target === csTab1Results.children[i + 1] || event.target === csTab1Results.children[i + 1].children[0] || event.target === csTab1Results.children[i + 1].children[1] || event.target === csTab1Results.children[i + 1].children[2] || event.target === csTab1Results.children[i + 1].children[3] || event.target === csTab1Results.children[i + 1].children[4]) {
                      if (newDivElement.children.length === 6 && csTab2.className === 'cs-tab-2 hide-container') {
                        csTab1Results.children[0].className = ''
                        csTab1ResultsLocation[i].style.backgroundColor = '#F05E7C'
                        csTab1ResultsLocation[i].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].style.borderRadius = '100px'
                        csTab1ResultsLocation[i].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[0].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].children[0].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[1].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].children[1].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[2].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].children[2].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[3].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].children[3].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[4].style.color = '#FFFFFF'
                        csTab1ResultsLocation[i].children[4].style.transitionDuration = '0.5s'
                        
                        csAvailabilityObj.location_id = filteredCompanyLocationsArr[0].id
                        locationSelected = true
                      } 
                    } else if (event.target === csFindLocation || event.target === csTabsHeader  && locationSelected === true) {
                      console.log('nope nope nope, keep that location selected')
                    } else {
                      if (newDivElement.children.length === 6 && csTab2.className === 'cs-tab-2 hide-container') {
                        locationSelected = false
                        csTab1ResultsLocation[i].style.backgroundColor = ''
                        csTab1ResultsLocation[i].style.borderRadius = '100px'
                        csTab1ResultsLocation[i].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[0].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[0].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[1].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[1].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[2].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[2].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[3].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[3].style.transitionDuration = '0.5s'
                        csTab1ResultsLocation[i].children[4].style.color = '#3A3A3A'
                        csTab1ResultsLocation[i].children[4].style.transitionDuration = '0.5s'
                      }
                    }
                    
                    if (event.target === csTab1State) {
                      csTab1ResultsLocation[i].style.backgroundColor = ''
                      csTab1ResultsLocation[i].style.borderRadius = '100px'
                      csTab1ResultsLocation[i].style.color = '#3A3A3A'
                      csTab1ResultsLocation[i].style.transitionDuration = '0.5s'
                    }
                  })

                }
              }
                getCompanyLocations()
                .then(() => { console.log('the getCompanyLocations() has been sent to the express server') })
                .catch((error) => { console.log(error) })
          }
      
        }  

      })

    }
  }
  

 
}

const companySearch = new CompanySearch()

module.exports = { companySearch }