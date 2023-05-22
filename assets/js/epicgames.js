
var games=[
    {
     name:"Kine", 
     image:"https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/k/kine-switch/hero" ,
     
    },
    {
     name:"Journey",
     image: "https://cdn.cloudflare.steamstatic.com/steam/apps/638230/capsule_616x353.jpg?t=1660850060",
     
    },
    {
      name:"Fortnite",
      image:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10idH?ver=489b",
      
    },
    {
       name:"World War Z",
       image:"https://www.relyonhorror.com/wp-content/uploads/2019/04/world-war-z-review.png",
       

    },
    {
        name:"Jon Wick Hex",
        image:"https://johnwickhex.com/images/jwh-facebook.jpg",

    },
    {
        name:"Cyberpunk 2077",
        image:"https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
  
    },
    {
        name:"ABZU",
        image:"https://cdn1.epicgames.com/offer/7af7476ff9eb4a8d9cd9d6486224de76/ABZU_Portrait_Storefront_1200X1600_1200x1600-61df06244a496c82f3ac231174c1b1f5",
        
    },
    {
        name:'Batman Akham City',
        image:"https://assets-prd.ignimgs.com/2021/12/08/batmanarkhamcity-1638989730511.jpg",
        icon:`<i class="fa-solid fa-download"></i>`,
        user:"User"
    },
    {
        name:'Metro Exodus',
        image:"https://cdn.akamai.steamstatic.com/steam/apps/412020/capsule_616x353.jpg?t=1669390585",
        icon: `<i class="fa-solid fa-download"></i>`,
        user:"User"
        
    },
    {
        name:'Dauntless',
        image:"https://cdn1.epicgames.com/offer/jackal/EGS_LIVEFORTHEHUNT_PhoenixLabs_S1_2560x1440-bee1a2ffa0adadb1652d592016dc4032",
        user:"OS Unsupported"
    },
]
for (let i = 0; i < games.length; i++) {

 area.innerHTML+=`<div class="card" >
 <img src="${games[i].image}" class="card-img-top" alt="">
 <div class="card-body">
   <h5 class="card-title">${games[i].name}</h5>
   <a>${games[7].icon}</a>
   <a>${games[9].user}</a>
 </div>
</div>`
    
}