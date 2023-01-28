// {
//     "image_url": "https://i.ibb.co/s3L8jVM/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-110202.jpg",
//     "name": "Contour De Force Mini Bronzer",
//     "price": 1999,
//     "rating": 4.7,
//     "star_url": "https://media.sugarcosmetics.com/upload/rating_star.png",
//     "reviews": "(20)",
//     "shade_url": "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
//     "shade_no": 11,
//     "count": 1,
//     "product": "",
//     "id": 123456792
//   },

let form = document.getElementById("form");
form.onsubmit = () => {
  event.preventDefault();

  // alert("hi");

  getDataFromTheForm();
};

let getDataFromTheForm = () => {
  let image_url = form.image_url.value;
  let name = form.name.value;
  let price = +form.price.value;
  let rating = +form.rating.value;
  let star_url = form.star_url.value;
  let reviews = +form.reviews.value;
  let shade_url = form.shade_url.value;
  let shade_no = +form.shade_no.value;
  let count = +form.count.value;
  let product = form.product.value;

  let obj = {
    image_url,
    name,
    price,
    rating,
    star_url,
    reviews,
    shade_url,
    shade_no,
    count,
    product,
  };

  postData(obj);
};

let postData = async (obj) => {
  try {
    let response = await fetch("https://blush-beauty.onrender.com/products", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    alert("Product Added Successfully");
  } catch (error) {
    console.log(error);
  }
};
document.getElementById("pmpage").onclick = () => {
  window.location.href = "/Orders/Products.html";
};
document.getElementById("pmpage").style.cursor = "pointer";
