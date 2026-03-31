# Portfolio d'artista — Lettera Visiva

Homepage autoriale concepita come **narrazione verticale**: non una gallery commerciale, ma una sequenza da leggere lentamente.

## Concept

- **Eleganza contemporanea**: palette neutra con un accento caldo.
- **Atmosfera poetica**: testo frammentario, pause, ritmo respirato.
- **Esperienza immersiva**: micro animazioni morbide, scroll naturale, nessun effetto pesante.
- **Identità forte**: tipografia editoriale (serif + sans), grandi vuoti, opere protagoniste.

## Struttura UX implementata

1. **Hero iconico** — nome artista, tagline evocativa, 3 opere hero.
2. **Bio breve** — tono editoriale, leggibilità alta.
3. **Opere selezionate** — card espandibili (no galleria standard).
4. **Portfolio completo** — timeline verticale narrativa.
5. **Eventi / Mostre** — elenco essenziale.
6. **Contatti** — email e social minimal.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Framer Motion (reveal/scroll micro-interactions)
- CSS Modules + global design tokens

## Design system (token principali)

- Colori in `src/app/globals.css`
	- `--bg`, `--surface`, `--text`, `--muted`, `--line`, `--accent`
- Font
	- Serif: `Cormorant Garamond`
	- Sans: `Inter`
- Spaziatura
	- Ritmo a blocchi con ampi margini verticali e sezioni distanziate

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Build e qualità

```bash
npm run lint
npm run build
```

## Personalizzazione veloce

- Contenuti principali: `src/components/LetterPortfolio.tsx`
- Stile e ritmo visivo: `src/components/LetterPortfolio.module.css`
- Metadati pagina: `src/app/layout.tsx`
- Immagini placeholder opere: `public/artworks/*.svg`
