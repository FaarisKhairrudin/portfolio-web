# React Bits Setup Notes

This portfolio is configured to use React Bits through the shadcn registry format.

## What is already configured

- `components.json` includes the React Bits registry:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

- `vite.config.js` and `jsconfig.json` define the `@/*` alias for imports from `src`.
- The Aurora component from React Bits has been added manually from the registry because the shadcn CLI failed while updating files in this environment.
- The required `ogl` dependency is installed.

## Installed React Bits component

- `src/components/Aurora/Aurora.jsx`
- `src/components/Aurora/Aurora.css`
- `src/components/CountUp/CountUp.jsx`
- `src/components/SpotlightCard/SpotlightCard.jsx`
- `src/components/SpotlightCard/SpotlightCard.css`
- `src/components/Magnet/Magnet.jsx`
- `src/components/DotGrid/DotGrid.jsx`
- `src/components/DotGrid/DotGrid.css`
- `src/components/TiltedCard/TiltedCard.jsx`
- `src/components/TiltedCard/TiltedCard.css`
- `src/components/PillNav/PillNav.jsx`
- `src/components/PillNav/PillNav.css`
- `src/components/LogoLoop/LogoLoop.jsx`
- `src/components/LogoLoop/LogoLoop.css`
- `src/components/ShinyText/ShinyText.jsx`
- `src/components/ShinyText/ShinyText.css`

Aurora is available in the project, but it is not loaded by default on the homepage because the WebGL animation can feel heavy on some devices. The current homepage uses a lighter CSS-only aurora-inspired background.

CountUp, SpotlightCard, and Magnet are active on the homepage:

- CountUp animates the proof metrics.
- SpotlightCard powers the featured project card hover effect.
- Magnet adds a subtle cursor-following effect to primary links.
- DotGrid provides a lightweight React Bits-inspired canvas grid in the hero.
- TiltedCard adds a subtle 3D hover effect to the profile photo.
- PillNav provides the top navigation interaction without adding GSAP/router dependencies.
- LogoLoop adds a lightweight technology icon rail in the Capabilities section.
- ShinyText adds a subtle reflective highlight to the hero kicker.

The original React Bits DotGrid uses GSAP and InertiaPlugin. This project uses a lightweight local adaptation for better portfolio performance.

## Adding more React Bits components

Try the shadcn registry command first:

```bash
npx shadcn@latest add @react-bits/ComponentName-TS-CSS
```

If that fails, fetch the registry JSON manually:

```bash
https://reactbits.dev/r/ComponentName-TS-CSS.json
```

Then copy the component files into `src/components`.

## Suggested components for this portfolio

- Aurora: optional hero background for high-motion versions
- CountUp: proof metrics
- AnimatedContent: section reveal animation
- SpotlightCard or GlareHover: featured project cards
- Magnet: primary buttons or social links

Use React Bits as accents, not as the whole design system, so the portfolio stays professional and readable.
