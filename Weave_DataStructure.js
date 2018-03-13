//Implement the 'Weave Functions. weave receive  two queues as arguments and combines the contents
//of each into a new third queue which should contain the alternating contents of both the queue

//====================Start==============================================
//first we gona implement queue with peek method to check the last record to be returned out

const QUEUE = class Queue {
    constructor() {
        this.array = [];
    }
    add(record) {
        this.array.unshift(record);
    }
    remove() {
        this.array.pop();
    }
    peek() {
        return this.array[this.array.length - 1];
    }
}

function weave(souceOne, sourceTwo) {
    const q = new QUEUE();
    while (souceOne.peek() || sourceTwo.peek()) {
        if (souceOne.peek()) {
            q.add(souceOne.remove());
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}
console.log(weave([1, 2], [3, 4]));