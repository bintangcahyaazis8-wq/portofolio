const members = [
    {
        id: 1,
        name: "Nazriel",
        role: "PPT",
        photo: "nazriel.jpeg",
        bio: "18 mei 2008, tb 168, bb ?, umur 17."
    },
    {
        id: 2,
        name: "Ariel",
        role: "Makalah",
        photo: "ariel.jpeg",
        bio: "28 Februari 2009, tb 163,5, bb 52, umur 16."
    },
    {
        id: 3,
        name: "Azis",
        role: "Web",
        photo: "azis.jpeg",
        bio: "28 desember 2008, umur 16, tb 175, bb 53."
    },
    {
        id: 4,
        name: "Abian",
        role: "Penjelasan",
        photo: "abian.jpeg",
        bio: "06 Juni 2009, tb 166, bb 63, umur 16."
    },
    {
        id: 5,
        name: "Dafa",
        role: "pengertian",
        photo: "dafa.jpeg",
        bio: "UMUR: 17 TAHUN, TB:175, BB:60, TANGGAL LAHIR: 04/Oktober/ 2008."
    },
    {
        id: 6,
        name: "Dani",
        role: "Pengertian",
        photo: "dani.jpeg",
        bio: "12 Februari 2009, Tb 171, bb 48, Umur 16."
    },
];

const container = document.getElementById("member-container");
if (container) {
    members.forEach(member => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${member.photo}" alt="Foto ${member.name}">
            <h3 onclick="goToDetail(${member.id})">${member.name}</h3>
            <p>${member.role}</p>
        `;

        container.appendChild(card);
    });
}

function goToDetail(id) {
    const member = members.find(m => m.id === id);
    localStorage.setItem("selectedMember", JSON.stringify(member));
    window.location.href = "member.html";
}

const detailContainer = document.getElementById("member-detail");
if (detailContainer) {
    const selectedMember = JSON.parse(localStorage.getItem("selectedMember"));
    if (selectedMember) {
        detailContainer.innerHTML = `
            <img src="${selectedMember.photo}" alt="Foto ${selectedMember.name}">
            <h2>${selectedMember.name}</h2>
            <p><strong>Role:</strong> ${selectedMember.role}</p>
            <p><strong>Bio:</strong> ${selectedMember.bio}</p>
            <button onclick="goBack()">Kembali</button>
        `;
    }
}

function goBack() {
    window.location.href = "index.html";
}
