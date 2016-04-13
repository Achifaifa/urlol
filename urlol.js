//THX to http://glench.com/hash/ for the idea and the better way to do this!
step=0
beat=0
starttime=Date.now()
width=40

ek=[
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                .....                           ",
"                                              ..    ..                          ",
"                                              .      ..                         ",
"                                             ..       .                         ",
"                                             .        ..                        ",
"                                             .        .                         ",
"                                             .        .                         ",
"                                             .       ..                         ",
"                                             .       ..                         ",
"                                             .       .                          ",
"                    ...                      .      ..                     .... ",
"                  ..  ..                     ..     ..                    ..  ..",
"                 ..    ..                     .     .                    ..    .",
"                 .      ..                    .    ..                    .      ",
"                 .      ..                    .    .                    ..      ",
"                 .       .                    .   ..                    .      .",
"                 ..      ..                    .  .                    ..     ..",
"                  .      ..                    ....                    .     .. ",
"                   .      .                     ..                     .    ..  ",
"                    .     ..                                           .   ..   ",
"                     .    ..                                          ..  ..    ",
"                      .    .                    ................       ....     ",
"                       ..  .               ........................    ..       ",
"                        ....           .............................            ",
"                          .         .................................           ",
"                                 .............                   .....          ",
"                              ............                        ....          ",
"                            ..........                             ....         ",
"                          .........                                ....         ",
"                        .........                                   ....        ",
"                      ........                                      ....        ",
"                     .......                                        .....       ",
"                   .......                                           ....       ",
"  ..              ......                                             ....       ",
" .....            .....                                               ....      ",
"..   ..          .....                                                ....      ",
".     ...        ....                                                 ....      ",
"        ..       ....                                                  ....     ",
"         ..      ....                                                  ....     ",
".          .     ...                                                   ....     ",
" ....     ..     ...                       ..........                   ....    ",
"    .......      ...                     ..............                 ....    ",
"                 ...                   .....        ....                ....    ",
"                 ...                  ...             ...               ....    ",
"                 ...                 ...               ...               ....   ",
"                 ....               ...                 ...              ....   ",
"                 ....              ...                   ..              ....   ",
"                 ....              ..         ......     ...             ....   ",
"                 ....             ...       ..........    ..              ....  ",
"                 ....             ..       ............   ..              ....  ",
"                 ....             ..      ..........  ..  ..              ....  ",
"                  ...            ...      .....           ..              ....  ",
"                  ....           ..      ...              ..              ....  ",
"                  ....           ..      ..               ..               .... ",
"                  ....           ..                      ...               .... ",
"                   ...            ..                     ..                .... ",
"                   ....           ..                    ...                .... ",
"                   ....           ...                  ...                 .... ",
"                   ....            ..                 ...                  .... ",
"                    ...            ...               ...                   .... ",
"                    ....            ...             ...                    .... ",
"                    ....             ....        .....                     .... ",
"                     ...               .............                       .... ",
"                     ....                .........                         .... ",
"                     ....                                                 ....  ",
"                      ....                                              ......  ",
"                      ....                                             ......   ",
"                      ....                                           .......    ",
"                       ....                                        ........     ",
"                       ....                                      ........       ",
"                        ....                                  .........         ",
"                        ....                                ..........          ",
"                         ....                            ...........            ",
"                         ....                        ............               ",
"                          ....                   ..............                 ",
"                          .....             ................                    ",
"                           .....     ....................                       ",
"                            .........................                           ",
"                            .....................                               ",
"                              ..............                                    ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                ",
"                                                                                "
]

