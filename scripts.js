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

//Download resume
app.downloadResume = () => {
    const downloadResumeButtons = document.querySelectorAll(".resumeButtonContainer");
    for( let i = 0; i < downloadResumeButtons.length ; i ++) {
        downloadResumeButtons[i].addEventListener("click", function() {
            //Create pop window
            const container = document.querySelector('main');
            const popContainer = document.createElement('div');
            const popText = document.createElement('p');
            popText.innerText = "You successfully downloaded my resume!"
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
app.text = ['former engineer', 'husband and father', 'basketball player...?'];
app.typingContainer = document.getElementById("printingArea");
app.index = 0;
app.arrayIndex = 0;
app.isAdding = true;
app.avoidGifReset = 0;
app.typing = () =>  {
    let currentWords;
    setTimeout(function () {
        app.typingContainer.innerText = app.text[app.arrayIndex].slice(0, app.index);
        currentWords = app.text[app.arrayIndex];
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
                app.currentWords = app.text[app.arrayIndex];
            } else {
                app.index--;
            }
        }
        
        if (currentWords === 'former engineer') {
            document.querySelector('#changingImg').src = "./images/EE.jpg";
            document.querySelector('#changingImg').alt = "Hugh was an electrical engineer";
            app.avoidGifReset = 0;
        } else if (currentWords === 'husband and father') {
            document.querySelector('#changingImg').src = "./images/father.jpg";
            document.querySelector('#changingImg').alt = "Hugh and his daughter";
        }  else if (currentWords === 'basketball player...?') {
            if (app.avoidGifReset !== 0) {
               //Empty round
            } else {
            document.querySelector('#changingImg').src = "./images/basketball.gif";
            document.querySelector('#changingImg').alt = "Hugh is a basketball player";
            app.avoidGifReset = 1;
            }
        }
        app.typing();
    }, app.isAdding ? 100 : 30)
}

//Changing profile picture 
app.profileImage = () => {
    ['mouseenter', 'focusin', 'touchstart', 'mousedown'].forEach((e) => {
        document.querySelector('#profileImage').addEventListener(e, function() {
            document.querySelector('#profileImage').src = './images/hughCartoon.jpg';
            document.querySelector('#profileImage').alt = 'Cartoon version Hugh';
        })
    })
}
app.profileImageBack = () => {
    ['mouseleave', 'focusout', 'touchmove', 'mouseup'].forEach((e) => {
        document.querySelector('#profileImage').addEventListener(e, function() {
            document.querySelector('#profileImage').src = './images/profilePhoto.jpg';
            document.querySelector('#profileImage').alt = 'Hugh profile photo';
        })
    })
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
    if (document.documentElement.scrollTop < window.innerHeight * 0.9) { //Home page
        document.querySelector("#homeIndicator").classList.remove('far');
        document.querySelector("#homeIndicator").classList.add('fas');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 0.9 && document.documentElement.scrollTop < window.innerHeight * 1.9) { //About section
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('far');
        document.querySelector("#aboutIndicator").classList.add('fas');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 1.9 && document.documentElement.scrollTop < window.innerHeight * 5.9) {//Project section
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('far');
        document.querySelector("#projectIndicator").classList.add('fas');
        document.querySelector("#contactIndicator").classList.remove('fas');
        document.querySelector("#contactIndicator").classList.add('far');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 5.9){ //Contact section
        document.querySelector("#homeIndicator").classList.remove('fas');
        document.querySelector("#homeIndicator").classList.add('far');
        document.querySelector("#aboutIndicator").classList.remove('fas');
        document.querySelector("#aboutIndicator").classList.add('far');
        document.querySelector("#projectIndicator").classList.remove('fas');
        document.querySelector("#projectIndicator").classList.add('far');
        document.querySelector("#contactIndicator").classList.remove('far');
        document.querySelector("#contactIndicator").classList.add('fas');
    }
}
//Project section h2 
app.projectTittles = () => {
    if (document.documentElement.scrollTop <= window.innerHeight * 2) {
        document.querySelector("#firstProjectTittle").classList.add('projectTittleShows');
        document.querySelector("#secondProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#thirdProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fourthProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fifthProjectTittle").classList.remove('projectTittleShows');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 2.05 && document.documentElement.scrollTop < window.innerHeight * 3.05) {
        document.querySelector("#firstProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#secondProjectTittle").classList.add('projectTittleShows');
        document.querySelector("#thirdProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fourthProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fifthProjectTittle").classList.remove('projectTittleShows');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 3.05 && document.documentElement.scrollTop < window.innerHeight * 4.05) {
        document.querySelector("#firstProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#secondProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#thirdProjectTittle").classList.add('projectTittleShows');
        document.querySelector("#fourthProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fifthProjectTittle").classList.remove('projectTittleShows');
    } else if (document.documentElement.scrollTop >= window.innerHeight * 4.05 && document.documentElement.scrollTop < window.innerHeight * 5.05){
        document.querySelector("#firstProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#secondProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#thirdProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fourthProjectTittle").classList.add('projectTittleShows');
        document.querySelector("#fifthProjectTittle").classList.remove('projectTittleShows');
    } else {
        document.querySelector("#firstProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#secondProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#thirdProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fourthProjectTittle").classList.remove('projectTittleShows');
        document.querySelector("#fifthProjectTittle").classList.add('projectTittleShows');
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
            document.querySelector("#skillSection").style.display = 'none';
        } else if (e.target.value === "2") {
            document.querySelector("#profile").style.display = 'none';
            document.querySelector("#education").style.display = 'none';
            document.querySelector("#skillSection").style.display = 'block';
        } else {
            document.querySelector("#profile").style.display = 'block';
            document.querySelector("#education").style.display = 'none';
            document.querySelector("#skillSection").style.display = 'none';
        }
    })
}

