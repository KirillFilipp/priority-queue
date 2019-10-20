class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.parent = this;
		if (this.left && this.right) {
			return this;
		}
		if (this.left) {
			this.right = node;
			return this;
		}
		this.left = node;
	}

	removeChild(node) {
		if (node == this.left) {
			this.left = null;
		} else if (node == this.right) {
			this.right = null;
		} else {
			return error;
		}
		node.parent = null;
	}

	remove() {
		if (!this.parent) {
			return this;
		} else {
			this.parent.removeChild(this);
		}

	}

	swapWithParent() {

	}
}
module.exports = Node;