// import {banhoGato, tosaGato, alimentoGato} from './mod-gatos.js';

import * as locadora from './mod-ESM-video.js';

//  * significa tudo, e 'as' é "como" com sentido  apelido


console.log(locadora.alugarFilme('Jogos Mortais X', '2026-20-06', 'R$ 10,00'));

 console.log(locadora.devolverFilme('Jogos Mortais X', '20-06-2026', 'R$ 10,00', '28-06-2026'));

  console.log(locadora.alugarFilme('Vingadores Ultimato', '30-06-2026', 'R$ 30,00', '08-07-2026'));

   console.log(locadora.devolverFilme('Vingadores Ultimato', '30-06-2026', 'R$ 30,00', '08-07-2026'));


