document.addEventListener("DOMContentLoaded", () => {
  const itemNav = document.querySelectorAll(".nav-item");
  const itemSlider = document.querySelector(".wrapper");

  const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  const colors = document.querySelectorAll(".colorItems");
  const detailImage = document.querySelector(".detailImage");
  const navItem = document.querySelectorAll(".nav-item");
  const title = document.querySelector(".titleItems");
  const price = document.querySelector(".priceItems");
  const size = document.querySelectorAll(".sizeItems");
  const buyNow = document.querySelector(".buyNow");
  const close = document.querySelector(".close");
  const payment = document.querySelector(".payment");

  let choseProduct = products[0];
  console.log(close);
  close.addEventListener("click", () => {
    payment.classList.add("hide");
  });

  buyNow.addEventListener("click", () => {
    payment.classList.remove("hide");
  });

  size.forEach((item, index) => {
    item.addEventListener("click", () => {
      size.forEach((item2, index) => {
        item2.style.backgroundColor = "white";
        item2.style.color = "black";
      });
      item.style.backgroundColor = "black";
      item.style.color = "white";
    });
  });

  navItem.forEach((item, index) => {
    item.addEventListener("click", () => {
      choseProduct = products[index];
      detailImage.src = `${choseProduct.colors[0].img}`;

      colors.forEach((item, index) => {
        item.style.backgroundColor = `${choseProduct.colors[index].code}`;
        console.log("clor", item.style.backgroundColor);
        item.addEventListener("click", () => {
          detailImage.src = `${choseProduct.colors[index].img}`;
        });
      });

      title.innerHTML = `${choseProduct.title}`;
      price.innerHTML = `$${choseProduct.price}`;
    });
  });

  colors.forEach((item, index) => {
    item.style.backgroundColor = `${choseProduct.colors[index].code}`;
    console.log("clor", item.style.backgroundColor);
    item.addEventListener("click", () => {
      detailImage.src = `${choseProduct.colors[index].img}`;
    });
  });

  itemNav.forEach((item, index) => {
    item.addEventListener("click", () => {
      console.log(item);
      itemSlider.style.transform = `translateX(${-100 * index}vw)`;
    });
  });
});
