var img = document.querySelectorAll(".wrap img");
var btn = document.querySelectorAll(".burger__right-select button");
var price = document.querySelector(".price-text .price");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    // active js
    this.classList.toggle("active");
    // PRICE js
    var Tpr = this.getAttribute("data-price");
    var pr = +price.innerHTML;
    if (this.getAttribute("class") == "active") {
      var pr_text = pr + +Tpr;
      price.innerHTML = pr_text;
    } else {
      var pr_text = pr - +Tpr;
      price.innerHTML = pr_text;
    }
    console.log(img);
    // IMG js
    for (let ix = 0; ix < img.length; ix++) {
        if (btn[i].getAttribute("data-name") == img[ix].getAttribute("data-name")) {
            console.log(img[ix]);
            img[ix].classList.toggle("d-block");
        }   
         
    }
  });
}
