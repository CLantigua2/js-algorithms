class HashTable {
    constructor(value) {
        this.value = value
        this.list = []
        this.size = this.list * 2
    }

    printIt() {
        console.log(this.list)
    }

    hashIt(string, size) {
        let hash = 0
        for (let i = 0; i < string.length; i++) {
            hash += string.charAt(i)
        }
        return hash % size
    }

    add(key, value) {
        let index = this.hashIt(key, this.size)
        let inserted = false
        if (this.list[index] === undefined) {
            this.list[index] = [[key, value]]
        } else {
            for (let i = 0; i < this.list[index].length; i++) {
                if (this.list[index][i][0] === key) {
                    this.list[index][i][1] = value
                    inserted = true
                }
            }
        } if (inserted === false) {
            this.list[index].push([key, value])
        }
    }

    remove(key) {
        let index = this.hashIt(key, this.size)
        if (this.list[index].length === 1 && this.list[index][0][0] === key) {
            delete this.list[index]
        } else {
            for (let i = 0; i < this.list[index]; i++) {
                if (this.list[index][i][0] === key) {
                    delete this.list[index][i]
                }
            }
        }
    }
}

const table = new HashTable()

const myList = [['Carlos', '111-1111'], ['Jennifer', '222-2222'], ['Nataly', '333-3333'], ['Farrah', '444-4444']]
for (let i = 0; i < myList.length; i++) {
    table.add(myList[i][0], myList[i][1])
}

table.printIt()
table.remove('Farrah')
table.printIt()