braile={
"":"\u2800", //⠀1
"1":"\u2801", //⠁
"2":"\u2802", //⠂
"12":"\u2803", //⠃
"3":"\u2804", //⠄
"13":"\u2805", //⠅
"23":"\u2806", //⠆
"123":"\u2807", //⠇
"4":"\u2808", //⠈
"14":"\u2809", //⠉
"24":"\u280A", //⠊
"124":"\u280B", //⠋
"34":"\u280C", //⠌
"134":"\u280D", //⠍
"234":"\u280E", //⠎
"1234":"\u280F", //⠏
"5":"\u2810", //⠐
"15":"\u2811", //⠑
"25":"\u2812", //⠒
"125":"\u2813", //⠓
"35":"\u2814", //⠔
"135":"\u2815", //⠕
"235":"\u2816", //⠖
"1235":"\u2817", //⠗
"45":"\u2818", //⠘
"145":"\u2819", //⠙
"245":"\u281A", //⠚
"1245":"\u281B", //⠛
"345":"\u281C", //⠜
"1345":"\u281D", //⠝
"2345":"\u281E", //⠞
"12345":"\u281F", //⠟
"6":"\u2820", //⠠
"16":"\u2821", //⠡
"26":"\u2822", //⠢
"126":"\u2823", //⠣
"36":"\u2824", //⠤
"136":"\u2825", //⠥
"236":"\u2826", //⠦
"1236":"\u2827", //⠧
"46":"\u2828", //⠨
"146":"\u2829", //⠩
"246":"\u282A", //⠪
"1246":"\u282B", //⠫
"346":"\u282C", //⠬
"1346":"\u282D", //⠭
"2346":"\u282E", //⠮
"12346":"\u282F", //⠯
"56":"\u2830", //⠰
"156":"\u2831", //⠱
"256":"\u2832", //⠲
"1256":"\u2833", //⠳
"356":"\u2834", //⠴
"1356":"\u2835", //⠵
"2356":"\u2836", //⠶
"12356":"\u2837", //⠷
"456":"\u2838", //⠸
"1456":"\u2839", //⠹
"2456":"\u283A", //⠺
"12456":"\u283B", //⠻
"3456":"\u283C", //⠼
"13456":"\u283D", //⠽
"23456":"\u283E", //⠾
"123456":"\u283F", //⠿
"7":"\u2840", //⡀
"17":"\u2841", //⡁
"27":"\u2842", //⡂
"127":"\u2843", //⡃
"37":"\u2844", //⡄
"137":"\u2845", //⡅
"237":"\u2846", //⡆
"1237":"\u2847", //⡇
"47":"\u2848", //⡈
"147":"\u2849", //⡉
"247":"\u284A", //⡊
"1247":"\u284B", //⡋
"347":"\u284C", //⡌
"1347":"\u284D", //⡍
"2347":"\u284E", //⡎
"12347":"\u284F", //⡏
"57":"\u2850", //⡐
"157":"\u2851", //⡑
"257":"\u2852", //⡒
"1257":"\u2853", //⡓
"357":"\u2854", //⡔
"1357":"\u2855", //⡕
"2357":"\u2856", //⡖
"12357":"\u2857", //⡗
"457":"\u2858", //⡘
"1457":"\u2859", //⡙
"2457":"\u285A", //⡚
"12457":"\u285B", //⡛
"3457":"\u285C", //⡜
"13457":"\u285D", //⡝
"23457":"\u285E", //⡞
"123457":"\u285F", //⡟
"67":"\u2860", //⡠
"167":"\u2861", //⡡
"267":"\u2862", //⡢
"1267":"\u2863", //⡣
"367":"\u2864", //⡤
"1367":"\u2865", //⡥
"2367":"\u2866", //⡦
"12367":"\u2867", //⡧
"467":"\u2868", //⡨
"1467":"\u2869", //⡩
"2467":"\u286A", //⡪
"12467":"\u286B", //⡫
"3467":"\u286C", //⡬
"13467":"\u286D", //⡭
"23467":"\u286E", //⡮
"123467":"\u286F", //⡯
"567":"\u2870", //⡰
"1567":"\u2871", //⡱
"2567":"\u2872", //⡲
"12567":"\u2873", //⡳
"3567":"\u2874", //⡴
"13567":"\u2875", //⡵
"23567":"\u2876", //⡶
"123567":"\u2877", //⡷
"4567":"\u2878", //⡸
"14567":"\u2879", //⡹
"24567":"\u287A", //⡺
"124567":"\u287B", //⡻
"34567":"\u287C", //⡼
"134567":"\u287D", //⡽
"234567":"\u287E", //⡾
"1234567":"\u287F", //⡿
"8":"\u2880", //⢀
"18":"\u2881", //⢁
"28":"\u2882", //⢂
"128":"\u2883", //⢃
"38":"\u2884", //⢄
"138":"\u2885", //⢅
"238":"\u2886", //⢆
"1238":"\u2887", //⢇
"48":"\u2888", //⢈
"148":"\u2889", //⢉
"248":"\u288A", //⢊
"1248":"\u288B", //⢋
"348":"\u288C", //⢌
"1348":"\u288D", //⢍
"2348":"\u288E", //⢎
"12348":"\u288F", //⢏
"58":"\u2890", //⢐
"158":"\u2891", //⢑
"258":"\u2892", //⢒
"1258":"\u2893", //⢓
"358":"\u2894", //⢔
"1358":"\u2895", //⢕
"2358":"\u2896", //⢖
"12358":"\u2897", //⢗
"458":"\u2898", //⢘
"1458":"\u2899", //⢙
"2458":"\u289A", //⢚
"12458":"\u289B", //⢛
"3458":"\u289C", //⢜
"13458":"\u289D", //⢝
"23458":"\u289E", //⢞
"123458":"\u289F", //⢟
"68":"\u28A0", //⢠
"168":"\u28A1", //⢡
"268":"\u28A2", //⢢
"1268":"\u28A3", //⢣
"368":"\u28A4", //⢤
"1368":"\u28A5", //⢥
"2368":"\u28A6", //⢦
"12368":"\u28A7", //⢧
"468":"\u28A8", //⢨
"1468":"\u28A9", //⢩
"2468":"\u28AA", //⢪
"12468":"\u28AB", //⢫
"3468":"\u28AC", //⢬
"13468":"\u28AD", //⢭
"23468":"\u28AE", //⢮
"123468":"\u28AF", //⢯
"568":"\u28B0", //⢰
"1568":"\u28B1", //⢱
"2568":"\u28B2", //⢲
"12568":"\u28B3", //⢳
"3568":"\u28B4", //⢴
"13568":"\u28B5", //⢵
"23568":"\u28B6", //⢶
"123568":"\u28B7", //⢷
"4568":"\u28B8", //⢸
"14568":"\u28B9", //⢹
"24568":"\u28BA", //⢺
"124568":"\u28BB", //⢻
"34568":"\u28BC", //⢼
"134568":"\u28BD", //⢽
"234568":"\u28BE", //⢾
"1234568":"\u28BF", //⢿
"78":"\u28C0", //⣀
"178":"\u28C1", //⣁
"278":"\u28C2", //⣂
"1278":"\u28C3", //⣃
"378":"\u28C4", //⣄
"1378":"\u28C5", //⣅
"2378":"\u28C6", //⣆
"12378":"\u28C7", //⣇
"478":"\u28C8", //⣈
"1478":"\u28C9", //⣉
"2478":"\u28CA", //⣊
"12478":"\u28CB", //⣋
"3478":"\u28CC", //⣌
"13478":"\u28CD", //⣍
"23478":"\u28CE", //⣎
"123478":"\u28CF", //⣏
"578":"\u28D0", //⣐
"1578":"\u28D1", //⣑
"2578":"\u28D2", //⣒
"12578":"\u28D3", //⣓
"3578":"\u28D4", //⣔
"13578":"\u28D5", //⣕
"23578":"\u28D6", //⣖
"123578":"\u28D7", //⣗
"4578":"\u28D8", //⣘
"14578":"\u28D9", //⣙
"24578":"\u28DA", //⣚
"124578":"\u28DB", //⣛
"34578":"\u28DC", //⣜
"134578":"\u28DD", //⣝
"234578":"\u28DE", //⣞
"1234578":"\u28DF", //⣟
"678":"\u28E0", //⣠
"1678":"\u28E1", //⣡
"2678":"\u28E2", //⣢
"12678":"\u28E3", //⣣
"3678":"\u28E4", //⣤
"13678":"\u28E5", //⣥
"23678":"\u28E6", //⣦
"123678":"\u28E7", //⣧
"4678":"\u28E8", //⣨
"14678":"\u28E9", //⣩
"24678":"\u28EA", //⣪
"124678":"\u28EB", //⣫
"34678":"\u28EC", //⣬
"134678":"\u28ED", //⣭
"234678":"\u28EE", //⣮
"1234678":"\u28EF", //⣯
"5678":"\u28F0", //⣰
"15678":"\u28F1", //⣱
"25678":"\u28F2", //⣲
"125678":"\u28F3", //⣳
"35678":"\u28F4", //⣴
"135678":"\u28F5", //⣵
"235678":"\u28F6", //⣶
"1235678":"\u28F7", //⣷
"45678":"\u28F8", //⣸
"145678":"\u28F9", //⣹
"245678":"\u28FA", //⣺
"1245678":"\u28FB", //⣻
"345678":"\u28FC", //⣼
"1345678":"\u28FD", //⣽
"2345678":"\u28FE", //⣾
"12345678":"\u28FF" //⣿
}

