
/*
function submitData(){
  var input = document.getElementById('searchterm').value
  console.log(input)
  var apiLink =`https://api.discountapi.com/v2/deals?query=${input}&api_key=ZAFFXmrD`
  console.log(apiLink)
  let dealImages = document.querySelector('#images')
  axios.get(apiLink)
  .then(result => {
    //Identify data to import
    const dealsdata = result.data;
    console.log(dealsdata)
    dealsdata.deals.forEach( deal => {
      let imageSrc = deal.deal.image_url;
      if(imageSrc) {
        let image = document.createElement('img');
        image.src = imageSrc;
        dealImages.appendChild(image);
      }
    })
  })
  .catch(err => {
    console.error("data failed:", err.message);
  })
}
*/

window.addEventListener('load',deals, false)
var search=document.getElementById('search')
search.addEventListener('click',getDeals,false)
let dealImages = document.querySelector('#images')

function deals() {
  axios.get('https://api.discountapi.com/v2/deals?api_key=ZAFFXmrD')
  .then(result => {
    let dealsdata = result.data
    console.log(dealsdata)
      dealsdata.deals.map(deal => {
        let imageSrc = deal.deal.image_url
          if(imageSrc) {
            let image = document.createElement('img')
            image.src = imageSrc;
            dealImages.appendChild(image);
          }
      })
  })
  } 
function getDeals() {
  var apiLink = 'https://api.discountapi.com/v2/deals?api_key=ZAFFXmrD'
  var input = document.getElementById('searchterm').value
  console.log(input)
  if(input="") {
    apiLink =`https://api.discountapi.com/v2/deals?api_key=ZAFFXmrD`
    console.log(apiLink)
    //Import discountapi data
    axios.get(apiLink)

    //ON success, pull the following data
    .then(results => {
    //Identify data to import
    const dealsdata = results.data;
    console.log(dealsdata)
      dealsdata.deals.forEach( deal => {
      let imageSrc = deal.deal.image_url;
        if(imageSrc) {
        let image = document.createElement('img');
        image.src = imageSrc;
        dealImages.appendChild(image);
        }
      })
    })
  } else {
      apiLink ="https://api.discountapi.com/v2/deals?query=" + input + "&api_key=ZAFFXmrD" 
      axios.get(apiLink)
      .then(results => {
        //Identify data to import
        const dealsdata = results.data;
        console.log(dealsdata)
          dealsdata.deals.forEach( deal => {
          let imageSrc = deal.deal.image_url;
            if(imageSrc) {
            let image = document.createElement('img');
            image.src = imageSrc;
            dealImages.appendChild(image);
            }
          })
      })
  }
}

