class KeyBinder {
	constructor() {
		this.keys = new Set()
		this.keyEvents = new Map()
	}

	keyTest(keyCode) {
		return this.keys.has(keyCode)
	}

	addKeyEvent(keyCode, callback) {
		this.keyEvents.set(keyCode, callback)
	}

	onkeydown() {
		this.keys.add(event.keyCode) //keys 셋에 키코드를 넣는다
		this.keyEvents.has(event.keyCode) && this.keyEvents.get(event.keyCode)() //keyEvents 맵에 키코드를 찾아보고 실행
	}

	onkeyup() {
		this.keys.delete(event.keyCode) //키를 떼면 keys 셋에서 키코드를 제거
	}
}
