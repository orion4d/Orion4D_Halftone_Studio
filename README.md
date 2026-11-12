# Orion4D Halftone Studio V2

**[Visit the official website](https://orion4d.github.io/Orion4D_Halftone_Studio/en/index.html)**

<img width="2547" height="1380" alt="image" src="https://github.com/user-attachments/assets/b668388c-523a-40c9-a6c7-bf054a64d9a6" />

Orion4D Halftone Studio is a portable graphics studio for Windows x64. It turns images into halftones, separation films, typographic compositions and 3D reliefs. It is designed for graphic designers, photographers, screen printers, engravers and other creators who want to prepare files on their own computer.

**Free donationware · Local processing · English, French, German, Italian and Spanish**

[Official repository](https://github.com/orion4d/Orion4D_Halftone_Studio) · [GitHub releases](https://github.com/orion4d/Orion4D_Halftone_Studio/releases) · [Report an issue](https://github.com/orion4d/Orion4D_Halftone_Studio/issues)

## Contents

- [Installation and first launch](#installation-and-first-launch)
- [Preparing an image](#preparing-an-image)
- [Choosing a rendering engine](#choosing-a-rendering-engine)
- [Layers and print preparation](#layers-and-print-preparation)
- [Depth and normals](#depth-and-normals)
- [3D Workshop](#3d-workshop)
- [Files, assets and presets](#files-assets-and-presets)
- [Local MCP control](#local-mcp-control)
- [Troubleshooting](#troubleshooting)
- [Licence and privacy](#licence-and-privacy)

## Installation and first launch

1. Download the Windows x64 archive from a link provided by Orion4D and extract the entire archive to a folder where you have write access.
2. Run `Orion4D-Halftone-Studio-Portable-2.0.0.exe`. The executable includes the Electron runtime and runs without a separate installation of Python, Node.js or Electron.
3. Keep the `models/` folder next to the executable to use background removal and depth map generation offline.
4. In **General Settings**, choose the language, interface scale from 80% to 130%, export destination and filename suffix. Click **Save settings.json** to save these preferences.

To update an installation, extract the new package to a new folder, then copy across any presets, fonts, custom SVGs and settings you want to keep. Open saved projects from the **File** menu. If you use MCP, copy the configuration from the new installation.

## Preparing an image

1. Select **Single Image**, then **Open / Replace Image**. Supported formats include PNG, JPEG, WebP, SVG and compatible PSD files. For PSD files, the available import options depend on the file contents.
2. Use **Input size** to choose the working dimensions before processing. You can keep the original size, scale by a percentage or set the longest side to a fixed value from 1,024 to 8,192 px. Resizing preserves the aspect ratio and alpha channel. The document keeps the original source image. Resized inputs are capped at 8,192 px on the longest side.
3. Use **B&W Retouch** to adjust brightness, contrast, structure, black and white points, the tone curve and colour sensitivity. Use **Before / After** to compare the result with the source.
4. Choose a rendering engine from the top toolbar. Save the settings you want to reuse as a preset.
5. Choose the export format and **Size**. **Original** uses the dimensions of the working input. You can set fixed pixel dimensions or a physical print size independently. Enable **Unique name** to keep multiple versions of an export.

To process a series of images, open **Batch Processing**, choose the source and destination folders, load a compatible preset and check the preview before clicking **Process Folder**. Input and export sizes apply to batch jobs too. **Preserve batch subfolders** mirrors the source folder structure at the destination.

## Choosing a rendering engine

| Engine | Uses and controls |
| --- | --- |
| **Vector Dots** | Build a halftone with geometric shapes, custom SVGs or techniques such as hatching and stippling. Adjust the grid, angle, spacing, mark size and ink curve. Depending on the technique, outlines can be exported as SVG or vector PDF. |
| **Pixel Dots** | Produce raster artwork for screening, dithering or engraving. Try error diffusion, ordered matrices, stochastic patterns or generative halftones. Adjust the threshold, dot gain and dot spacing. |
| **ASCII** | Recreate the image with characters. Choose the character set or text, layout and colour. Supported vector exports include glyph outlines. |
| **Word cloud** | Fill an SVG silhouette or reconstruct a photograph with words. Paste text or import a TXT, CSV or JSON word list. Adjust weights, sizes, orientations, fonts and colours. For photographs, try the portrait and source colour settings. |
| **Advanced / Print** | Separate an image into tonal levels or inks and assign a pattern and curve to each separation. Print modes include two-colour, three-colour, CMYK and multi-ink separations. |
| **JS effects** | Write and test a JavaScript effect that modifies RGBA pixels. Load an example, try it on your image, then save the code and its description as a preset. |

### Patterns and engraving

**Pattern Lab** generates adjustable patterns that you can reuse as halftones. Use the pattern catalogue to browse and compare them. Store SVG patterns in `patterns/` and vector dot shapes in `svg_dots/`. Reload the library after adding files.

For separation films or laser engraving, test the threshold, polarity and detail size on a small area before exporting the full image. Supported export options include a 1-bit bitmap and an RGB image processed to strict black and white. The physical size, margins and equipment settings affect the printed or engraved result.

### Custom JavaScript effects

In **JS effects**, the script defines a synchronous function named `effect(pixels, width, height, params)`. Modify the RGBA array in place. **Test and apply** runs the effect locally in a WebAssembly engine with time and memory limits. **Live preview** lets you try changes as you edit the code.

An `@orion4d-params` JSON header can declare sliders, numeric fields, tick boxes, lists, colour pickers and text fields. The preset saves the code, description and selected values. **Send result to layers** maps tones to coverage for a single ink whose colour you can change. White areas become transparent in that layer.

## Layers and print preparation

- **Composition.** Send a result or its separations to **Layers**. Adjust ink colour, opacity, blending and position. Group, duplicate or isolate layers. Alt-click a visibility button to isolate the item. Alt-click again to show all items.
- **Global screen.** Choose a shared pattern, spacing and ink coverage. On regular screens, physical spacing and screen ruling are linked. Open an ink to adjust its pattern, angle, coverage or curve. A single command resets all curves.
- **Multi-ink and ICC.** Choose four to eight inks. The default six-ink configuration uses CMYK, orange and green. Use the ICC calculation control to prepare the mapping, or import a compatible profile to use an existing print characterisation. Check the ink coverage and plates in the preview.
- **Spot colours.** Choose an ink from the swatch library and retain its colour reference. Built-in libraries offer mixed, pastel, complementary and tertiary colours.
- **Print check.** Check minimum detail size, films, white underbase and registration. Compatible export workflows include mirror, negative and registration mark options.

| Format | Uses |
| --- | --- |
| **PNG** | Processed image, composition, individual ink film, mask, depth map, normal map or a still image from the 3D Workshop. |
| **SVG** | Supported vector shapes and artwork, including glyph outlines from compatible typography modes. |
| **PDF** | Composite print output or separations, depending on the mode. **Export vector PDF** preserves native paths where the technique supports them and can trace other results into outlines. |
| **PSD** | Compositions and print separations in supported workflows, with layers or channels depending on the settings. |

Available formats depend on the rendering engine and active panel. To print at a specific size, set the physical dimensions and resolution, then check the dimensions in the software you will use to open the file.

## Depth and normals

In **Screen relief**, generate a depth map from the source or import an existing map. The thumbnail shows the depth map. White represents areas closest to the viewer and black represents areas furthest away. Enable screen relief and adjust its strength, direction, smoothing and contrast. The model uses the GPU when available and falls back to the CPU.

The **Normal Map** section generates normals from depth or imports a normal map PNG. Blend the influence of the normals and depth when mapping the halftone onto the surface. You can invert the green channel for maps from a DirectX workflow. Use the dedicated controls to export depth or normals.

## 3D Workshop

Open **3D Workshop** with an image or a processed result. Choose a creation mode and display the mesh as textured, solid or wireframe. Free view lets you inspect the object outside the export frame. The lighting controls include key, fill and rim lights, as well as environment, shadow and screen-space ambient occlusion (SSAO) settings.

| Creation | Controls and outputs |
| --- | --- |
| **Materials and relief** | Simulate paper and ink. Map a halftone onto a sphere, cylinder, curved sheet or relief surface, with adjustable projection, repetition and orientation. |
| **Sculpted halftones and word volumes** | Extrude dots or glyphs. Adjust height, width and sampling. Supported modes let you set the paper thickness and use a rectangular base or one made from a closed SVG outline. |
| **Image to 3D mesh** | Generate a bas-relief from the original image, a processed result or a height map. Adjust width in millimetres, relief height above the base, base thickness, subdivisions and smoothing. |
| **Lithophane** | Convert brightness into thickness for a backlit image. Adjust the minimum and maximum thickness, curve and absorption. Use the stepped test piece to calibrate the thickness for your filament and light source. |
| **Two-image sculpture** | Reveal a different image depending on the viewing angle. Export the flat folding template as a PNG with cut and fold guides, on one sheet or across pages for assembly. Print at 100% to preserve the intended fold spacing. |
| **Layer slicing** | Slice a relief into successive layers and prepare templates for assembly. |
| **Directional engraving** | Create an engraved plate with grooves whose direction and depth follow the image. **Match source image** provides a starting point. A low-angle light helps you check the relief. |
| **3D anamorphosis** | Scatter dots or words in space so that they form an image from a reference camera. Save the reference view as part of a 3D preset. |

Depending on the creation mode, export the still scene as **PNG** or the mesh as **STL** or **OBJ**. STL stores the geometry. A textured OBJ can be packaged in an archive with its MTL and image files. Before printing, check the scale, orientation and base assembly in your slicer.

In **Animation**, choose an optical effect, camera motion or an effect that assembles and disperses the image. Use the timeline to add, remove and move keyframes. Framing and zoom can vary between keyframes. **GIF** and **MP4** export depend on the animation settings and the computer’s encoding capabilities.

## Files, assets and presets

| File or folder | Contents |
| --- | --- |
| `.orion4d` | Working document containing the source, processing settings, layers and any assets embedded in the project. Use **File → Save As** to make a portable copy. |
| `settings.json` | Preferences for the portable version, stored next to the executable. |
| `presets/` | JSON presets organised by engine. Reusable scripts are in `presets/javascript/`, 3D scenes in `presets/3d/` and black-and-white retouch settings in `presets/bw/`. |
| `patterns/` and `svg_dots/` | Pattern library and SVG dot shapes. |
| `fonts/` | Custom TTF or OTF fonts for word clouds. Subfolders are scanned too. Reload the font library after adding files. |
| `models/` | Local models for background removal and depth generation. Keep the folder structure and notices intact. |

Workshop profiles store reusable production settings. A recovery copy can restore a session. To archive a project, save an explicit `.orion4d` file and back up your presets and custom assets.

## Local MCP control

1. In **General Settings → Local MCP**, select **Enable MCP**.
2. Click **Copy MCP configuration** and add it to your client.
3. Keep the application and document open. The client starts a background transport instance with `--mcp-stdio`.

MCP can read document settings, switch engines, apply presets, generate previews, test and save JavaScript effects, export PNGs and undo changes. Use the application interface for the 3D Workshop and composition exports. After moving or updating the application, copy the configuration again to update the executable path. See [MCP.md](MCP.md) for tool names and examples.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Background removal or depth generation is unavailable. | Check that `models/` is next to the executable and that its subfolders are complete. |
| An SVG, font or preset is missing. | Check the folder for the version you are running and reload the relevant library. |
| Export is slow or animation export fails. | Try smaller working and output sizes, a shorter animation or a lower frame rate. GIF and MP4 place different demands on the encoder. |
| A printed template has changed scale. | Check the paper size and select **Actual size / 100%** in the print dialogue. |
| Windows will not replace an older executable. | Close Orion4D and quit any MCP clients using that executable. Update the clients’ configuration before restarting them. |

When reporting a problem, include the Orion4D and Windows versions, the rendering engine, input and output dimensions, and the steps to reproduce it. Attach a screenshot or sample file if you can share it. [GitHub issues](https://github.com/orion4d/Orion4D_Halftone_Studio/issues)

## Licence and privacy

Image processing and built-in effects run locally. You can process images without creating an account or uploading them to a processing service.

Orion4D Halftone Studio is free donationware. Donations are optional and all features are available to everyone. You may use files created with the software commercially, subject to the rights governing any assets you import. The [V2 licence](LICENSE.txt) governs use and redistribution of the software. Notices for Electron, Chromium, the models and other third-party components are included in the package.

Copyright © 2026 Philippe Joye / Orion4D.
