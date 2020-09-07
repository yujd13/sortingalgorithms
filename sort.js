
class MergeSort{
  constructor(){
    this.list = [];
  }
  
  
 sleep(seconds) 
{
  var e = new Date().getTime() + (seconds);
  while (new Date().getTime() <= e) {}
}

getList(){
  return this.list;
}

  merge(a, lo, mid, hi){
    var aux = a.slice();    
    var i = lo; 
    var j = mid+1;
    for( var k = lo; k <= hi; k++){
      if( i > mid){ 
      a[k] = aux[j++];
    }
      else if( j > hi){
      a[k] = aux[i++]; 
    }
      else if( aux[i] > aux[j]) {
      a[k] = aux[j++]; 
    }
      else{ 
        a[k] = aux[i++]; 
    }
    
    this.list.push(a.slice());
        }

      
      
    }
    
    sort(a){
      if( a. length <=1){
        return a;
      }
      var lo = 0;
      var hi = a.length-1;
      this._sort(a,lo,hi);
      return a;
    }
    
    _sort(a, lo, hi){
    if( hi <= lo) { return; }
    var mid = lo + Math.floor((hi -lo)/2);
    this._sort(a, lo, mid);
    this._sort(a, mid+1, hi);
    this.merge(a, lo, mid, hi);
  }
  

  
  
}
