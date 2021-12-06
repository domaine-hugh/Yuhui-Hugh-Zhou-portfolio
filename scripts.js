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

// app.headerPrinter = () => {
//     const content = ["former electical engineer", "husband and father", "front-end web developer!"];
//     const printingContainer = document.querySelector('#printingArea');
//     const printing = (index) => {
//         if (index < content.length) {
//             const text = content[index];
//             printingContainer.innerHTML = text;
//             for (let i = 0 ; i < text.length ; i ++) {
//                 console.log(i);

//                 printingContainer.style.animationTimingFunction = `step(" + ${printingContainer.textContent.length} + "), step(1)`;
//                 printingContainer.style.animationName = `typing${text.length}`;
//                 printingContainer.style.animationDuration = `${text.length / 2}s, 0.5s`;
//                 console.log(printingContainer.style.animationTimingFunction);
//             }
//             setTimeout(() => {
//                 printing(index + 1)
//             }, text.length * 500)
//         } else {
//             printing(0);
//         }
//     }
//     printing(0);
// }

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



app.init = function () {
    // window.addEventListener('load', function() {
    //     console.log('All assets are loaded')
    // })
    //About Section switch function
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

    //Calling display project videos
    app.hoverDisplayVideo();

    //Printing effect(header)
    app.typing();

}

app.init();