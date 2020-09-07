class InsertionSort {
    constructor() {
        this.list = [];


    }

    getList() {
        return this.list;
    }

    sort(a) {
        let N = a.length;
        for (var i = 0; i < N; i++) {
            var min = i;
            var j = i;
            while (j > 0 && a[j] < a[j - 1]) {
                this.exch(a, i, min);
                j-=1;
            }
        }
    }

    exch(a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
        this.list.push(a.slice());
    }


}
