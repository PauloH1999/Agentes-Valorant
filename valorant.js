// =====================================================================Brimstone
const brin= document.getElementById("Brimstone").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe  width="100%" height="100%" src="https://www.youtube.com/embed/7yHnJ_oNxTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    document.getElementById("iconQ").innerHTML=` <img id="imgQ" src="./Campeoes Val/brimstone/q.webp" alt=""> 
    <p>Q - INCENDIÁRIO <br> Um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.</p> `

    document.getElementById("iconE").innerHTML=` <img id="imgE" src="./Campeoes Val/brimstone/e.webp" alt=""> 
    <p>E - FUMAÇA CELESTE <br> Um mapa tático. DISPARE para marcar locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.</p>`
    
    document.getElementById("iconC").innerHTML=` <img id="imgC"src="./Campeoes Val/brimstone/c.webp" alt=""> 
    <p>C - SINALIZADOR ESTIMULANTE <br> Um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores.</p>`
    
    document.getElementById("iconX").innerHTML=` <img id="imgX" src="./Campeoes Val/brimstone/x.webp" alt=""> 
    <p>X - ATAQUE ORBITAL br Um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada.</p>`


})

// =====================================================================Viper
const viper= document.getElementById("Viper").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe  width="100%" height="100%" src="https://www.youtube.com/embed/9dOSy0EhLfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/viper/q.webp" alt="">
    <p>Q - NUVEM DE VENENO <br> Um emissor de gás. FOGO para lançar o emissor que permanece perpetuamente ao longo da rodada. REUTILIZE a capacidade de criar uma nuvem de gás tóxico ao custo de combustível. Esta habilidade pode ser REUTILIZADA mais de uma vez e pode ser escolhida para ser REIMPLOADA.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/viper/e.webp" alt="">
    <p>E - TELA TÓXICA <br> Um lançador de emissor de gás. FIRE para implantar uma longa linha de emissores de gás. REUTILIZE a capacidade de criar uma parede alta de gás tóxico ao custo de combustível. Esta habilidade pode ser REUTILIZADA mais de uma vez.</p>`
    
    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/viper/c.webp" alt="">
    <p>C - PICADA DE COBRA <br> Um lançador químico. DISPARE para lançar uma vasilha que se estilhaça ao atingir o chão, criando uma zona química persistente que danifica e retarda os inimigos.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/viper/x.webp" alt="">
    <p>X - POÇO DA VÍBORA <br> Um pulverizador químico. FIRE para pulverizar uma nuvem química em todas as direções ao redor do Viper, criando uma grande nuvem que reduz o alcance da visão e a saúde máxima dos jogadores dentro dela.</p>`

})
// =====================================================================Omen


const omen=  document.getElementById("Omen").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_jJdWy6bDj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/omem/q.webp" alt="">
    <p>Q - PARANOIA <br> INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/omem/e.webp" alt="">
    <p>E - MANTO SOMBRIO <br> Um orbe sombrio e veja o indicador de alcance. DISPARE para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO ALTERNATIVO enquanto mira para afastar o marcador. SEGURE a tecla de habilidade enquanto mira para aproximar o marcador.</p>`
    
    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/omem/c.webp" alt="">
    <p>C - PASSOS TENEBROSOS <br> Uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/omem/x.webp" alt="">
    <p>X - SALTO DAS SOMBRAS <br> Um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte.</p>`

})

// =====================================================================Killjoy

const killJoy= document.getElementById("Killjoy").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ua-iIRQDY8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/kill joy/q.webp" alt="">
    <p>Q - ROBÔ DE ALARME <br> Um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/kill joy/e.webp" alt="">
    <p>E - TORRETA <br> Uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.</p>`
    
    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/kill joy/c.webp" alt="">
    <p>C - NANOENXAME <br> Uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/kill joy/x.webp" alt="">
    <p>X - CONFINAMENTO <br> Dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.</p>`

})

// =====================================================================Cypher

const cypher= document.getElementById("Cypher").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SgbqFtRRgLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/cypher/q.webp" alt="">
    <p>Q - JAULA CIBERNÉTICA <br> INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/cypher/e.webp" alt="">
    <p>E - CÂMERA DE VIGILÂNCIA <br> Uma câmera de vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido.</p>`

    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/cypher/c.webp" alt="">
    <p>C - FIO-ARMADILHA <br> Um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/cypher/x.webp" alt="">
    <p>X - ASSALTO NEURAL <br> Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.</p>`

})

// =====================================================================Sova


const sova= document.getElementById("Sova").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OZ76UP-c8Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/sova/q.webp" alt="">
    <p>Q -  FLECHA DE CHOQUE <br> Um arco com uma flecha de choque. DISPARE para lançar a flecha que explode ao impacto, causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/sova/e.webp" alt="">
    <p>E - FLECHA RASTREADORA <br> Um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e revela a localização de quaisquer inimigos próximos da sua linha de visão. SEGURE O DISPARO para ampliar o alcance do projétil. Use o DISPARO SECUNDÁRIO para adicionar até dois ricochetes à flecha.</p>`

    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/sova/c.webp" alt="">
    <p>C - DRONE CORUJA <br> Um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. Dardos revelam a localização de quaisquer jogadores atingidos.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/sova/x.webp" alt="">
    <p>X - FÚRIA DO CAÇADORL <br> Um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo.</p>`

})

// =====================================================================Sage

const sage= document.getElementById("Sage").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1aRwM_QsqQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Sage/q.webp" alt="">
    <p>Q -  ORBE DE LENTIDÃO <br> Um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Sage/e.webp" alt="">
    <p>E - ORBE CURATIVO <br> Um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo.</p>`

    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Sage/c.webp" alt="">
    <p>C - ORBE DE BARREIRA <br> Um orbe de barreira. DISPARE para posicionar uma parede sólida. DISPARO ALTERNATIVO gira o marcador de alvo.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Sage/x.webp" alt="">
    <p>X - RESSURREIÇÃO <br> Uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa.</p>`

})

// =====================================================================Phoenix

const Phoenix= document.getElementById("Phoenix").addEventListener("click", function (){
    document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ttJMFW2wUQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


    document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Phoenix/q.webp" alt="">
    <p>Q -  BOLA CURVA <br> Um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita.</p>`

    document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Phoenix/e.webp" alt="">
    <p>E - MÃOS QUENTES <br> Uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos.</p>`

    document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Phoenix/c.webp" alt="">
    <p>C - LABAREDA <br> Uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira.</p>`

    document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Phoenix/x.webp" alt="">
    <p>X - RENASCIMENTO <br> INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa.</p>`

})

// =====================================================================Jett

const Jett= document.getElementById("Jett").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-cPLXswVsvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Jett/q.webp" alt="">
<p>Q - CORRENTE ASCENDENTE <br> 
INSTANTANEAMENTE impele Jett bem alto no ar.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Jett/e.webp" alt="">
<p>E - BRISA DE IMPULSO <br> 
INSTANTANEAMENTE impele Jett na direção atual de movimento dela. Se estiver parada, Jett será impelida para a frente.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Jett/c.webp" alt="">
<p>C - ERUPÇÃO DAS BRUMAS <br> 
Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Jett/x.webp" alt="">
<p>X - TORMENTA DE AÇO <br> 
Um conjunto de facas altamente precisas que são recarregadas ao matar um oponente. DISPARE para lançar uma única faca contra o alvo. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo.</p>`

})

