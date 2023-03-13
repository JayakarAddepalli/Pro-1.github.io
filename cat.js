function Switchoff(){
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switch").textContent = "Switched Off"
    document.getElementById("switchoff").style.backgroundColor = "rgb(203,203,203)"
    document.getElementById("switchon").style.backgroundColor = "green"
}

function Switchon(){
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switch").textContent = "Switched On"
    document.getElementById("switchoff").style.backgroundColor = "red"
    document.getElementById("switchon").style.backgroundColor = "rgb(203,203,203)"
}