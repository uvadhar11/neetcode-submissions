class MinStack {
    constructor() {
        this.stack = [];
        this.min = Number.MAX_VALUE;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push([val, this.min]); // [val, old min value]
        // ^ uisng old min value in case of deletions
        if (val < this.min) { // update current min value
            this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        // if the item being popped is the minimum, do operations
        if (this.top() === this.min) {
            this.min = this.stack.pop()[1];
        } 
        else {
            // we are not popping the minimum, so we can just pop
            this.stack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
