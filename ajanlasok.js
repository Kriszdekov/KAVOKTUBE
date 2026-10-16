const fajlnev = decodeURIComponent(window.location.pathname.split("/").pop()) || "index.html";

const ajanlottZenek = zenek.filter(zene => zene.oldal !== fajlnev);

for (let i = ajanlottZenek.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ajanlottZenek[i], ajanlottZenek[j]] = [ajanlottZenek[j], ajanlottZenek[i]];
}

const lista = document.querySelector("#ajanlas-lista");

if (lista) {
    ajanlottZenek.forEach(zene => {
        const section = document.createElement("section");
        section.className = "ajanlas";

        const link = document.createElement("a");
        link.href = zene.oldal;

        if (zene.youtubeId) {
            const kep = document.createElement("img");
            kep.className = "kis-video";
            kep.src = `https://img.youtube.com/vi/${encodeURIComponent(zene.youtubeId)}/hqdefault.jpg`;
            kep.alt = `${zene.eloado} – ${zene.cim} borítókép`;
            kep.loading = "lazy";
            link.appendChild(kep);
        } else {
            const hely = document.createElement("div");
            hely.className = "kis-video";
            hely.textContent = "▶";
            link.appendChild(hely);
        }

        const adatok = document.createElement("div");
        adatok.className = "zene-adatok";
        const cim = document.createElement("h3");
        cim.textContent = `${zene.eloado} – ${zene.cim}`;
        const eloado = document.createElement("p");
        eloado.textContent = zene.eloado;
        adatok.append(cim, eloado);
        link.appendChild(adatok);
        section.appendChild(link);
        lista.appendChild(section);
    });
}