//Loading page
app.loadingShowingNumber =0 ;
app.loadingNumber = () => {
    setTimeout(function() {
        if (app.loadingShowingNumber <= 100) {
            document.querySelector("#countingNumber").innerText = `${app.loadingShowingNumber}%`;
            app.loadingShowingNumber ++;
            app.loadingNumber();
        }
    }, 15)
}
app.loadingPageDone = () => {
    setTimeout(function() {
        document.querySelector("#loadingPage").classList.add('loadingPageHide')
    }, 3000)
}

//Moving video to center 
app.hoverOnVideoThanMove = () => {
    const projectSection = document.querySelectorAll('.projectSection > div');
    for (let i = 0; i <  projectSection.length; i ++) {
        ['mouseenter', 'focusin', 'touchstart'].forEach((e) => {
            projectSection[i].querySelector('.videoContainer').addEventListener(e, function() {
                if (screen.width > 1024) {
                    projectSection[i].querySelector('.projectDetails').style.display = "none";
                    projectSection[i].querySelector('.videoContainer').classList.add('movingVideoContainerToCenter');
                }
            })
        })
    }
}
app.hoverOnVideoThanMoveBack = () => {
    const projectSection = document.querySelectorAll('.projectSection > div');
    for (let i = 0; i <  projectSection.length; i ++) {
        ['mouseleave', 'focusout', 'touchmove'].forEach((e) => {
            projectSection[i].querySelector('.videoContainer').addEventListener(e, function() {
                projectSection[i].querySelector('.projectDetails').style.display = "block";
                projectSection[i].querySelector('.videoContainer').classList.remove('movingVideoContainerToCenter');
            })
        })
    }
}

