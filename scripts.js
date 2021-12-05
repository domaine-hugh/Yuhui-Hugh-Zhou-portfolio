const app = {
    props: {

    },
    ultils: {
        listenToRange: function (target, output) {
            document.querySelector(target).addEventListener('change', function (e) {
                console.log(e.target.value);
                output = e.target.value
            })
        }
    }
}


app.init = function () {
console.log('start!');
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

}

app.init();