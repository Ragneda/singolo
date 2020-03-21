
/*Button*/
const BORDER = document.getElementById('images');
const FORM = document.getElementById('form');
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


/*Scroll*/
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY + 95;
    const divs = document.querySelectorAll('section, body');
    const links = document.querySelectorAll('#menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
}


//Scroll smooth
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






/*Button*/
FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    document.getElementById('result2').innerText = "Subject:  " + subject;
    document.getElementById('result3').innerText = "Description:  " + description;
    document.getElementById('message-block').classList.remove("hidden");
    if (document.getElementById('subject').value.toString() == '') {
        document.getElementById('result2').innerText = "No subject";
    };

    if (document.getElementById('description').value.toString() == '') {
        document.getElementById('result3').innerText = "No description";
    };

});




CLOSE_BUTTON.addEventListener("click", () => {

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






/*Tags*/

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
    images.classList.toggle('move1');
    images.classList.remove('.layout-4-column-flex')
    images.classList.remove('move3');
    images.classList.remove('move4');
    images.classList.remove('move2');
}

const move2 = () => {
    let images2 = document.querySelector('.layout-4-column');
    images2.classList.toggle('move2');
    images2.classList.remove('move1');
    images2.classList.remove('move3');
    images2.classList.remove('move4');
}

const move3 = () => {
    let images3 = document.querySelector('.layout-4-column');
    images3.classList.toggle('move3');
    images3.classList.remove('move1');
    images3.classList.remove('move2');
    images3.classList.remove('move4');
}

const move4 = () => {
    let images4 = document.querySelector('.layout-4-column');
    images4.classList.toggle('move4');
    images4.classList.remove('move1');
    images4.classList.remove('move2');
    images4.classList.remove('move3');
}





















