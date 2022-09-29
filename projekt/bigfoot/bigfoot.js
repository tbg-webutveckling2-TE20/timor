function loadBigfoot() {
    document.getElementById('Bigfoot').src = 'bigfoot.png'                                     
}

function moveBigFoot() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    alert('Du Hittade Bigfoot!')
    var picture = document.getElementById('Bigfoot')
    var x = Math.random() * width
    var y = Math.random() * height

    picture.style.top = x + 'px'
    picture.style.left = y + 'px'


}