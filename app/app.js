document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("left");
  const nextBtn = document.getElementById("right");
  const container1 = document.querySelector(".container-flex-outfit.vb-flexbox");
  const container2 = document.querySelector(".container-flex-outfit.chemises-flexbox");
  const container3 = document.querySelector(".container-flex-outfit.shoes-flexbox");
  
  let scrollAmount = 0;

  let o = 0;
  let pas = 200;
  let width = container1.o;
  let titleChangeOutfit = document.querySelector(
    ".title-outift-change-and-desc-outfit>h2"
  );

  let descriptionChangeOutfit = document.querySelector(
    ".description-change-outfit"
  );

  // ALL BUTTON

  let effectFlashing = document.querySelector(".flashing-effect-2");

  let buttonVestes = document.querySelectorAll(".list-item-outfit>li")[0];
  let buttonChemises = document.querySelectorAll(".list-item-outfit>li")[2];
  let buttonSweat = document.querySelectorAll(".list-item-outfit>li")[4];
  let buttonPull = document.querySelectorAll(".list-item-outfit>li")[6];

  let choixOutfit = 0; // la variable choixOutfit contient le choix de tenue vestimentaire


  buttonVestes.addEventListener("click", () => {
    effectFlashing.classList.add("flashing-effect");
    document.querySelector(".vb-flexbox").style.display = "flex";
    document.querySelector(".chemises-flexbox").style.display = "none";
    document.querySelector(".shoes-flexbox").style.display = "none";

    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");

    document.querySelector(".l").classList.remove("derbiesambiance");
    document.querySelector(".l").classList.remove("chemiseambiance");
    document.querySelector(".l").classList.add("vbambiance");

    buttonVestes.classList.add("actif");
    buttonChemises.classList.remove("actif");
    buttonSweat.classList.remove("actif");
    titleChangeOutfit.textContent = "Vestes / Blousons";
    descriptionChangeOutfit.textContent =
      "Les vestes et blousons sont des vêtements de dessus qui peuvent être portés par-dessus d'autres vêtements pour fournir une protection supplémentaire contre les intempéries, le froid ou simplement pour ajouter une couche supplémentaire à un look. Ils peuvent être faits de différents matériaux, tels que le cuir, le denim, la laine, le polyester, le nylon ou le coton, et viennent dans une variété de styles, de coupes et de couleurs pour convenir à différents goûts et occasions";
  });

  buttonChemises.addEventListener("click", () => {
    document.querySelector(".vb-flexbox").style.display = "none";
    document.querySelector(".chemises-flexbox").style.display = "flex";
    document.querySelector(".shoes-flexbox").style.display = "none";
    document.querySelector(".l").classList.remove("vbambiance");
    document.querySelector(".l").classList.remove("derbiesambiance");
    document.querySelector(".l").classList.add("chemiseambiance");
    titleChangeOutfit.textContent = "Chemises";
    buttonChemises.classList.add("actif");
    buttonVestes.classList.remove("actif");
    buttonSweat.classList.remove("actif");

    effectFlashing.classList.add("flashing-effect");
    descriptionChangeOutfit.textContent =
      "Nos chemises coupe slim fit en coton et en polyester sont des chemises élégantes et modernes qui offrent une silhouette ajustée et flatteuse pour les hommes. Le coton est un tissu doux et respirant qui assure un confort tout au long de la journée, tandis que le polyester est un matériau durable et résistant qui ajoute de l'élasticité et une facilité d'entretien à la chemise.";
    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");
  });

  buttonSweat.addEventListener("click", () => {
    document.querySelector(".vb-flexbox").style.display = "none";
    document.querySelector(".chemises-flexbox").style.display = "none";
    document.querySelector(".shoes-flexbox").style.display = "flex";
    document.querySelector(".l").classList.remove("vbambiance");
    document.querySelector(".l").classList.remove("chemiseambiance");
    document.querySelector(".l").classList.add("derbiesambiance");
    

    buttonSweat.classList.add("actif");
    buttonVestes.classList.remove("actif");
    buttonChemises.classList.remove("actif");

    titleChangeOutfit.textContent = "Derbies";
    effectFlashing.classList.add("flashing-effect");
    descriptionChangeOutfit.textContent =
      "Les derbies sont des chaussures élégantes et polyvalentes qui peuvent être portées pour de nombreuses occasions, y compris les événements formels et semi-formels. Ces chaussures ont une apparence classique et sophistiquée, avec des lacets et une tige lisse en cuir ou en daim, qui les rendent adaptées à un large éventail de tenues.    ";

    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");
  });

  function scrollRight() {
    pas = 200;

    if(scrollAmount==400){
      pas=200}
      if (scrollAmount>= 600) {
        scrollAmount =600
        pas=0;
      }
    container1.scrollTo({
      top: 0,
      left: (scrollAmount += pas),
      behavior: "smooth",
    });
    container2.scrollTo({
      top: 0,
      left: (scrollAmount += pas),
      behavior: "smooth",
    });
    container3.scrollTo({
      top: 0,
      left: (scrollAmount += pas),
      behavior: "smooth",
    });

    console.log('scrollAmount=>',scrollAmount);
    console.log("pas=>",pas)

   
  }

  // fonction pour faire défiler la div vers la gauche
  function scrollLeft() {
    pas = 200;
    container1.scrollTo({
      top: 0,
      left: (scrollAmount -= pas),
      behavior: "smooth",
    });
    container2.scrollTo({
      top: 0,
      left: (scrollAmount -= pas),
      behavior: "smooth",
    });
    container3.scrollTo({
      top: 0,
      left: (scrollAmount -= pas),
      behavior: "smooth",
    });

    if (scrollAmount<0) {
      scrollAmount =0
      pas=0;
    }
    console.log(scrollAmount);
  }

  prevBtn.addEventListener("click", () => {
    scrollLeft();
  });

  nextBtn.addEventListener("click", () => {
    scrollRight();
  });

  // const observer = new IntersectionObserver((entries) => {
  //   // Loop over the entries
  //   entries.forEach((entry) => {
  //     // If the element is visible
  //     if (entry.isIntersecting) {
  //       // Add the animation class
  //       entry.target.classList.add("image-animation");
  //     }
  //   });
  // });

  // const viewbox = document.querySelectorAll("body>div");
  // viewbox.forEach((image) => {
  //   observer.observe(image);
  // });



  let newsButton = document.querySelector("#news");
  let accessButton = document.querySelector("#access");
  let collectionButton1 = document.querySelector(".collection");
    let collectionButton = document.querySelector("#collection");
  let shoesButton = document.querySelector("#shoes");

  let menuCollection = document.querySelector(".submenuCollection");
  let menuNews = document.querySelector(".submenuNews");

  collectionButton.addEventListener("mouseenter", () => {
    document.querySelector(".menu").classList.add("menu-scroll");
    menuCollection.classList.replace("submenuCollection", "show");
    menuNews.classList.replace("show", "submenuNews");
  });

  document.querySelector(".menu").addEventListener("mouseleave", () => {
    if(scrollY < 50){
    document.querySelector(".menu").classList.remove("menu-scroll");
    }
    menuCollection.classList.replace("show", "submenuCollection");
    menuNews.classList.replace("show", "submenuNews");
  });


  shoesButton.addEventListener("mouseenter", () => {
    document.querySelector(".menu").classList.add("menu-scroll");
    menuNews.classList.replace("submenuNews", "show");
    menuCollection.classList.replace("show", "submenuCollection");
  });

  newsButton.addEventListener("mouseenter", () => {

    menuNews.classList.replace("show", "submenuNews");
    menuCollection.classList.replace("show", "submenuCollection");
  })

  accessButton.addEventListener("mouseenter", () => {
    menuNews.classList.replace("show", "submenuNews");
    menuCollection.classList.replace("show", "submenuCollection");  
  })



  // collectionButton1.addEventListener("mouseleave", () => {
    
  //   menuCollection.classList.replace("show", "submenuCollection");
  //   menuNews.classList.replace("show", "submenuNews");
  // }
  // );


  window.addEventListener("scroll", () => {
    if(scrollY > 50){

      document.querySelector(".menu").classList.add("menu-scroll");
    }else{
      document.querySelector(".menu").classList.remove("menu-scroll");
    }
  })
});
