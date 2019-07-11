module.exports = class Helper {
  static objectSkeletonMatches(r, t, strict){
    /*
    | Deeply compare whether the skeleton for the received object matches
    | the provided target. Array size within properties is not checked unless
    | strict == true.
    | Properties whose value types can vary should have 'null' provided
    | for the target's value
    |
    | Example target:
    | target = {
    |   property1: null,
    |   property2: [{
    |     innerProp1: {
    |       deepProp1: null,
    |       deepProp2: null
    |     }
    |   }]
    | }
    */
    let loose = !strict || false
    let rk = Object.keys(r).sort()
    let tk = Object.keys(t).sort()
    if(rk.length != tk.length){
      return false
    }
    for(var i = 0; i < rk.length; i++){
      let rProp = rk[i]
      let tProp = tk[i]
      if(rProp != tProp){
        return false
        break
      } else if(loose && Array.isArray(r[rProp]) && Array.isArray(t[tProp])){
        if(!r[rProp].every(cur => {
            return Helper.objectSkeletonMatches(cur, t[tProp][0])
          })){
          return false
        }
      } else if(typeof r[rProp] == 'object' && typeof t[tProp] == 'object'){
        if(!Helper.objectSkeletonMatches(r[rProp], t[tProp])){
          return false
        }
      } else if(typeof r[rProp] != typeof t[tProp] && t[tProp] != null){
        return false
      }
    }
    return true
  }
}
