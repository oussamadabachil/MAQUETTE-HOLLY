document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("left");
  const nextBtn = document.getElementById("right");
  const container = document.querySelector(".container-flex-outfit");
  let scrollAmount = 0;

  let o = 0
  let pas = 200
  let width = container.o;
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

  console.log(buttonVestes);

  buttonVestes.addEventListener("click", () => {
    effectFlashing.classList.add("flashing-effect");

    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");

    titleChangeOutfit.textContent = "Vestes / Blousons";
    descriptionChangeOutfit.textContent =
      "Les vestes et blousons sont des vêtements de dessus qui peuvent être portés par-dessus d'autres vêtements pour fournir une protection supplémentaire contre les intempéries, le froid ou simplement pour ajouter une couche supplémentaire à un look. Ils peuvent être faits de différents matériaux, tels que le cuir, le denim, la laine, le polyester, le nylon ou le coton, et viennent dans une variété de styles, de coupes et de couleurs pour convenir à différents goûts et occasions";
  });

  buttonChemises.addEventListener("click", () => {
    titleChangeOutfit.textContent = "Chemises";

    effectFlashing.classList.add("flashing-effect");
    descriptionChangeOutfit.textContent =
      "Nos chemises coupe slim fit en coton et en polyester sont des chemises élégantes et modernes qui offrent une silhouette ajustée et flatteuse pour les hommes. Le coton est un tissu doux et respirant qui assure un confort tout au long de la journée, tandis que le polyester est un matériau durable et résistant qui ajoute de l'élasticité et une facilité d'entretien à la chemise.";
    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");
  });

  buttonSweat.addEventListener("click", () => {
    titleChangeOutfit.textContent = "Derbies";
    effectFlashing.classList.add("flashing-effect");
    descriptionChangeOutfit.textContent =
      "Les derbies sont des chaussures élégantes et polyvalentes qui peuvent être portées pour de nombreuses occasions, y compris les événements formels et semi-formels. Ces chaussures ont une apparence classique et sophistiquée, avec des lacets et une tige lisse en cuir ou en daim, qui les rendent adaptées à un large éventail de tenues.    ";

    setTimeout(() => {
      effectFlashing.classList.remove("flashing-effect");
    }, "600");
  });

  function scrollRight() {



    if(scrollAmount==200){
        pas=400
    }
    if(scrollAmount==600){
        pas=200
    }
    if(scrollAmount==1000){
        pas=400
    }
    if(scrollAmount==1400){
        scrollAmount=1400
        pas=0
    }
    container.scrollTo({
      top: 0,
      left: (scrollAmount += pas),
      behavior: "smooth",
    });
    console.log(scrollAmount)

    if(scrollAmount<0){
        scrollAmount=0
    }
    


  }

  // fonction pour faire défiler la div vers la gauche
  function scrollLeft() {
    pas =200

    if(scrollAmount==1200){
        pas = 400
    }
    if(scrollAmount==400){
        pas = 400
    }
    if(scrollAmount==0){
        pas = 200
    }

    container.scrollTo({
      top: 0,
      left: (scrollAmount -= pas),
      behavior: "smooth",
    });


    if(scrollAmount<0){
        scrollAmount=0
    }
    console.log(scrollAmount)

  }

  prevBtn.addEventListener("click", () => {
    scrollLeft();
  });

  nextBtn.addEventListener("click", () => {
    scrollRight();
  });

  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("image-animation");
      }
    });
  });

  const viewbox = document.querySelectorAll("body>div");
  viewbox.forEach((image) => {
    observer.observe(image);
  });
});
