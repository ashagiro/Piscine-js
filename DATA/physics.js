function getAcceleration(n) {
    if (n.f && n.m) {
        return n.f / n.m
    }
    if (n.Δv && n.Δt) {
        return n.Δv / n.Δt
    }
    if (n.d && n.t) {
       return 2 * n.d / (n.t * n.t)
    }
    return "impossible"
}

// var c = {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
//   }
  

// console.log(getAcceleration({ f: 10, m: 5 }))
// console.log(getAcceleration(c))