// =====================================================================Reyna

const Reyna= document.getElementById("Reyna").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IzsQNYrq9AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Reyna/q.webp" alt="">
<p>Q - DEVORAR <br>
Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe. </p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Reyna/e.webp" alt="">
<p>E - DISPENSAR <br>
INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa. </p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Reyna/c.webp" alt="">
<p>C - OLHAR VORAZ <br>
Um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Reyna/x.webp" alt="">
<p>X - IMPERATRIZ <br>
INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate. </p>`

})

// =====================================================================Raze

const Raze= document.getElementById("Raze").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/2-uAL__pp_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Raze/q.webp" alt="">
<p>Q - CARGA DE EXPLOSIVOS <br>
INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Raze/e.webp" alt="">
<p>E - CARTUCHOS DE TINTA <br>
Uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Raze/c.webp" alt="">
<p>C - BOMBINHO <br>
EQUIPE um Bombinho. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los. </p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Raze/x.webp" alt="">
<p>X - ESTRAGA-PRAZERES <br>
Um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa.</p>`

})

// =====================================================================Breach

const Breach= document.getElementById("Breach").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rux0HjzKQbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Breach/q.webp" alt="">
<p>Q - ESTOPIM <br>
Uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Breach/e.webp" alt="">
<p>E - FALHA TECTÔNICA <br>
Um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Breach/c.webp" alt="">
<p>C - PÓS-CHOQUE <br>
Uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Breach/x.webp" alt="">
<p>X - ONDA TROVEJANTE <br>
Uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.</p>`

})

// =====================================================================Skye

const Skye= document.getElementById("Skye").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/C3QTyMXi-WE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Skye/q.webp" alt="">
<p>Q - PREDADOR EXPLOSIVO <br>
Um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos. </p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Skye/e.webp" alt="">
<p>E - LUZ DESBRAVADORA <br>
Um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Skye/c.webp" alt="">
<p>C - REFLORESCER <br>
Um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Skye/x.webp" alt="">
<p>X - RASTREADORES <br>
Um amuleto de rastreador. DISPARE para enviar três rastreadores que localizarão os três inimigos mais próximos. Se um rastreador alcançar um alvo, ele causará visão turva a esse inimigo.</p>`

})

