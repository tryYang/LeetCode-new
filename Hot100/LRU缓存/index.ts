class Node {
    key: number;
    value: number;
    next: Node | null;
    prev: Node | null;
    constructor(key: number = 0, value: number = 0) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class LRUCache {
    capacity: number
    cache: Map<number, Node>
    head: Node
    constructor(capacity: number) {
        this.head = new Node()
        this.head.prev = this.head
        this.head.next = this.head
        this.cache = new Map<number, Node>()
        this.capacity = capacity
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1
        const node = this.cache.get(key)
        if (this.head.next !== node) {
            this.removeNode(node)
            this.moveToHead(node)
        }
        return node.value

    }

    put(key: number, value: number): void {
        const getValue = this.get(key)
        if (getValue !== -1) {
            if (getValue !== value) this.cache.get(key).value = value
        }
        else {
            const newNode = new Node(key, value)
            this.moveToHead(newNode)
            if (this.capacity < 0) this.removeNode(this.head.prev)
        }
    }
    insert(preNode: Node, insertNode: Node) {
        insertNode.next = preNode.next
        preNode.next = insertNode
        insertNode.next.prev = insertNode
        this.cache.set(insertNode.key, insertNode)
        this.capacity--
    }
    moveToHead(val: Node) {
        this.insert(this.head, val)
    }
    removeNode(node: Node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        this.cache.delete(node.key)
        this.capacity++
    }

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */