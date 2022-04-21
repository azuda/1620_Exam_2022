// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
function load_all_contacts() {
  clear_view();

  for (let i = 0; i < contactsList.length; i++) {
    add_contact(contactsList[i]["name"], i);
  }
}

function add_contact(contact_name, index) {
  let contacts_area = document.getElementById("display_all_contacts");

  let contact_card =
  `<button onclick="load_single_contact(index)">
    <img src="img/${contact_name[index]["image"]}">
    <p>${contact_name}</p>
  </button>`;

  contacts_area.insertAdjacentHTML("afterbegin", contact_card);
}

function clear_view() {
  let elements = document.querySelectorAll("main");
  elements.forEach(ele => ele.remove());
}

function load_single_contact(index) {
  clear_view();

  let contact_area = document.getElementById("display_single_contact");
  
  let html_to_insert = `
  <div class="container">
    <img src="img/${contactsList[index]["image"]}">
    <p>
      <strong>${contactsList[index]["name"]}</strong>
      ${contactsList[index]["phone"]}
      ${contactsList[index]["email"]}
    </p>
    <span class="fa-thin fa-angle-left" onclick="close_contact()"></span>
  </div>`;

  contact_area.insertAdjacentHTML("afterbegin", html_to_insert);
}

function close_contact() {
  load_all_contacts();
}

