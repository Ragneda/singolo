

/*Button*/
const BORDER = document.getElementById('images');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

/*Header*/
const MENU = document.getElementById('menu');

/*Slider*/
const HIDDEN_SLIDER1 = document.getElementById('hidden-layer6');
const HIDDEN_SLIDER2 = document.getElementById('hidden-layer5');

/*Slider*/
HIDDEN_SLIDER1.addEventListener("click", () => {
    document.getElementById('close-img').classList.toggle("hidden2");
});

HIDDEN_SLIDER2.addEventListener("click", () => {
    document.getElementById('img').classList.toggle("hidden2");
});




/*Button*/
BUTTON.addEventListener("click", () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    if (subject.value === '') {
        return alert('Без темы');
    }
    document.getElementById('message-block').classList.remove("hidden");

});




CLOSE_BUTTON.addEventListener("click", () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add("hidden");
});


/*Header*/
MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});



/*Border*/
BORDER.addEventListener("click", (event) => {
    BORDER.querySelectorAll("img").forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});



/* carusel */

let sliders = document.querySelectorAll('.slider');
let currentSlider = 0;
let isEnabled = true;

function changeCurrentSlider(n) {
    currentSlider = (n + sliders.length) % sliders.length;
}

function hideSlider(direction) {
    isEnabled = false;
    sliders[currentSlider].classList.add(direction);
    sliders[currentSlider].addEventListener('animationend', function () {
        this.classList.remove('slider__active', direction);
    });
}

function showSlider(direction) {
    sliders[currentSlider].classList.add('slider__next', direction);
    sliders[currentSlider].addEventListener('animationend', function () {
        this.classList.remove('slider__next', direction);
        this.classList.add('slider__active');
        isEnabled = true;
    });
}




function previousSlider(n) {
    hideSlider('to-right');
    changeCurrentSlider(n - 1);
    showSlider('from-left')
}

function nextSlider(n) {
    hideSlider('to-left');
    changeCurrentSlider(n + 1);
    showSlider('from-right')
}

document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previousSlider(currentSlider);
    }
});

document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextSlider(currentSlider);
    }
});







window.onload = function () {

    addTagsClickHandler();
}


const addTagsClickHandler = () => {
    document.querySelector('.portfolio__tags').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')) {
            let clickedTag = event.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                return move1();
            }

            if (clickedTag.innerText === 'Web Design') {
                return move2();
            }
            if (clickedTag.innerText === 'Graphic Design') {
                return move3();
            }
            if (clickedTag.innerText === 'Artwork') {
                return move4();
            }
        }

    })
}



const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.portfolio__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');

}


const move1 = () => {
    let images = document.querySelector('.layout-4-column');
    images.classList.toggle('order1');
    images.classList.remove('.layout-4-column-flex')
    images.classList.remove('order3');
    images.classList.remove('order4');
    images.classList.remove('order2');
}

const move2 = () => {
    let images2 = document.querySelector('.layout-4-column');
    images2.classList.toggle('order2');
    images2.classList.remove('order1');
    images2.classList.remove('order3');
    images2.classList.remove('order4');
}

const move3 = () => {
    let images3 = document.querySelector('.layout-4-column');
    images3.classList.toggle('order3');
    images3.classList.remove('order1');
    images3.classList.remove('order2');
    images3.classList.remove('order4');
}

const move4 = () => {
    let images4 = document.querySelector('.layout-4-column');
    images4.classList.toggle('order4');
    images4.classList.remove('order1');
    images4.classList.remove('order2');
    images4.classList.remove('order3');
}


//Scroll
const scrolls = document.querySelectorAll('a[href*="#"]')

for (let scroll of scrolls) {
    scroll.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = scroll.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}





/*

    let items = document.querySelectorAll('.item');
    let currenItem = 0;
    let isEnabled = true;

    function changeCurrentItem(n) {
        currentItem = (n + item.length) % items.length;
    }



    document.querySelector('.tag').addEventListener('click', function() {
      if (isEnabled) {
        previousItem (currentItem);
      }
    });


    function previousItem(n) {
      changeCurrentItem(n - 1);
    }

    function previousItem(n) {
        changeCurrentItem(n - 1);
      }



    document.querySelector('.portfolio__tags.tag').addEventListener('click', function () {
        if (isEnabled) {
            previousPortfolio(currentPortfolio);
        }
    });















/*const showAllPortfolio = () => {

}


const filterPortfolioBySelectedTag = (selectedTag) => {
    let portfolios = document.querySelectorAll('.portfolio');
    portfolios.forEach(portfolio => {
        portfolio.classList.add('portfolio_hidden');
        portfolio.querySelectorAll('tag').forEach(tag => {
if (tag.innerText === selektedTag) {
    portfolio.classList.remove('portfolio_hidden');
}
        })
    })
}
*/










