let inp = document.querySelector("#list_inp")
let add = document.querySelector(".pushable")
let div_list = document.querySelector(".lists_div")
let clear = document.querySelector("#clear")
let inp_ch = document.querySelector("#_checkbox-26")
let mark = document.querySelector("#click_sound")
let trush = document.querySelector("#trush")
let back = document.querySelector("#back")

inp_ch.addEventListener("click", function () {

})

inp.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        add.click()
    }
})

add.addEventListener("click", function (event) {
    event.preventDefault()
    if (inp.value.length == "") return null
    const list = inp.value
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");

 
    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("fill", "currentColor");
    path1.setAttribute("d", "M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z");

   
    svg.appendChild(path1);
    svg.style.color = "red"
    svg.style.right = "20px"
    const div = document.createElement("div")
    const check = document.createElement("div")
    const div_left = document.createElement("div")
    div.setAttribute("class", "js_div")
    check.setAttribute("class", "checkbox-wrapper")
    const check_box = document.createElement("input")
    const label = document.createElement("label")
    const check2 = document.createElement("div")
    check_box.setAttribute("id", "_checkbox-26")
    check_box.setAttribute("type", "checkbox")
    label.setAttribute("for", "_checkbox-26")
    check2.setAttribute("class", "tick_mark")
    check.append(check_box)
    label.append(check2)
    check.append(label)
    const li_div = document.createElement("p")
    li_div.textContent = list
    li_div.style.position = "relative"
    const hr = document.createElement("hr")
    hr.style.width = "55%"
    hr.style.marginLeft = "40px"
    hr.style.display = "none"
    hr.style.position = "absolute"
    div_left.setAttribute("class", "js_div")
    div_left.style.marginInline = "0px"
    div_left.style.paddingInline = "0px"
    div_left.append(check)
    div_left.append(li_div)
    div.append(div_left)
    div.append(hr)
    div.append(svg)
    div_list.append(div)
    inp.value = ""
    check.addEventListener("click", function () {
        hr.style.display = "flex"
        label.style.backgroundColor = "red"
        mark.currentTime = 0.2
        mark.play()
    })
    back.addEventListener("click",function(){
        hr.style.display = "none"
        label.style.backgroundColor = "#4158D0"
    })
    svg.addEventListener("click", function(){
        div.style.display = "none"
    })
})


clear.addEventListener("click", function () {
    inp.value = ""
    trush.currentTime = 0.5
    trush.play()
})