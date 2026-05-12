//  module.exports = 
//       function multiplicaPorDois (n1, n2) {
//      const res = `resultado:  ${n1 * n2}`;
//      return res; 
//      }

function dividePorDois (n1, n2) {
     const res = `resultado:  ${n1 / n2}`;
     return res; 
     }

     function multiplicaPorDois (n1, n2) {
     const res = `resultado:  ${n1 * n2}`;
     return res; 
     }
     
     function somaPorDois (n1, n2) {
     const res = `resultado:  ${n1 + n2}`;
     return res; 
     }

     function subtraiPorDois (n1, n2) {
     const res = `resultado:  ${n1 - n2}`;
     return res; 
     }

     module.exports = {
        multiplicaPorDois,
        dividePorDois,
        somaPorDois,
        subtraiPorDois,
     }