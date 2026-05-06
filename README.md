# Drei Essentials — Three.js Journey

Quick recap of the **Drei** lesson from [Three.js Journey](https://threejsjourney.com/) by Bruno Simon.

## What this project covers

This project explores [@react-three/drei](https://github.com/pmndrs/drei): a helper library that adds production-ready abstractions on top of React Three Fiber. Instead of wiring every utility by hand, the scene uses reusable components for camera controls, gizmos, reflections, text rendering, HTML overlays, and subtle motion effects.

- **Drei helper components** — ready-made building blocks to speed up common 3D tasks.
- **Interactive controls** — `OrbitControls`, `PivotControls`, and `TransformControls` for camera and object manipulation.
- **Visual enhancements** — `MeshReflectorMaterial` for a reflective floor and `Float` for lightweight motion.
- **DOM in 3D** — `Html` to render a screen-space label that can be occluded by meshes.
- **Async text rendering** — `Text` wrapped in `Suspense` for font loading without blocking the scene.

## What I built

- Bootstrapped a Vite + React + TypeScript app with `@react-three/fiber`, `three`, and `@react-three/drei`.
- Wrapped the scene in `<Canvas>` and configured camera parameters (`fov`, `near`, `far`, and initial `position`) directly via props.
- Composed `<Experience />` containing:
  - `<OrbitControls makeDefault />` for free camera navigation.
  - `ambientLight` and `directionalLight` for clear baseline lighting.
  - A sphere inside `<PivotControls>` so it can be moved with a visual pivot gizmo.
  - A cube referenced with `useRef`, then connected to `<TransformControls object={cube} />` for translation/rotation/scale edits.
  - A large floor plane using `MeshReflectorMaterial` to create glossy mirror-like reflections.
  - An `Html` annotation attached near the sphere (`wrapperClass="label"`) with occlusion against both the sphere and cube.
  - A floating `Text` object inside `Suspense` + `Float`, using a local font file for stylized typography.
- Styled the full-screen canvas and HTML label in `index.css` to keep the scene immersive and readable.
- Kept the scene clean and declarative while relying on drei utilities instead of manual Three.js setup code.

## What I learned

### 1) Why drei matters on top of React Three Fiber

- React Three Fiber gives the rendering foundation, while drei provides higher-level tools that reduce boilerplate and speed up iteration.
- Many scene features that would be long to implement manually become declarative one-liners.

### 2) How camera and object controls complement each other

- `OrbitControls` handles camera navigation globally.
- `PivotControls` and `TransformControls` make object manipulation interactive, which is great for layout and debugging in 3D space.

### 3) How refs bridge declarative and imperative patterns

- `TransformControls` expects a Three.js object reference; `useRef<Mesh>()` is the clean bridge from JSX to imperative APIs.
- This pattern is common when integrating advanced helpers that need direct object handles.

### 4) What `Html` solves in mixed UI scenes

- `Html` lets me place regular DOM content at a 3D position without building custom shaders or textures.
- Occlusion support (`occlude`) keeps labels believable by hiding them behind geometry when needed.

### 5) How `MeshReflectorMaterial` upgrades a simple floor

- A basic plane becomes a polished reflective surface with a few parameters (`blur`, `mirror`, `resolution`).
- It adds depth and visual quality with very little code compared to writing a custom reflection pipeline.

### 6) Why `Suspense` is useful with drei text/font assets

- `Text` can depend on font loading, so wrapping it in `Suspense` avoids rendering glitches during async asset fetches.
- This keeps the scene stable while resources initialize.

### 7) How small motion effects improve scene readability

- `Float` adds subtle animation with configurable intensity, making static content feel more alive.
- Utility components like this help polish presentation without maintaining a custom animation loop for every element.

## Run the project

```bash
npm install
npm run dev
```

## Credits

Part of the **Three.js Journey** course by Bruno Simon.
