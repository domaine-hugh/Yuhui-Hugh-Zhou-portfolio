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
const text = 'Lorem ipsum dummy text blabla.';
const typingContainer = document.getElementById("printingArea");
let index = 0;
let isAdding = true;

function typing()   {

    setTimeout(function () {
        typingContainer.innerText = text.slice(0, index);

        if (isAdding) {
            if (index > text.length) {
                isAdding = false;
                setTimeout(function () {
                    typing()
                }, 2000);
                return;
            } else {
                index++;
            }
        } else {
            if (index === 0) {
                isAdding = true;
            } else {
                index--;
            }
        }
        typing();
    }, 100)
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
    typing();

}

app.init();