const app = {}

//Display project videos
app.hoverDisplayVideo = () => {
    const video = document.querySelectorAll('.projectVideos');
    for (let i = 0; i < video.length; i++) {
        ['mouseenter', 'focusin', 'touchstart'].forEach((e) => {
            video[i].addEventListener(e, function () {
                video[i].play();
            })
        })
    }
    for (let i = 0; i < video.length; i++) {
        ['mouseleave', 'focusout', 'touchmove'].forEach((e) => {
            video[i].addEventListener(e, function () {
                video[i].pause();
            })
        })
    }
}

//Printing effect(header)
app.text = ['former electrical engineer', 'husband and father', 'basketball player'];
app.typingContainer = document.getElementById("printingArea");
app.index = 0;
app.arrayIndex = 0;
app.isAdding = true;

app.typing = () =>  {
    setTimeout(function () {
        app.typingContainer.innerText = app.text[app.arrayIndex].slice(0, app.index);
        if (app.isAdding) {
            if (app.index === app.text[app.arrayIndex].length) {
                app.isAdding = false;
                setTimeout(function () {
                    app.typing()
                }, 2000);
                return;
            } else {
                app.index++;
            }
        } else {
            if (app.index === 0) {
                app.isAdding = true;
                app.arrayIndex = (app.arrayIndex + 1) % app.text.length;    //1 % 3 = 1; 2 % 3 = 2; 3 % 3 = 0;
            } else {
                app.index--;
            }
        }
        app.typing();
    }, app.isAdding ? 100 : 30)
}

//Showing nav aside
app.showingNavAside = () => {
    if (document.documentElement.scrollTop >= window.innerHeight * 0.05) {
        document.querySelector('#navBarAside').classList.add('navBarAsideShow');
    } else {
        document.querySelector('#navBarAside').classList.remove('navBarAsideShow');
    }
}

//Random hover effect for skill section
app.randomHoverEffect = () => {
    const skillBlocks = document.querySelectorAll(".skillSection li");
    for( let i = 0 ; i < skillBlocks.length; i ++) {
        ['mouseenter', 'focusin', 'touchstart'].forEach((e) => {
            skillBlocks[i].addEventListener(e, function() {
                const randomNumber = Math.floor(Math.random() * 3);
                if (randomNumber === 0) {
                    console.log('hi');
                    skillBlocks[i].classList.add('pulseEffect');
                } else if (randomNumber === 1) {
                    skillBlocks[i].classList.add('jellyEffect');
                } else if(randomNumber === 2){
                    skillBlocks[i].classList.add('shineEffect');
                }
            })
        })
    }

    for( let i = 0 ; i < skillBlocks.length; i ++) {
        ['mouseleave', 'focusout', 'touchmove'].forEach((e) => {
            skillBlocks[i].addEventListener(e, function() {
                skillBlocks[i].classList.remove('pulseEffect');
                skillBlocks[i].classList.remove('jellyEffect');
                skillBlocks[i].classList.remove('shineEffect');
            })
        })
    }
}

//About Section switch function
app.aboutSwitch = () => {
    document.querySelector("#aboutSectionRange").addEventListener('change', function (e) {
        if (e.target.value === "1") {
            document.querySelector("#profile").style.display = 'none';
            document.querySelector("#education").style.display = 'block';
            document.querySelector("#plumAssessment").style.display = 'none';
        } else if (e.target.value === "2") {
            document.querySelector("#profile").style.display = 'none';
            document.querySelector("#education").style.display = 'none';
            document.querySelector("#plumAssessment").style.display = 'block';
        } else {
            document.querySelector("#profile").style.display = 'block';
            document.querySelector("#education").style.display = 'none';
            document.querySelector("#plumAssessment").style.display = 'none';
        }
    })
}


app.init = function () {
    // window.addEventListener('load', function() {
    //     console.log('All assets are loaded')
    // })

    //About Section switch function
    app.aboutSwitch();

    //Random hover effect for skill section
    app.randomHoverEffect();

    //Display project videos
    app.hoverDisplayVideo();
    //Printing effect(header)
    app.typing();
    //Scrolling trigger functions
    window.addEventListener('scroll', function(){
        console.log(document.documentElement.scrollTop);
        app.showingNavAside();
    })
    //When refresh page
    app.showingNavAside();



    
}

app.init();