// =====================================================================Yoru

const yoru= document.getElementById("Yoru").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GdOEQv-zQVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/yoru/q.webp" alt="">
<p>Q - PONTO CEGO <br>
Um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida. </p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/yoru/e.webp" alt="">
<p>E - PASSAGEM DIMENSIONAL <br>
Um fluxo dimensional. DISPARE para lançá-lo à frente. Use o MODO SECUNDÁRIO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/yoru/c.webp" alt="">
<p>C - FALCATRUA <br>
Um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/yoru/x.webp" alt="">
<p>X - ESPIONAGEM DIMENSIONAL <br>
Uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora.</p>`

})

// =====================================================================Astra

const astra= document.getElementById("Astra").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-ylVnuPWlJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/astra/q.webp" alt="">
<p>Q - PULSO NOVA <br>
Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/astra/e.webp" alt="">
<p>E - NEBULOSA <br>
Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar." </p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/astra/c.webp" alt="">
<p>C - POÇO GRAVITACIONAL <br>
Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/astra/x.webp" alt="">
<p>X - FORMA ASTRAL / DIVISA CÓSMICA <br>
ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO ALTERNATIVO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.</p>`

})

// =====================================================================KAYIO

const KAYIO= document.getElementById("KAYIO").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eU1l7eBy2_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/KAYIO/q.webp" alt="">
<p>Q - GRANADA/CLARÃO <br>
Uma granada de clarão. DISPARE para jogá-la. A granada de clarão explode após um curto período, cegando qualquer um que estiver na linha de visão.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/KAYIO/e.webp" alt="">
<p>E - PONTO/ZERO<br>
Uma lâmina de supressão. DISPARE para atirá-la. A lâmina se fixa à primeira superfície que atingir e explode, suprimindo qualquer um que estiver dentro do raio da explosão.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/KAYIO/c.webp" alt="">
<p> C - FRAG/MENTO<br>
Um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão.</p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/KAYIO/x.webp" alt="">
<p>X - ANULAR/CMD <br>
INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que fortalece KAY/O e emite grandes pulsos energéticos a partir de onde ele estiver. Inimigos atingidos pelos pulsos são suprimidos por um curto período.</p>`

})

// =====================================================================Chamber

const chamber= document.getElementById("Chamber").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/FUoqAn5T4h4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/chamber/q.webp" alt="">
<p>Q - CAÇADOR DE CABEÇAS <br>
ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/chamber/e.webp" alt="">
<p>E - RENDEZVOUS <br>
POSICIONA duas âncoras de teleporte. Enquanto estiver no chão e dentro do alcance de uma das âncoras, REATIVE para teleportar rapidamente até a outra âncora. Âncoras podem ser recuperadas para serem REPOSICIONADAS. </p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/chamber/c.webp" alt="">
<p>C - MARCA REGISTRADA <br>
POSICIONA uma armadilha que busca por inimigos. Quando um inimigo visível entrar no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que reduz a velocidade dos jogadores. </p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/chamber/x.webp" alt="">
<p>X - TOUR DE FORCE <br>
ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto. Abater um inimigo cria um campo duradouro que reduz a velocidade dos jogadores dentro dele.</p>`

})

// =====================================================================Neon

const Neon= document.getElementById("Neon").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dtx8CgjRmqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/Neon/q.webp" alt="">
<p>Q - RICOCHETE ELÉTRICO <br>
INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão. </p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/Neon/e.webp" alt="">
<p>E - EQUIPAMENTO VOLTAICO <br>
INSTANTANEAMENTE canaliza o poder de Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o DISPARO ALTERNATIVO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/Neon/c.webp" alt="">
<p> C - VIA EXPRESSA<br>
DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão e causam dano aos inimigos que as atravessarem. </p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/Neon/x.webp" alt="">
<p>X - SOBRECARGA<br>
Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento. A duração é redefinida com cada abate.</p>`

})

// =====================================================================Fade

const fade= document.getElementById("Fade").addEventListener("click", function (){
document.getElementById("video").innerHTML=`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/UMzKD73cs3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


document.getElementById("iconQ").innerHTML=`<img src="./Campeoes Val/fade/q.webp" alt="">
<p>Q – CLAUSURA <br>
Um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.</p>`

document.getElementById("iconE").innerHTML=`<img src="./Campeoes Val/fade/e.webp" alt="">
<p>E – ASSOMBRAR <br>
Uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.</p>`

document.getElementById("iconC").innerHTML=`<img src="./Campeoes Val/fade/c.webp" alt="">
<p>C – ESPREITADOR <br>
Um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo. </p>`

document.getElementById("iconX").innerHTML=`<img src="./Campeoes Val/fade/x.webp" alt="">
<p>X – VÉU DA NOITE <br>
EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.</p>`

})
