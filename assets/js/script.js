var i = 0,
  text,
  text = 'Hi, my name is Well Lopes'

function typing() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i)
    i++
    setTimeout(typing, 150)
  }
}

typing()
