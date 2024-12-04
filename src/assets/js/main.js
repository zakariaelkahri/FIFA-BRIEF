function getData(){
  fetch("./players.json")
  .then((res)=>{
    return res.json()
  })
  .then((data)=> {
    dataCard(data)
  })
} 
  getData();
  
// variables:
const plrs = [];
let formul = document.querySelector("#playerinfo");
let formation = document.querySelector(".formation");
let card = document.querySelectorAll(".player-card");
let position = document.getElementById("position");
let btn = document.getElementById("add");
let bensh = document.getElementById("bensh");
let GK = document.getElementById("GK");
let CB1 = document.getElementById("CB1");
let CB2 = document.getElementById("CB2");
let RB = document.getElementById("RB");
let LB = document.getElementById("LB");
let CMD = document.getElementById("CDM");
let CM1 = document.getElementById("CM1");
let CM2 = document.getElementById("CM2");
let ST = document.getElementById("ST");
let RW = document.getElementById("RW");
let LW = document.getElementById("LW");
function toggleStatistics(){
position.addEventListener("change", () => {
  if (position.value == "GK") {
    document.querySelector(".player-inputs").style.display = "none";
    document.querySelector(".gk-inputs").style.display = "flex";
  } else {
    document.querySelector(".player-inputs").style.display = "flex";
    document.querySelector(".gk-inputs").style.display = "none";
  }
});
}
toggleStatistics()
function addTobensh(obj) {
  if (position.value == "GK") {
    bensh.innerHTML += `          <div class="player" id="">
             <div class="card-container">
   
               <div class="teams">
                 <img
                   width="13em"
                   id="flag"
                   src="${obj.flag}"
                   alt="nationality"
                 />
                 <img
                   width="15em"
                   id="team"
                   src="${obj.logo}"
                   alt="corrent team"
                 />
               </div>
               <p class="rating"><span id="rating">${obj.rating1}</span><span class="post">${obj.position}</span></p>
               
               <div id="icons">
                 <button onclick="lets(event)" id="btnn" ><i class="fa-solid fa-arrow-up-long"></i></button>
                 <button onclick="removeCard(event)" id="btnn" ><i class="icon fa-solid fa-trash" ></i></button>
                 <button onclick="updatCard(event)" id="btnn" ><i class="icon1 fa-solid fa-pen-to-square"></i></button>
               </div>
   
               <img
               class="back-img"
               src="./src/assets/img/badge_gold.webp"
               width="100em"
               alt="back-img"
               />
               <div class="card-content">
               <img
               class="player"
               id="player-pic"
               src="${obj.photo}"
               height="60em"
               alt="pic-player"
                 />
                 <p class="name">${obj.name}</p>
                 <div class="statistics">
                     <p class="stats">DIV<span id="div">${obj.diving}</span></p>
                     <p class="stats">HAN<span id="hand">${obj.handling}</span></p>
                     <p class="stats">KICK<span id="kic">${obj.kicking}</span></p>
                     <p class="stats">REF<span id="ref">${obj.reflexes}</span></p>
                     <p class="stats">SPD<span id="spe">${obj.speed}</span></p>
                     <p class="stats">POS<span id="pos">${obj.positioning}</span></p>
                 </div>
               </div>
             </div>
           </div>         `;
  } else {
    bensh.innerHTML += `          <div class="player" id="">
             <div class="card-container">
   
               <div class="teams">
                 <img
                   width="13em"
                   id="flag"
                   src="${obj.flag}"
                   alt="nationality"
                 />
                 <img
                   width="15em"
                   id="team"
                   src="${obj.logo}"
                   alt="corrent team"
                 />
               </div>
               <p class="rating"><span id="rating">${obj.rating}</span><span class="post">${obj.position}</span></p>
               
               <div id="icons">
                 <button onclick="lets(event)" id="btnn" ><i class="fa-solid fa-arrow-up-long"></i></button>
                 <button onclick="removeCard(event)" id="btnn" ><i class="icon fa-solid fa-trash" ></i></button>
                 <button onclick="updatCard(event)" id="btnn" ><i class="icon1 fa-solid fa-pen-to-square"></i></button>
               </div>
   
               <img
               class="back-img"
               src="./src/assets/img/badge_gold.webp"
               width="100em"
               alt="back-img"
               />
               <div class="card-content">
               <img
               class="player"
               id="player-pic"
               src="${obj.photo}"
               height="60em"
               alt="pic-player"
                 />
                 <p class="name">${obj.name}</p>
                 <div class="statistics">
                   <p class="stats">PAC<span id="pac">${obj.pace}</span></p>
                   <p class="stats">SHOT<span id="shot">${obj.shooting}</span></p>
                   <p class="stats">PAS<span id="pas">${obj.passing}</span></p>
                   <p class="stats">DRI<span id="dri">${obj.dribbling}</span></p>
                   <p class="stats">DEF<span id="def">${obj.defending}</span></p>
                   <p class="stats">PHY<span id="phy">${obj.physical}</span></p>
                 </div>
               </div>
             </div>
           </div>         `;
  }
}

