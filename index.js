const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/ramen1.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/mae-mu-en4qp-aK1h4-unsplash.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/susann-schuster-5x8dUGe-7Fo-unsplash.jpg", rating: 5, comment: "Best ever!" }
];

document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
    showRamenDetails(ramens[0]); 
});

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => showRamenDetails(ramen));
        menu.appendChild(img);
    });
}

function showRamenDetails(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("detail-name").textContent = ramen.name;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant;
    document.getElementById("detail-rating").textContent = ramen.rating;
    document.getElementById("detail-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.getElementById("ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        ramens.push(newRamen);
        displayRamens();
        this.reset(); // Clear form fields
    });
}
