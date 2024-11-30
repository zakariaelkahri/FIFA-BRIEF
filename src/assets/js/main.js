  function getData(){
 fetch("./players.json")
  .then((res)=>{
    return res.json()
    })
    .then((data) => { 
      let pl= data
      dataCard(pl);
    })
    }
    getData()

    
// players position :
let lw = document.getElementById("player1")
let formation = document.querySelector('.formation')
let card = document.querySelectorAll('.player-card')
let position = document.getElementById('position')
let btn = document.getElementById("add")
let bensh = document.getElementById("bensh")



position.addEventListener('change',()=>{
    if(position.value == "GK"){
        document.querySelector(".player-inputs").style.display="none"
        document.querySelector(".gk-inputs").style.display="flex"
    }else if(position.value == "position"){
        document.querySelector(".player-inputs").style.display="none"
        document.querySelector(".gk-inputs").style.display="none"
    }
    else{
        document.querySelector(".player-inputs").style.display="flex"
        document.querySelector(".gk-inputs").style.display="none"
    }
})
function addTobensh(obj){
  let test =`          <div class="player LW" >
  <div class="card-container">
              <div id="icons">
      <i class="icon2 fa-solid fa-arrow-up-long"></i>
      <i class="icon fa-solid fa-trash" ></i>
      <i class="icon1 fa-solid fa-pen-to-square"></i>
    </div>
    <div class="teams">
      <img
        width="13em"
        src="${obj.flag}"
        alt="nationality"
      />
      <img
        width="15em"
        src="${obj.logo}"
        alt="corrent team"
      />
    </div>
    <p class="rating">${obj.position}<span id="rating1">${obj.rating}</span></p>
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
      <p class="name">${obj.nome}</p>
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
</div>         
`
  console.log(test)
  bensh.innerHTML +=test
}


function GetValues(){
  let formul = document.getElementById("playerinfo")
  const plrs = []
    btn.addEventListener("click",()=>{
      let formValue =  new FormData(formul)

      const obj = {
        nome: formValue.get('name') ,
        photo:formValue.get('image') ,
        position: formValue.get('position'),
        flag:formValue.get('flag') ,
        logo:formValue.get('logo'),
        rating:formValue.get('rating'),
        pace:formValue.get('pace') ,
        shooting:formValue.get('shooting'),
        passing:formValue.get('passing') ,
        dribbling:formValue.get('dribbling') ,
        defending:formValue.get('defending') ,
        physical:formValue.get('physical') 
      }
      plrs.push(obj)
      // addTobensh();
      addTobensh(obj)
      formul.reset()

    })
        }
        GetValues()
    function dataCard(pl){
      pl.players.map((ele)=>{
      bensh.innerHTML += `          <div class="play LW" id="player1">
          <div class="card-container">
                      <div id="icons">
              <i class="icon2 fa-solid fa-arrow-up-long"></i>
              <i class="icon fa-solid fa-trash" ></i>
              <i class="icon1 fa-solid fa-pen-to-square"></i>
            </div>
            <div class="teams">
              <img
                width="13em"
                src="${ele.flag}"
                alt="nationality"
              />
              <img
                width="15em"
                src="${ele.logo}"
                alt="corrent team"
              />
            </div>
            <p class="rating">${ele.position}<span id="rating1">${ele.rating}</span></p>
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
        </div>         `
      })
      pl.goalkeepers.map((ele)=>{
        bensh.innerHTML += `          <div class="play LW" id="player1">
            <div class="card-container">
                        <div id="icons">
              <i class="icon2 fa-solid fa-arrow-up-long"></i>
              <i class="icon fa-solid fa-trash" ></i>
              <i class="icon1 fa-solid fa-pen-to-square"></i>
            </div>
              <div class="teams">
                <img
                  width="13em"
                  src="${ele.flag}"
                  alt="nationality"
                />
                <img
                  width="15em"
                  src="${ele.logo}"
                  alt="corrent team"
                />
              </div>
              <p class="rating">${ele.position}<span id="rating1">${ele.rating}</span></p>
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
                  <p class="stats">PAC<span id="pac">${ele.diving}</span></p>
                  <p class="stats">SHOT<span id="shot">${ele.handling}</span></p>
                  <p class="stats">PAS<span id="pas">${ele.kicking}</span></p>
                  <p class="stats">DRI<span id="dri">${ele.reflexes}</span></p>
                  <p class="stats">DEF<span id="def">${ele.speed}</span></p>
                  <p class="stats">PHY<span id="phy">${ele.positioning}</span></p>
                </div>
              </div>
            </div>
          </div>         `
        })
    }