btn.addEventListener("click", () => {
  let formValue = new FormData(formul);
  const obj = {
    name: formValue.get("name"),
    photo: formValue.get("image"),
    position: formValue.get("position"),
    flag: formValue.get("flag"),
    logo: formValue.get("logo"),
    rating: formValue.get("rating"),
    pace: formValue.get("pace"),
    shooting: formValue.get("shooting"),
    passing: formValue.get("passing"),
    dribbling: formValue.get("dribbling"),
    defending: formValue.get("defending"),
    physical: formValue.get("physical"),
    rating1: formValue.get("rating2"),
    diving: formValue.get("diving"),
    handling: formValue.get("handling"),
    kicking: formValue.get("kicking"),
    reflexes: formValue.get("reflexes"),
    positioning: formValue.get("positioning"),
    speed: formValue.get("speed"),
  };
  plrs.push(obj);
  console.log(obj.rating1)
  if( obj.position == "GK"){
    if(!obj.name ||!obj.photo ||!obj.position ||!obj.flag ||!obj.logo ||!obj.rating1 ||!obj.diving ||!obj.handling ||!obj.kicking ||!obj.reflexes ||!obj.positioning ||!obj.speed ){
      alert("Please fill all the empty inputs of (GK) required !! ");
    }else{
      addTobensh(obj);
      formul.reset();
    }
  }else {
    if(!obj.name ||!obj.photo ||!obj.position ||!obj.flag ||!obj.logo ||!obj.rating ||!obj.pace ||!obj.shooting ||!obj.passing ||!obj.dribbling ||!obj.defending ||!obj.physical ){
      alert("Please fill all the empty inputs required !! ");
    }else{
      addTobensh(obj);
      formul.reset();
    }
  }
});

function lets(event) {
  let cardContainer = event.target.closest(".player");
  let poste = cardContainer.querySelector(".post").innerHTML;
  if (poste == `GK`) {
    let replace = GK.innerHTML;
    GK.innerHTML = "";
    GK.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `CB1`) {
    let replace = CB1.innerHTML;
    CB1.innerHTML = "";
    CB1.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `CB2`) {
    let replace = CB2.innerHTML;
    CB2.innerHTML = "";
    CB2.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `RB`) {
    let replace = RB.innerHTML;
    RB.innerHTML = "";
    RB.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `LB`) {
    let replace = LB.innerHTML;
    LB.innerHTML = "";
    LB.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `CDM`) {
    let replace = CDM.innerHTML;
    CDM.innerHTML = "";
    CDM.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `CM1`) {
    let replace = CM1.innerHTML;
    CM1.innerHTML = "";
    CM1.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `CM2`) {
    let replace = CM2.innerHTML;
    CM2.innerHTML = "";
    CM2.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `ST`) {
    let replace = ST.innerHTML;
    ST.innerHTML = "";
    ST.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `RW`) {
    let replace = RW.innerHTML;
    RW.innerHTML = "";
    RW.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  } else if (poste == `LW`) {
    let replace = LW.innerHTML;
    LW.innerHTML = "";
    LW.innerHTML = cardContainer.innerHTML;
    cardContainer.innerHTML = replace;
  }
}

