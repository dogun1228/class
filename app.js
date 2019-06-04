const keyBinder = new KeyBinder()
window.onkeydown = keyBinder.onkeydown.bind(keyBinder)
window.onkeyup = keyBinder.onkeyup.bind(keyBinder)

const canvas = new Canvas(document.getElementById('main'), '#D8D8D8') //캔버스 객체를 만들어 canvas에 지정, canvas의 색을 바꿈

class character {
	constructor(size, color, motion) {
		this.x = 0
		this.y = 0
		this.size = size
		this.motion = motion.bind(this)
		this.color = color
	}
	draw(canvas) {
		canvas.drawCircle(this.x, this.y, this.size, this.color)
	}
}

const chars = []

const hero = new character(50, '#FF99BB', function() {
	if (keyBinder.keyTest(87)) this.y -= 1
	if (keyBinder.keyTest(83)) this.y += 1
	if (keyBinder.keyTest(65)) this.x -= 1
	if (keyBinder.keyTest(68)) this.x += 1
	console.log(this.x + ' ' + this.y)
})
chars.push(hero)

const loop = window.setInterval(() => {
	chars.forEach(char => char.motion())
	canvas.clear()
	chars.forEach(char => char.draw(canvas))
}, 10)
