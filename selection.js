class SelectionSort {
    constructor() {
      this.list = [];


    }
    
    getList(){
      return this.list;
    }
    
    sort(a) {
        let N = a.length;
        for (var i = 0; i < N; i++) {
            var min = i;
            for (var j = i + 1; j < N; j++) {
                if (a[j] < a[min]) {
                    min = j;
                }
            }
           this.exch(a, i, min);
        }
    }

    exch(a, i, j) {
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
        this.list.push(a.slice());
    }


}