function dataCard(data) {
  data.players.map((ele) => {
    bensh.innerHTML += `          <div class="player" id="">
             <div class="card-container">
   
               <div class="teams">
                 <img
                   width="13em"
                   id= "flag"
                   src="${ele.flag}"
                   alt="nationality"
                 />
                 <img
                   width="15em"
                   id= "team"
                   src="${ele.logo}"
                   alt="corrent team"
                 />
               </div>
               <p class="rating"><span id="rating">${ele.rating}</span><span class="post">${ele.position}</span></p>
               
               <div id="icons">
                 <button onclick="lets(event)" id="btnn" ><i class="fa-solid fa-arrow-up-long"></i></button>
                 <button onclick="removeCard(event)" id="btnn" ><i class="icon fa-solid fa-trash" ></i></button>
                 <button onclick="updatCard(event)" id="btnn" ><i class="icon1 fa-solid fa-pen-to-square"></i></button>
               </div>
   
               <img
               class="back-img"
               src="./src/assets/img/badge_gold.webp"
               width="100em"
               alt="back-img"
               />
               <div class="card-content">
               <img
               class="player"
               id="player-pic"
               src="${ele.photo}"
               height="60em"
               alt="pic-player"
                 />
                 <p class="name">${ele.name}</p>
                 <div class="statistics">
                   <p class="stats">PAC<span id="pac">${ele.pace}</span></p>
                   <p class="stats">SHOT<span id="shot">${ele.shooting}</span></p>
                   <p class="stats">PAS<span id="pas">${ele.passing}</span></p>
                   <p class="stats">DRI<span id="dri">${ele.dribbling}</span></p>
                   <p class="stats">DEF<span id="def">${ele.defending}</span></p>
                   <p class="stats">PHY<span id="phy">${ele.physical}</span></p>
                 </div>
               </div>
             </div>
           </div>         `;
  });
  data.goalkeepers.map((ele) => {
    bensh.innerHTML += `          <div class="player" id="">
             <div class="card-container">
   
               <div class="teams">
                 <img
                   width="13em"
                   id ="flag"
                   src="${ele.flag}"
                   alt="nationality"
                 />
                 <img
                   width="15em"
                   id="team"
                   src="${ele.logo}"
                   alt="corrent team"
                 />
               </div>
               <p class="rating"><span id="rating">${ele.rating}</span><span class="post">${ele.position}</span></p>
        
               <div id="icons">
                 <button onclick="lets(event)" id="btnn" ><i class="fa-solid fa-arrow-up-long"></i></button>
                 <button onclick="removeCard(event)" id="btnn" ><i class="icon fa-solid fa-trash" ></i></button>
                 <button onclick="updatCard(event)" id="btnn" ><i class="icon1 fa-solid fa-pen-to-square"></i></button>
               </div>
   
               <img
               class="back-img"
               src="./src/assets/img/badge_gold.webp"
               width="100em"
               alt="back-img"
               />
               <div class="card-content">
               <img
               class="player"
               id="player-pic"
               src="${ele.photo}"
               height="60em"
               alt="pic-player"
                 />
                 <p class="name">${ele.name}</p>
                   <div class="statistics">

                     <p class="stats">div<span id="div">${ele.diving}</span></p>
                     <p class="stats">hand<span id="hand">${ele.handling}</span></p>
                     <p class="stats">kic<span id="kic">${ele.kicking}</span></p>
                     <p class="stats">REF<span id="ref">${ele.reflexes}</span></p>
                     <p class="stats">SPd<span id="spe">${ele.speed}</span></p>
                     <p class="stats">POS<span id="pos">${ele.positioning}</span></p>
                   </div>
                 </div>
               </div>
             </div>         `;
  });
}

function removeCard(event) {
  let cardContainer = event.target.closest(".card-container");
  cardContainer.remove();
}

function updatCard(event) {
  let cardContainer = event.target.closest(".card-container");
  let  posi = cardContainer.querySelector('.rating').querySelector('.post').textContent
  if ((posi == `GK`)) {
    
    document.querySelector(".player-inputs").style.display = "none";
    document.querySelector(".gk-inputs").style.display = "flex";

    let name = cardContainer.querySelector(".name").innerText;
    let playerPic = cardContainer.querySelector("#player-pic").src;
    let rating = cardContainer.querySelector("#rating").innerText;
    let flag = cardContainer.querySelector("#flag").src;
    let team = cardContainer.querySelector("#team").src;
    let div = cardContainer.querySelector("#div").innerText;
    let hand = cardContainer.querySelector("#hand").innerText;
    let kic = cardContainer.querySelector("#kic").innerText;
    let ref = cardContainer.querySelector("#ref").innerText;
    let spd = cardContainer.querySelector("#spe").innerText;
    let pos = cardContainer.querySelector("#pos").innerText;

    document.getElementById("name").value = name;
    document.getElementById("image").value = playerPic;
    document.getElementById("position").value = posi;
    document.getElementById("flags").value = flag;
    document.getElementById("logo").value = team;
    document.getElementById("rating2").value = rating;
    document.getElementById("diving").value = div;
    document.getElementById("handling").value = hand;
    document.getElementById("kicking").value = kic;
    document.getElementById("reflexes").value = ref;
    document.getElementById("speed").value = spd;
    document.getElementById("positioning").value = pos;
    cardContainer.remove()

  } else {
    document.querySelector(".player-inputs").style.display = "flex";
    document.querySelector(".gk-inputs").style.display = "none";

    let name = cardContainer.querySelector(".name").innerText;
    let playerPic = cardContainer.querySelector("#player-pic").src;
    let rating = cardContainer.querySelector("#rating").innerText;
    let flag = cardContainer.querySelector("#flag").src;
    let team = cardContainer.querySelector("#team").src;
    let pac = cardContainer.querySelector("#pac").innerText;
    let shot = cardContainer.querySelector("#shot").innerText;
    let pas = cardContainer.querySelector("#pas").innerText;
    let dri = cardContainer.querySelector("#dri").innerText;
    let def = cardContainer.querySelector("#def").innerText;
    let phy = cardContainer.querySelector("#phy").innerText;

    document.getElementById("name").value = name;
    document.getElementById("image").value = playerPic;
    document.getElementById("position").value = posi;
    document.getElementById("flags").value = flag;
    document.getElementById("logo").value = team;
    document.getElementById("ratings").value = rating;
    document.getElementById("pace").value = pac;
    document.getElementById("shooting").value = shot;
    document.getElementById("passing").value = pas;
    document.getElementById("dribbling").value = dri;
    document.getElementById("defending").value = def;
    document.getElementById("physical").value = phy;

    cardContainer.remove()

  }
}