function updateclock(){

  deltat=Date.now()-starttime
  step=Math.floor(deltat/35)
  beat=Math.floor(deltat/532)
}

// Seriously JS? No str/arr multiplication? SERIOUSLY?
function repeat(pattern, count) {

  if (count<1) return '';
  var result='';
  while (count>1){
    if (count&1) result+=pattern;
    count>>=1, pattern+=pattern;
  }
  return result+pattern;
}

loadingframes = [
'(\\\u00B0-\u00B0)\\ \u252C\u2500\u252C',
'(\\\u00B0\u25A1\u00B0)\\  \u252C\u2500\u252C',
'(-\u00B0\u25A1\u00B0)-  \u252C\u2500\u252C',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L ]',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L  \u253B\u2501\u253B',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A [',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A  \u252C\u2500\u252C',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E ]',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E  \u253B\u2501\u253B',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I [',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I  \u252C\u2500\u252C',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G ]',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G  \u253B\u2501\u253B',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G     [',
'(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G      \u252C\u2500\u252C',
]

function loading(){

  document.title="plz wait..."
  return loadingframes[Math.floor(step/10)%15]
}

function startrail(){

  return scroll("\uD83C\uDF1F==  *\u203E  ._")
}

greeted=["Collapse","Bizo","Metro/SOGA","Glench","Freesoft && Scene ORGs", "software failure", "purples studios"]
blocksv=["\u2581","\u2582","\u2583","\u2584","\u2585","\u2586","\u2587","\u2588"]
blocksh=["\u2588","\u2589","\u258A","\u258B","\u258C","\u258D","\u258E","\u258F"]

