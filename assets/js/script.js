let nameProjects = document.querySelector(".main__content")

function showProjects() {
    for (let i = 0; i < projects.length; i++) {
        nameProjects.innerHTML += "<div class='main__projects'><a href='" + projects[i].link + "'target=_blank>" + "<p class='main__name'>" + projects[i].text + "</p>" + "<img class='main__img' src='" + projects[i].image + "'>" + "</a>"+ "</div>"
    }
}

showProjects()

function load() {
    let count = 6
    $(".main__projects").slice(count).hide()

    $(".main__button").click(function() {
        count += 3
        for (let i = 0; i < count; i++) {
            $(".main__projects").eq(i).show(800)
        }
    })
}

load()

let crescent = document.getElementById("main__crescent")
let decrescent = document.getElementById("main__decrescent")

function crescentOrder() {
    projects.sort(function(a,b) {
        if (a.text < b.text) {
            return - 1
        }
        return 0
    })
    nameProjects.innerHTML = ""
    showProjects()
}

function decrescentOrder() {
    projects.sort(function(a,b) {
        if (a.text > b.text) {
            return - 1
        }
        return 0
    })
    nameProjects.innerHTML = ""
    showProjects()
}