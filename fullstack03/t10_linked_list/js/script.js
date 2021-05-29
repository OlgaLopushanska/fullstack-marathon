class MyList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(value) {
        if(this.data == null && this.next == null) {
            this.data = value;
            return;
        }
        let current = this;
        while(current.next != null)
            current = current.next;
        current.next = new MyList(value);
    }

    remove(value) {
        if(value == this.data) {
            if (this.next != null) {
                this.data = this.next.data;
                this.next = this.next.next;
            } else
                this.data = null;
        }
        else {
            let current = this;
            while(current.next != null) {
                if(value == current.next.data){
                    current.next = current.next.next;
                    return;
                }
            }
        }
    }

    contains(value) {
        let res = false;
        let current = this;
        while(current != null) {
            if(value == current.data){
                return true;
            }
            current = current.next;
        }
    }

    clear() {
        this.data = null;
        this.next = null;
    }

    count() {
        if (this.data == null && this.next == null)
            return 0;
        let current = this;
        let c = 1;
        while (current.next != null) {
            c++;
            current = current.next;
        }
        return c;
    }

    log() {
        if (this.data == null && this.next == null)
            return;
        let current = this;
        let w = "";
        while (current != null) {
            w = w + current.data + (current.next != null ? ", " : "");
            current = current.next;
        }
        console.log(w);
    }
    *[Symbol.iterator] () {
        let current = this;
        while (current != null) {
            yield current.data;
            current = current.next;
        }

    }
}


function createLinkedList(arr) {
    let t = new MyList(null);
    for(let p = 0; p < arr.length; p++)
        t.add(arr[p]);
    return t;
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""
