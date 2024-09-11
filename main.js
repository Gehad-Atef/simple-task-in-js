const header = document.createElement("h1");
const container = document.getElementsByClassName("container")[0];
const search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("placeholder", "Search");
search.style.cssText = `
  width:200px;
  height:30px;
  border:none;
  border:2px solid rgb(218, 209, 209);
  border-radius: 3px;
  float:right;
`;
container.style.cssText = `
  width:80%;
  height:100vh;
  margin:auto;
  margin-top:20px;
`;
header.textContent = "Assignment";
header.style.cssText = `
  color:orange;
`;
container.append(search);
container.append(header);
const containerDiv = document.createElement("div");
containerDiv.style.cssText = `
  width:80%;
  height:90vh;
  margin:auto;
  margin-top:20px;
`;
container.append(containerDiv);

const itemsArray = [
    {
        divImg: "images/download.jfif",
        divTitle: "Breakfast",
        divPragraph: "Lorem ipsum, dolor sit amet consectetu",
    },
    {
        divImg: "images/images (1).jfif",
        divTitle: "Dinner",
        divPragraph: "dolor sit amet consectetu,Lorem ipsum",
    },
    {
        divImg: "images/images (2).jfif",
        divTitle: "Lunch",
        divPragraph: "Lorem ipsum,sit consectetu amet consectetu",
    },
    {
        divImg: "images/images (3).jfif",
        divTitle: "Dessert",
        divPragraph: "Lorem ipsum, dolor sit amet ipsum",
    },
    {
        divImg: "images/images (4).jfif",
        divTitle: "Breakfast",
        divPragraph: "Lorem ipsum, dolor sit consectetu",
    },
    {
        divImg: "images/images.jfif",
        divTitle: "Lunch",
        divPragraph: "Lorem ipsum, dolor sit amet consectetu",
    },
];

function createCards() {
    for (let i = 0; i < itemsArray.length; i++) {
        const divOne = document.createElement("div");
        const divImg = document.createElement("img");
        const divTitle = document.createElement("h2");
        const divPragraph = document.createElement("p");
        const divButton = document.createElement("button");

        divOne.style.cssText = `
          width:27%;
          border:1px solid rgb(218, 209, 209);
          height:45%;
          border-radius:10px;
          text-align:center;
          margin:10px 0px;
          margin-right:50px;
          display:inline-block;
        `;
        divImg.setAttribute("src", itemsArray[i].divImg);
        divImg.style.cssText = `
          width:50%;
          height:50%;
          border-radius:50%;
        `;
        divTitle.textContent = itemsArray[i].divTitle;
        divTitle.style.cssText = `
          margin:10px 0px;
          color:orange;
        `;
        divPragraph.textContent = itemsArray[i].divPragraph;
        divPragraph.style.cssText = `
          font-size:17px;
          color:gray;
          margin:5px 0px;
        `;
        divButton.textContent = "Buy";
        divButton.style.cssText = `
          width:100px;
          height:30px;
          border-radius:10px;
          border:none;
          margin-bottom:5px;
          color:white;
          font-size:16px;
          background-color:brown;
        `;

        divOne.append(divImg, divTitle, divPragraph, divButton);
        containerDiv.append(divOne);
    }
}

createCards();
