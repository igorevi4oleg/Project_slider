let sliderImages = [

    {
        text: 'Rostov-on-Don, Admiral',
        url: '../itogtest/images/theme.jpg',
        city: `Rostov-on-Don LCD admiral`,
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },

    {
        text: 'Sochi Thieves',
        url: '../itogtest/images/theme-2.jpg',
        city: `Sochi Thieves`,
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },

    {
        text: 'Rostov-on-Don Patriotic',
        url: '../itogtest/images/theme-3.jpg',
        city: `Rostov-on-Don Patriotic`,
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }

]




const sliderArrows = document.querySelector(".slider-navigation")
const showImg = document.querySelector(".slider-images")
const sliderDots = document.querySelector(".slider-dots")
const decorNames = document.querySelector(".li-themes");

const nameCity = document.querySelector(".name-city")
const muchArea = document.querySelector(".much-area")
const muchTime = document.querySelector(".much-time")
const muchCost = document.querySelector(".much-cost")



function initSlider() {

    sliderImages.forEach((image, index) => {

        let imageDiv = `<div class = "currentSlide n${index} ${index === 0? "active" : ""}" style = "background-image:url(${sliderImages[index].url});" data-index = "${index}"></div>`; 
        showImg.innerHTML += imageDiv;
        
        
    });


}

function initDescription() {

    
    let cityDescription = `<div class = "name-city-text">${sliderImages[0].city}</div>`
    let areaDescription = `<div class = "much-area-text">${sliderImages[0].area}</div>`
    let timeDescription = `<div class = "much-time-text">${sliderImages[0].time}</div>`
    let costDescription = `<div class = "much-cost-text">${sliderImages[0].cost}</div>`
    nameCity.innerHTML += cityDescription;
    muchArea.innerHTML += areaDescription;
    muchTime.innerHTML += timeDescription;
    muchCost.innerHTML += costDescription;
}


function changeDescription(num) {

    let sliderDescriptionName = nameCity.querySelector(".name-city-text")
    sliderDescriptionName.innerText = sliderImages[num].city
    let sliderDescriptionArea = muchArea.querySelector(".much-area-text")
    sliderDescriptionArea.innerText = sliderImages[num].area
    let sliderDescriptionTime = muchTime.querySelector(".much-time-text")
    sliderDescriptionTime.innerText = sliderImages[num].time
    let sliderDescriptionCost = muchCost.querySelector(".much-cost-text")
    sliderDescriptionCost.innerText = sliderImages[num].cost

}







function initArrows () {

    sliderArrows.querySelectorAll(".arrow").forEach(arrow => {

        arrow.addEventListener("click", function(){

            let currentNumber = +showImg.querySelector(".active").dataset.index;
            let nextNumber;
        
        if(arrow.classList.contains("prev")) {

            nextNumber = currentNumber === 0? sliderImages.length - 1 : currentNumber - 1;
        } else {
            nextNumber = currentNumber === sliderImages.length - 1? 0 : currentNumber + 1;
        }

        moveSlider(nextNumber)
        })
    })
}



function moveSlider(num) {

    showImg.querySelector(".active").classList.remove("active");
    showImg.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    decorNames.querySelector(".active").classList.remove("active");
    decorNames.querySelector(".n" + num).classList.add("active");

    changeDescription(num)
    
  }


function initDots(){

    sliderImages.forEach((image, index) => {

        let dot = `<div class = "dot-item n${index} ${index === 0? "active" : ""}" data-index = "${index}"><img src="../itogtest/images/dot.svg" alt=""></div>`;
        sliderDots.innerHTML += dot;
    
    })

    sliderDots.querySelectorAll(".dot-item").forEach(dot => {

        dot.addEventListener("click", function() {

            moveSlider(this.dataset.index)
        })
    })
}


function initDecorNames() {


    decorNames.querySelectorAll(".example-image").forEach((item, index) => {

        item.classList.add(`n${index}`)
        item.setAttribute('data-index', index)

    })
    decorNames.querySelectorAll(".example-image").forEach((item, index) => {

        item.classList.add(`${index === 0? "active" : "not"}`)
        
    })

}

decorNames.querySelectorAll(".example-image").forEach(item => {

    item.addEventListener("click", function() {

        moveSlider(this.dataset.index)  
    })
})





initSlider();
initArrows();
initDots();
initDecorNames();
initDescription()
