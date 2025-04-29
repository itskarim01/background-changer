// Create a website than changes background every 3 seconds 
let color = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']

setInterval(() => {
    let randomColor = Math.floor(Math.random() * color.length)
    document.body.style.backgroundColor = color[randomColor]
}, 3000);

// setTimeout to display hello worid every to see the alert after 3 seconds
function message() {
    alert('Hello World');
}

setTimeout(message, 3000)