function greets(){

  if (mark[0]==0){
    initstep=step
    mark[0]=1
  }

  cursgreet=Math.floor((step-initstep)/130)
  cursstep=(step-initstep)%130

  document.title="Greets go to:"
  string=""
  if (cursgreet<greeted.length) {
    if      (cursstep<15) {string=repeat(blocksh[Math.floor(cursstep/2.9)],width)}
    else if (cursstep>115) {string=repeat(blocksv[Math.floor((cursstep-110)/2.9)],width)}
    else {string=bouncescroll(greeted[cursgreet],width)}
  }
  return string
}

function snakereset(){
  snakeboard=[
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  ]
  
  over=0
  pellet=[Math.floor(Math.random()*4),Math.floor(Math.random()*40)]
  snek=[[Math.floor(Math.random()*4),Math.floor(Math.random()*40)]]
  snakeboard[snek[0][0]][snek[0][1]]="."
  snakeboard[pellet[0]][pellet[1]]="P"
  lastdir=0
}

noms=[repeat("\u2800",8)+"nom",repeat("\u2800",12)+"nom","nom",repeat("\u2800",4)+"nom"]
function snake(){

  if (mark[0]==0){
    snakereset()
    mark[0]=1
  }

  head=snek[0]
  if      (head[0]==0 && lastdir==1) {lastdir=3}
  if      (head[0]==3 && lastdir==2) {lastdir=4}
  if      (head[0]>=0 && lastdir==3) {lastdir=1}
  if      (head[0]<40 && lastdir==4) {lastdir=2}
  if      (head[0]>pellet[0])  {snek=[[head[0]-1,head[1]  ]].concat(snek); lastdir=1}
  else if (head[0]<pellet[0])  {snek=[[head[0]+1,head[1]  ]].concat(snek); lastdir=2}
  else if (head[1]>pellet[1])  {snek=[[head[0],  head[1]-1]].concat(snek); lastdir=3}
  else if (head[1]<pellet[1])  {snek=[[head[0],  head[1]+1]].concat(snek); lastdir=4}
  else if (lastdir==1)         {snek=[[head[0]-1,head[1]  ]].concat(snek) }
  else if (lastdir==2)         {snek=[[head[0]+1,head[1]  ]].concat(snek) }
  else if (lastdir==3)         {snek=[[head[0],  head[1]-1]].concat(snek) }
  else if (lastdir==4)         {snek=[[head[0],  head[1]+1]].concat(snek) }

  head=snek[0]
  if (snakeboard[head[0]][head[1]]=="."){over=1}
  snakeboard[head[0]][head[1]]="."

  grow=0
  if (head[0]==pellet[0] && head[1]==pellet[1]){
    old=[pellet[0],pellet[1]]
    while (old[0]==pellet[0] || rep==1){
      rep=0
      pellet[0]=Math.floor(Math.random()*4)
      pellet[1]=Math.floor(Math.random()*40)
      for (i=0; i<snek.length; i++){
        if (snek[i][0]==pellet[0] && snek[i][1]==pellet[1]){rep=1}
      }
    }
    while (old[1]==pellet[1]){
      rep=0
      pellet[0]=Math.floor(Math.random()*4)
      pellet[1]=Math.floor(Math.random()*40)
      for (i=0; i<snek.length; i++){
        if (snek[i][0]==pellet[0] && snek[i][1]==pellet[1]){rep=1}
      }
    }
    snakeboard[pellet[0]][pellet[1]]="P"
  }
  
  else {
    tail=snek.splice(-1)[0]
    snakeboard[tail[0]][tail[1]]=""
}

  out=""
  for (i=0; i<40; i+=2){
    temp=""
    if (snakeboard[0][i]   == "." || snakeboard[0][i]   == "P")  {temp+="1"}
    if (snakeboard[1][i]   == "." || snakeboard[1][i]   == "P")  {temp+="2"}
    if (snakeboard[2][i]   == "." || snakeboard[2][i]   == "P")  {temp+="3"}
    if (snakeboard[0][i+1] == "." || snakeboard[0][i+1] == "P")  {temp+="4"}
    if (snakeboard[1][i+1] == "." || snakeboard[1][i+1] == "P")  {temp+="5"}
    if (snakeboard[2][i+1] == "." || snakeboard[2][i+1] == "P")  {temp+="6"}
    if (snakeboard[3][i]   == "." || snakeboard[3][i]   == "P")  {temp+="7"}
    if (snakeboard[3][i+1] == "." || snakeboard[3][i+1] == "P")  {temp+="8"}
    out+=braile[temp]
  }

  document.title=noms[beat%4]
  if (over==1){return "Game Over"}
  return out+" [Score:"+snek.length+"]"
}

