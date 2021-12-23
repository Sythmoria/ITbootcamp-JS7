console.log("Nizovi objekata");

let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let arrBlogs = [blog1, blog2, blog3];

//ispis objekata iz niza pomocu foreach petlje
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});


arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

//ispis objekata iz niza pomocu for petlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}