function createFigure(tab) {
  //w argumentach nalezy podac dwuwymiarowa tablice(pierwszy wymiar tablicy to sciezka dostepu do zdjecia, a drugi wymiar to opis zdjecia)
  let container = document.querySelector(".container");
  for (let i = 0; i < tab.length; i++) {
    let figure = document.createElement("figure");
    figure.className = "figure";

    let img = document.createElement("img");
    img.src = tab[i][0];
    img.className = "img";
    img.alt = tab[i][1];

    let figcaption = document.createElement("figcaption");
    figcaption.className = "description";
    let description = document.createTextNode(tab[i][1]);
    figcaption.appendChild(description);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    container.appendChild(figure);
  }
}

let imgShoesSources = [
  ["images/buty/b1.jpg", "nike air force one low"],
  ["images/buty/b2.jpg", "nike air force one high"],
  ["images/buty/b3.jpg", "adidas yeezy v350"],
  ["images/buty/b4.jpg", "leather shoes"],
  ["images/buty/b5.jpg", "trainers"],
  ["images/buty/b6.jpg", "puma shoes"],
  ["images/buty/b7.jpg", "timberland shoes"],
  ["images/buty/b8.jpg", "vans shoes"],
  ["images/buty/b9.jpg", "air force one X supreme"],
  ["images/buty/b10.jpg", "balenciaga shoes"],
  ["images/buty/b11.jpg", "air force one mid"],
  ["images/buty/b12.jpg", "air max 97"],
];

let imgClothesSources = [
  ["images/odziez/i1.jpg", "harvard hoodie"],
  ["images/odziez/i2.jpg", "whithe hoodie"],
  ["images/odziez/i3.jpg", "whithe hoodie"],
  ["images/odziez/i4.jpg", "sherpa jacket"],
  ["images/odziez/i5.jpg", "waterproof jacket"],
  ["images/odziez/i6.jpg", "pants"],
  ["images/odziez/i7.jpg", "jeans"],
  ["images/odziez/i8.jpg", "fleece"],
  ["images/odziez/i9.jpg", "catana jacket"],
  ["images/odziez/i10.jpg", "trasher T-shirt"],
  ["images/odziez/i11.jpg", "tie dye T-shirt"],
  ["images/odziez/i12.jpg", "adidas T-shirt"],
];

createFigure(imgShoesSources);
createFigure(imgClothesSources);