//Hover on some skill icons
app.hoverOnSkillIcons = () => {
    ['mouseenter', 'focusin', 'touchstart', 'mousedown'].forEach((e) => {
        document.querySelector('#javascriptLogo').addEventListener(e, function() {
            document.querySelector('#javascriptLogo').src = './images/javascript.png';
        })
        document.querySelector('#htmlLogo').addEventListener(e, function() {
            document.querySelector('#htmlLogo').src = './images/html5.png';
        })
        document.querySelector('#cssLogo').addEventListener(e, function() {
            document.querySelector('#cssLogo').src = './images/css3.png';
        })
        document.querySelector('#reactLogo').addEventListener(e, function() {
            document.querySelector('#reactLogo').src = './images/react.png';
        })
        document.querySelector('#jqueryLogo').addEventListener(e, function() {
            document.querySelector('#jqueryLogo').src = './images/jquery.png';
        })
        document.querySelector('#sassLogo').addEventListener(e, function() {
            document.querySelector('#sassLogo').src = './images/sass.png';
        })
        document.querySelector('#apiLogo').addEventListener(e, function() {
            document.querySelector('#apiLogo').src = './images/api.png';
        })
        document.querySelector('#firebaseLogo').addEventListener(e, function() {
            document.querySelector('#firebaseLogo').src = './images/firebase.png';
        })
        document.querySelector('#gitLogo').addEventListener(e, function() {
            document.querySelector('#gitLogo').src = './images/git.png';
        })
        document.querySelector('#terminalLogo').addEventListener(e, function() {
            document.querySelector('#terminalLogo').src = './images/terminal.png';
        })
        document.querySelector('#teamworkLogo').addEventListener(e, function() {
            document.querySelector('#teamworkLogo').src = './images/teamwork.png';
        })
        document.querySelector('#responsiveLogo').addEventListener(e, function() {
            document.querySelector('#responsiveLogo').src = './images/responsive.png';
        })
        document.querySelector('#accessibilityLogo').addEventListener(e, function() {
            document.querySelector('#accessibilityLogo').src = './images/accessibility.png';
        })
    })
}
app.hoverOutSkillIcons = () => {
    ['mouseleave', 'focusout', 'touchmove', 'mouseup'].forEach((e) => {
        document.querySelector('#javascriptLogo').addEventListener(e, function() {
            document.querySelector('#javascriptLogo').src = './images/javascript01.png';
        })
        document.querySelector('#htmlLogo').addEventListener(e, function() {
            document.querySelector('#htmlLogo').src = './images/html501.png';
        })
        document.querySelector('#cssLogo').addEventListener(e, function() {
            document.querySelector('#cssLogo').src = './images/css301.png';
        })
        document.querySelector('#reactLogo').addEventListener(e, function() {
            document.querySelector('#reactLogo').src = './images/react01.png';
        })
        document.querySelector('#jqueryLogo').addEventListener(e, function() {
            document.querySelector('#jqueryLogo').src = './images/jquery01.png';
        })
        document.querySelector('#sassLogo').addEventListener(e, function() {
            document.querySelector('#sassLogo').src = './images/sass01.png';
        })
        document.querySelector('#apiLogo').addEventListener(e, function() {
            document.querySelector('#apiLogo').src = './images/api01.png';
        })
        document.querySelector('#firebaseLogo').addEventListener(e, function() {
            document.querySelector('#firebaseLogo').src = './images/firebase01.png';
        })
        document.querySelector('#gitLogo').addEventListener(e, function() {
            document.querySelector('#gitLogo').src = './images/git01.png';
        })
        document.querySelector('#terminalLogo').addEventListener(e, function() {
            document.querySelector('#terminalLogo').src = './images/terminal01.png';
        })
        document.querySelector('#teamworkLogo').addEventListener(e, function() {
            document.querySelector('#teamworkLogo').src = './images/teamwork01.png';
        })
        document.querySelector('#responsiveLogo').addEventListener(e, function() {
            document.querySelector('#responsiveLogo').src = './images/responsive01.png';
        })
        document.querySelector('#accessibilityLogo').addEventListener(e, function() {
            document.querySelector('#accessibilityLogo').src = './images/accessibility01.png';
        })
    })
}

//Avatar triggle button
app.avatarTriggle = () => {
    document.querySelector('#avatarButton').addEventListener('click', function(){
        document.querySelector('#profileImage').classList.toggle('avatarShows');
        document.querySelector('#avatarButton').classList.toggle('buttonClicked');
    })
}


app.init = function () {
    //Page loading
    app.loadingNumber();
    app.loadingPageDone();
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
    //Download resume
    app.downloadResume();
    //Hover skill icon
    app.hoverOnSkillIcons();
    app.hoverOutSkillIcons();
    //Scrolling trigger functions
    window.addEventListener('scroll', function(){
        app.showingNavAside();
        app.showingFollowMeAside();
        app.navIndicator();
        app.projectTittles();
    })
    //When refresh page
    app.showingNavAside();
    app.showingFollowMeAside();
    app.navIndicator();
    app.projectTittles();
    //Profile picture change
    app.profileImage();
    app.profileImageBack();
    //Hover and move the location of video
    app.hoverOnVideoThanMove();
    app.hoverOnVideoThanMoveBack();
    //Avatar triggle
    app.avatarTriggle();
}

app.init();