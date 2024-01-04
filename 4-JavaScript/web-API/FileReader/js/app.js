const fileInput = document.querySelector("#fileInput");
const output = document.querySelector("#output");

fileInput.addEventListener("change", () => {
  const reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.height = "200";

    img.src = event.target.result;
    output.append(img);
  });
  // console.log(fileInput.files[0].type);
});
