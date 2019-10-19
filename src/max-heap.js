const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {

	}

	pop() {
		const args = [...arguments];
		args.pop();
		return args;
	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length < 1;
	}

	clear() {
		this.root.data = null;
		this.parentNodes.data = null;
		this.length = 0;
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;