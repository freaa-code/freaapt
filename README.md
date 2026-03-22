# Personlig trener – nettside

Statisk nettside bygget med ren HTML, CSS og JavaScript. Ingen rammeverk, ingen avhengigheter. Fungerer offline og online.

---

## Filstruktur

```
prosjekt/
├── index.html          # Forside
├── ommeg.html          # Om meg
├── artikler.html       # Artikler og PDF-er
├── kontakt.html        # Kontaktskjema
├── style.css           # All layout og komponenter
├── variables.css       # Designtokens (farger, fonter, spacing)
├── script.js           # Scroll og animasjoner
├── bilder/             # Bilder (portrett etc.)
└── pdf/                # PDF-artikler
```

---

## Design

- **Farger:** Mørk bakgrunn `#0a0a08`, kremhvit tekst `#f5f0e8`, Cosmic Orange `#F77E2D` (Apple iPhone 17 Pro)
- **Fonter:** Offline-sikre systemfonter – `Iowan Old Style / Palatino` (serif) og `-apple-system / Segoe UI` (sans)
- **Alle designtokens** ligger i `variables.css` – endre der for å justere hele siden på én gang

---

## Legge til innhold

### Ny artikkel
Åpne `artikler.html` og kopier blokken i kommentaren øverst i listen.

For ekstern lenke:
```html
<a href="https://eksempel.no" class="article-item" target="_blank">
```

For PDF i pdf/-mappen:
```html
<a href="pdf/filnavn.pdf" class="article-item" target="_blank">
```

Legg til `<span class="article-type">PDF</span>` i `.article-meta` for å vise PDF-badge.

### Ny PDF
Legg filen i `pdf/`-mappen og referer til den som `pdf/filnavn.pdf`.
Merk: mellomrom i filnavn fungerer lokalt men bør erstattes med bindestrek hvis siden legges på nett.

### YouTube-videoer (ommeg.html)
Finn video-ID i YouTube-URL-en: `youtube.com/watch?v=ID_ER_HER`

Oppdater to steder per video:
```html
<div class="video-wrapper" data-id="VIDEO_ID">
  ...
  <a href="https://www.youtube.com/watch?v=VIDEO_ID" ...>
```

Videoer lastes automatisk når nett er tilgjengelig. Offline vises en mørk boks med lenke.

---

## Offline

Siden er bygget for å fungere helt uten internett:
- Alle fonter er systemfonter
- Alle bilder og PDF-er er lokale filer
- YouTube-embeds og eksterne lenker krever nett, men siden fungerer uten dem

---

## Publisering (GitHub Pages)

1. Last opp alle filer til et GitHub-repository
2. Settings → Pages → Source: main, / (root) → Save
3. Siden er live på `https://brukernavn.github.io/repositorynavn`

**NB:** Må aktiveres per repository.

### Skjule siden fra Google
Alle sider har denne linjen i `<head>` som hindrer indeksering:
```html
<meta name="robots" content="noindex, nofollow">
```
Fjern denne fra alle fire HTML-filer når du vil bli synlig i søkemotorer.

### Eget domene
Kjøp domene hos f.eks. Domeneshop.no (ca. 150–200 kr/år for .no).
Pek det mot GitHub Pages via DNS – GitHub Pages-hostingen er fortsatt gratis.

---

## Utøverkort (ommeg.html)

Kortet henter **ikke** live data – tallene er hardkodet og må oppdateres manuelt.
Oppdater verdier direkte i HTML under `.utover-tall-celle`-blokkene.

---

## Template-bruk

For å gjenbruke siden til en ny person:
- Søk etter navn og sted i alle HTML-filer og bytt ut
- Bytt portrettbilde i `bilder/`
- Oppdater kontaktinfo i `kontakt.html`
- `style.css` og `variables.css` kan gjenbrukes uendret