function scroll(text){

  if (mark[0]==0){fstep=step; mark[0]=1}

  len=width-(Math.floor((step-fstep)/4))
  string=""
  for (i=0; i<width; i++){
    if (i<len){string=string+"\u2800"}
    else {string=string+text[i-len]}
  }
  string=string.replace(/undefined/g, '\u2800')
  return string
}

function bouncescroll(text,wid){

  stp=Math.floor(step/2)
  marg=(wid-text.length)*2
  vw=Math.abs((stp%marg)-marg/2)
  rmarg=wid-vw-text.length-5
  return repeat("\u2800",vw)+text+repeat("\u2800",rmarg)
}

sup={
"a":"\u1D43",
"b":"\u1D47",
"c":"\u1D9C",
"d":"\u1D48",
"e":"\u1D49",
"f":"\u1DA0",
"g":"\u1D4D",
"h":"\u02B0",
"i":"\u2071",
"j":"\u02B2",
"k":"\u1D4F",
"l":"\u02E1",
"m":"\u1D50",
"n":"\u207F",
"o":"\u1D52",
"p":"\u1D56",
"r":"\u02B3",
"s":"\u02E2",
"t":"\u1D57",
"u":"\u1D58",
"v":"\u1D5B",
"w":"\u02B7",
"x":"\u02E3",
"y":"\u02B8",
"z":"\u1DBB",
}

function sinescroll(text){

  len=width-(Math.floor(step/5))
  string=""
  for (i=0; i<width; i++){
    if (i<len){string=string+" "}
    else if (typeof text[i-len] != 'undefined') {
      if (i%3==0) {tempadd=text[i-len].toUpperCase()}
      if (i%3==1) {tempadd=text[i-len]}
      if (i%3==2) {tempadd=sup[text[i-len]]}
      if (typeof tempadd=="undefined"){tempadd=text[i-len]}
      string=string+tempadd
    }
  }
  return string
}

