function generateImage(src) {
    let img = document.createElement("img");
    img.src = `${src}`;
    img.style.width = "200px";
    img.style.height = "160px";
    return img;
};

// export { generateImage };
export default generateImage; //imamo jednu f-ju pa je lakse odmah ovako