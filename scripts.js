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

//Copy email 
app.copyEmail = () => {
    const copyEmailButtons = document.querySelectorAll(".emailButtonContainer");
    for( let i = 0; i < copyEmailButtons.length ; i ++) {
        copyEmailButtons[i].addEventListener("click", function() {
            navigator.clipboard.writeText("hughzhoutrt@gmail.com");
            //Create pop window
            const container = document.querySelector('main');
            const popContainer = document.createElement('div');
            const popText = document.createElement('p');
            popText.innerText = "You successfully copied my email address to your clipboard!"
            popContainer.appendChild(popText);
            popContainer.classList.add('copyPop');
            container.appendChild(popContainer);
            //Delete pop window 
            setTimeout(function() {
                popContainer.remove();
            }, 3000)
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
        document.querySelector('#navBarAside').classList.add('asideShow');
    } else {
        document.querySelector('#navBarAside').classList.remove('asideShow');
    }
}
//Showing follow me aside 
app.showingFollowMeAside = () => {
    if (document.documentElement.scrollTop >= window.innerHeight * 6.45) {
        document.querySelector('#followmeBarAside').classList.add('asideHide');
    } else {
        document.querySelector('#followmeBarAside').classList.remove('asideHide');
    }
}
//Nav aside indicator 
app.navIndicator = () => {
    if (document.documentElement.scrollTop < window.innerHeight * 1) { //Home page
        document.querySelector("#homeIndicator").classList.remove('far');
        document.querySelector("#homeIndicator").classList.add('fas');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#skillIndicator").classList.remove('fas');
        document.querySelector("#skillIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 1 && document.documentElement.scrollTop < window.innerHeight * 2) {
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('far');
        document.querySelector("#aboutIndicator").classList.add('fas');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#skillIndicator").classList.remove('fas');
        document.querySelector("#skillIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 2 && document.documentElement.scrollTop < window.innerHeight * 6) {
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('far');
        document.querySelector("#projectIndicator").classList.add('fas');
        document.querySelector("#skillIndicator").classList.remove('fas');
        document.querySelector("#skillIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 6 && document.documentElement.scrollTop < window.innerHeight * 7) {
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#skillIndicator").classList.remove('far');
        document.querySelector("#skillIndicator").classList.add('fas');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else {
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#skillIndicator").classList.remove('fas');
        document.querySelector("#skillIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('far');
        document.querySelector("#contactIndicator").classList.add('fas');
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
    //Copy email
    app.copyEmail();
    //Scrolling trigger functions
    window.addEventListener('scroll', function(){
        console.log(document.documentElement.scrollTop);
        app.showingNavAside();
        app.showingFollowMeAside();
        app.navIndicator();
    })
    //When refresh page
    app.showingNavAside();
    app.showingFollowMeAside();
    app.navIndicator();



    
}

app.init();