// DJ Ash will like this ;)
invadertypes=[
["\uD83D\uDC7E","\uD83D\uDC7E","\uD83D\uDC7E"],
["\uD83D\uDC7D","\uD83D\uDC7D","\uD83D\uDC7D"],
["\uD83D\uDC7B","\uD83D\uDC7B","\uD83D\uDC7B"],
["\uD83D\uDC80","\uD83D\uDC80","\uD83D\uDC80"]
]

function invaders(){

  return bouncescroll(invadertypes[beat%4],width)
}

function dunnolol(){

  document.title="dunno, lol"
  return repeat(" ",Math.floor((width-9)/2))+"\u00AF\\_(\u30C4)_/\u00AF"
}

meatt=1.3
meatgoo=0.95
function meatballs(){
  // Recycle functions, save the planet

  document.title=bouncescroll("Meatballs FTW",20)

  if (Math.floor(step/60)%2==0) {stp=step%57}
  else                          {stp=60-(step%57)}

  meatgrid=[["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]]

  meatang=3.14*step/150
  meatballA=[300+Math.cos(meatang*2.5)*50,300+Math.sin(meatang*2)*150]
  meatballB=[300+Math.sin(meatang*1.8)*50,300+Math.cos(meatang*2.0)*150]
  meatballC=[300+Math.sin(meatang+100)*50,300+Math.cos(meatang+50)*150]

  for (i=0; i<60; i++){
    for (j=28; j<32; j++){
      if ((40/Math.pow(Math.sqrt(Math.pow(meatballA[0]-j*10,2)+Math.pow(meatballA[1]-i*10,2)),meatgoo))+
          (30/Math.pow(Math.sqrt(Math.pow(meatballB[0]-j*10,2)+Math.pow(meatballB[1]-i*10,2)),meatgoo))+
          (35/Math.pow(Math.sqrt(Math.pow(meatballC[0]-j*10,2)+Math.pow(meatballC[1]-i*10,2)),meatgoo))>meatt){
        meatgrid[j-28][i]="."
      }
    }
  }

  return vscroll(meatgrid,0)
}

function vscroll(grid,zero){

  if (step+3>=grid.length && zero==1){return ""}
  if (zero==0){stp=0}
  else if (zero==1){stp=step}
  out=""
  for (i=0; i<grid[0].length-1; i+=2){
    temp=""
    if (grid[stp][i]=="."){temp+="1"}
    if (grid[stp+1][i]=="."){temp+="2"}
    if (grid[stp+2][i]=="."){temp+="3"}
    if (grid[stp][i+1]=="."){temp+="4"}
    if (grid[stp+1][i+1]=="."){temp+="5"}
    if (grid[stp+2][i+1]=="."){temp+="6"}
    if (grid[stp+3][i]=="."){temp+="7"}
    if (grid[stp+3][i+1]=="."){temp+="8"}
    out+=braile[temp]
  }

  return out
}

function logo(){

  return vscroll(ek,1)
}

function gelogo(){
  
  document.title=""
  return bouncescroll("\uD83D\uDE4C \uD83D\uDE4C \uD83D\uDE4C Gipuzkoa Encounter 10",width)
}

function train(){

  document.title="Choo choo!"
  return scroll(["\uD83D\uDE84","\uD83D\uDE9D","\uD83D\uDE9D",
  "\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D",
  "\uD83D\uDE9D",])
}

// Uses blocksv for vertical bars
function equalizer(){

  out=""
  for (i=0; i<width; i++){
    out+=blocksv[step%(Math.floor(Math.random()*blocksv.length)+1)]
  }

  return out
}

function merge(str1, str2){

  out=""
  for (i=0; i<str1.length; i++){
    if (str1[i]=="\u2800"){out+=str2[i]}
    else {out+=str1[i]}
  } 

  return out
}

cloudframes=[
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF29","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF29","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
["\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF29","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28","\uD83C\uDF28"],
]
buildings=""
for (i=0; i<100; i++){buildings+=blocksv[Math.floor(Math.random()*blocksv.length)]}
buildings=repeat(blocksv[0],10)+buildings+repeat(blocksv[0],10)
function parallol(){

  document.title=scroll(scroll(cloudframes[beat%8]))
  return scroll(buildings)
}

tetrispieces=[["..",".."],["..."," . "],[".  ","..."],["  .","..."],[".. "," .."],[" ..",".. "],["...."]]
tempboard=[
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  ]

function tetrisreset(){

  tetrisboard=[
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
  ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  ]

  over=0
  lines=[0]
  piece=[tetrispieces[Math.floor(Math.random()*tetrispieces.length)],0,Math.floor(Math.random()*3)]
  nextpiece=[tetrispieces[Math.floor(Math.random()*tetrispieces.length)],0,Math.floor(Math.random()*3)]
}

function tetris(){

  if (mark[0]==0){
    tetrisreset()
    mark[0]=1
  }

  piecebuffer=["    "].concat(nextpiece[0]).concat(["    "])
  for (i=0; i<piecebuffer.length; i++){
    piecebuffer[i]=repeat(" ",4-piecebuffer[i].length)+piecebuffer[i]
  }
  if(piecebuffer.length==3){piecebuffer=piecebuffer.concat(["    "])}

  document.title="next ["+vscroll(piecebuffer, 0)+"]"

  if (piece[0][0][piece[0][0].length-1]=="." && tetrisboard[piece[2]][piece[1]+piece[0][0].length]=="."){
    tetrisreset()
  }

  piece[1]+=1

  contact=0
  for (i=0; i<piece[0].length; i++){
    for (j=0; j<piece[0][0].length; j++){
      if (piece[0][i][piece[0][0].length-1-j]=="." && tetrisboard[piece[2]+i][piece[1]+piece[0][0].length-j]=="."){
        contact=1
      }
    }
  }

  if (contact==1 || piece[1]+piece[0][0].length>39){
    for (i=0; i<piece[0].length; i++){
      for (j=0; j<piece[0][0].length; j++){
        if (piece[0][i][j]=="."){
          tetrisboard[piece[2]+i][piece[1]+j]=piece[0][i][j]
        }
      }
    }
    piece=nextpiece
    nextpiece=[tetrispieces[Math.floor(Math.random()*tetrispieces.length)],0,Math.floor(Math.random()*3)]
  }

  for (i=0; i<tetrisboard[0].length; i++){
    if (tetrisboard[0][i]=="." && tetrisboard[1][i]=="." && tetrisboard[2][i]=="." && tetrisboard[3][i]=="."){
      for (j=0; j<4; j++){
        tetrisboard[j]=[""].concat(tetrisboard[j].slice(0,i).concat(tetrisboard[j].slice(i+1,tetrisboard[j].length-i)))
      }
      lines[0]+=1
    }
  }

  for (i=0; i<tetrisboard.length; i++){
    for (j=0; j<tetrisboard[0].length; j++){
      tempboard[i][j]=tetrisboard[i][j]
    }
  }
  for (i=0; i<piece[0].length; i++){
    for (j=0; j<piece[0][0].length; j++){
      if (piece[0][i][j]=="."){
        tempboard[piece[2]+i][piece[1]+j]=piece[0][i][j]
      }
    }
  }

  return vscroll(tempboard,0)+"|  [Lines:"+lines+"]"
}

function kitt(){

  return bouncescroll("\u2B1B", 5)
}

danceframes=[
"   \u30FD(\uFF65\u03C9\uFF65\u309E)",
"     (\uFF62\uFF65\u03C9\uFF65)\uFF62",
"    \u2514(\uFF3E\u03C9\uFF3E)\u309E",
"     (~\u203E\u2323\u203E)~",
"    ~(\u203E\u2323\u203E~)",
" \u208D\u208D \u25DD(\u30FB\u03C9\u30FB)\u25DF \u207E\u207E",
"    \u01AA(\u203E.\u203E\u201C)\u2510",
"    \u250C(\u02D8\u2323\u02D8)\u0283"
]

function danceparty(){

  document.title="Dance! \uD83C\uDFB5"
  return scroll(danceframes[beat%8])
}

function pong(){

  ;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//window.location.replace('#'+str)
//document.title=str

test=0
calibrate=0
lastbeat=beat
laststep=step
mark=[0]
str=""
tinit=0
ginit=0
dinit=0
sinit=0

function main(){

  updateclock()

  //// TEST ZONE
  if (test==1){

    //str=meatballs()
    //str=logo()
    // str=snake()
    // if (str=="Game Over") {mark[0]=0}
    //str=loading()
    //str=greets()
    //str=train()
    //str=invaders()
    //str=dunnolol()
    //str=startrail()
    //str=merge(invaders(),equalizer())
    //str=parallol()
    //str=scroll(scroll(cloudframes[beat%8]))
    //str=tetris()
    //str=kitt()
    str=danceparty()
  }

  // stuff to show while prepping the projection
  else if (calibrate==1){

    document.title="HEY THERE"
    str="CAN YOU READ THIS?"
  }

  //// SUPER SERIOUS ZONE
  else if (test==0){

    if (beat<16){

      if (beat<4){
        document.title="<name>"
        str="presents"
      }
      else if (beat<8){
        document.title="\uD83C\uDFBC With music by"
        str="stage7"
      }
      else if (beat<12){
        document.title="\uD83D\uDCBE And code by"
        str="achifaifa"
      }
      else {
        document.title="\u2800\u2800URLOL"
        str="AKA 'Brutal violations of HTTP RFCs'"
      }
    }

    else if (beat<32){
      if (dinit==0){mark[0]=0; dinit=1}
      str=danceparty()
    }

    else if (beat<47){
      document.title="EF2_ALT"
      str="ef2"
    }

    else if (beat<63){
      if (sinit==0){mark[0]=0; sinit=1}
      str=snake()
      if (str=="Game Over") {mark[0]=0}
    } 

    else if (beat<79){
      if (tinit==0){mark[0]=0; tinit=1}
      str=tetris()
    }

    else if (beat<111){
      if (ginit==0){mark[0]=0; ginit=1}
      str=greets()
    }

    else {
      str=dunnolol()
    }
  }

  window.location.replace('#  '+str+repeat("\u2800",width-str.length)+"|"+beat)
}

function start(){

  if (test==0 && calibrate==0){player.play()}
  setInterval(main,1000/60);
}

// add listener: start demo on play, reset on pause

start()


/////////////////////////////////////////////////////////
/////////copypaste from example3.html for the eq/////////
/////////////////////////////////////////////////////////

// $(function () {
//       var context;
//       if (typeof AudioContext !== "undefined") {
//           context = new AudioContext();
//       } else if (typeof webkitAudioContext !== "undefined") {
//           context = new webkitAudioContext();
//       } else {
//           $(".hideIfNoApi").hide();
//           $(".showIfNoApi").show();
//           return;
//       }

//       var lastTime = 0;
//       var vendors = ['ms', 'moz', 'webkit', 'o'];
//       for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//           window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
//           window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
//                                       || window[vendors[x] + 'CancelRequestAnimationFrame'];
//       }

//       if (!window.requestAnimationFrame)
//           window.requestAnimationFrame = function (callback, element) {
//               var currTime = new Date().getTime();
//               var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//               var id = window.setTimeout(function () { callback(currTime + timeToCall); },
//                   timeToCall);
//               lastTime = currTime + timeToCall;
//               return id;
//           };

//       if (!window.cancelAnimationFrame)
//           window.cancelAnimationFrame = function (id) {
//               clearTimeout(id);
//           };

//       var analyser = context.createAnalyser();
//       analyser.fftSize = 64;
//       var frequencyData = new Uint8Array(analyser.frequencyBinCount);

//       var visualisation = $("#visualisation");
//       for (var i = 0; i < analyser.frequencyBinCount; i++) {
//         $("<div/>").css("left", i * 6 + "px")
//         .appendTo(visualisation);
//       }
//       var bars = $("#visualisation > div");

//       function update() {
//           requestAnimationFrame(update);

//           analyser.getByteFrequencyData(frequencyData);

//           bars.each(function (index, bar) {
//               bar.style.height = Math.round((frequencyData[index] / 255 * 408) / 3) * 3 + 'px';
//           });
//       };

//       // Hook up the audio routing...
//       // player -> analyser -> speakers
//     // (Do this after the player is ready to play - https://code.google.com/p/chromium/issues/detail?id=112368#c4)
//     $("#player").bind('canplay', function() {
//       var source = context.createMediaElementSource(this);
//       source.connect(analyser);
//       analyser.connect(context.destination);
//     });

//       // Kick it off...
//       var audio = document.getElementById("player");
//       audio.play();
//       update();
//   });