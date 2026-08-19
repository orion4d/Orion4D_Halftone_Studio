# Orion4D Halftone Studio

<img width="2537" height="1392" alt="image" src="https://github.com/user-attachments/assets/729ad158-6a7f-48ab-9ed7-d40e077893a5" />

**Orion4D Halftone Studio** is a portable Windows application for advanced black-and-white conversion, vector halftone patterns and pixel-based dithering.

It is designed for photographers, illustrators, printmakers and graphic artists who want to create monochrome and halftone artwork locally, without uploading their images to an online service.

> Free donationware · Local processing · No installation · No Python required

## Download

[Download Orion4D Halftone Studio V1.1 for Windows](https://github.com/orion4d/Orion4D_Halftone_Studio/releases/download/V1.1/Orion4D_Halftone_Studio_V1-1_Multilingual_Windows.zip)

Portable Windows x64 application · No installation · No Python required

## Main features

### Black-and-white retouching

- Direct B&W preview and PNG export
- Global, highlight, midtone and shadow brightness controls
- Contrast, amplified whites and blacks, and soft contrast
- Global and tonal structure controls
- Fine structure and Gaussian blur
- Shadow and highlight tonality protection
- Six-channel color sensitivity: red, yellow, green, cyan, blue and magenta
- Black point, white point, midtone gamma and S-curve
- Independent B&W presets stored in `presets/bw/`

### Vector Dots

- Halftone, Threshold and Hybrid (Threshold + Halftone) render modes
- Square, hexagonal, radial, line, circle and stippled grids
- Adjustable spacing, angle, dot size and shape
- Contour smoothing and simplification in Threshold mode
- Custom SVG dot shapes loaded from `svg_dots/`
- PNG and SVG export where supported

### Pixel Dots

- Error-diffusion algorithms including Floyd–Steinberg, Atkinson, Jarvis–Judice–Ninke, Stucki and Sierra
- Ordered Bayer matrices, stochastic patterns and print screens
- Adjustable pixel spacing, diffusion, threshold and dot gain
- Normal, Multiply, Screen, Overlay, Soft Light, Hard Light and Difference blending modes
- Independent source-image and halftone opacity
- PNG export recalculated at the selected output resolution

### Workflow

- Separate **Single Image** and **Batch Processing** modes
- Open, replace or clear the current image
- Select and refresh a complete batch source folder
- Choose a batch destination folder
- Optional preservation of source subfolders
- Original, fixed-pixel and print-size export options
- Automatic **Save As** dialog when a single-image filename already exists
- Portable settings and presets stored next to the executable

## Languages

The interface is available in:

- English — default
- French
- German
- Italian
- Spanish

The selected language is remembered in `settings.json`.

## Installation and first launch

1. Download `Orion4D_Halftone_Studio_V1_Multilingual_Windows.zip`.
2. Extract the complete archive to a writable folder.
3. Do not run the application directly from inside the ZIP archive.
4. Launch `Orion4D-Halftone-Studio-Portable-1.0.0.exe`.

The application is portable and does not require an installer. End users do not need Python, Node.js or Electron installed.

Keep the executable together with the accompanying folders and files:

```text
Orion4D-Halftone-Studio-Portable-1.0.0.exe
settings.json
presets/
  bw/
  pixel/
  vector/
svg_dots/
LICENSE.txt
LICENSE.electron.txt
LICENSES.chromium.html
```

Windows SmartScreen may display a warning for an unsigned application. Only run software downloaded from a source you trust.

## Basic use

### Single image

1. Select **Single Image**.
2. Click **Open / Replace Image**.
3. Use **B&W Retouch** to prepare the monochrome conversion.
4. Switch to **Halftone** and choose **Vector Dots** or **Pixel Dots** if required.
5. Choose the output format and size, then click **Export**.

When the **B&W Retouch** tab is selected, Export saves the displayed black-and-white conversion directly as a PNG rather than exporting the halftone result.

### Batch processing

1. Select **Batch Processing**.
2. Choose the **Source** folder containing the images.
3. Choose the **Destination** folder.
4. Configure B&W and halftone settings or load a preset.
5. Click **Process Folder**.

Use **Refresh Source** to rescan the source folder after adding or removing images.

## Presets and custom SVG dots

- B&W presets: `presets/bw/`
- Pixel Dots presets: `presets/pixel/`
- Vector Dots presets: `presets/vector/`
- Custom vector shapes: `svg_dots/`

Preset files use JSON format. Copy new preset files into the appropriate folder and restart the application. Custom dot shapes must be valid SVG files.

## Privacy

Image processing is performed locally on your computer. Orion4D Halftone Studio does not require an account and does not upload source images for processing.

## Donationware

Orion4D Halftone Studio is available free of charge as donationware. If the application is useful to you, you can support its continued development with an optional PayPal donation:

[Donate with PayPal](https://www.paypal.com/donate/?hosted_button_id=UVPFYNASMSW8A)

Donations are voluntary and do not unlock features.

## Licence

Copyright (c) 2026 Philippe Joye / Orion4D. All rights reserved.

The software may be downloaded, installed and used without a time limit. Images and other files created with the application remain the user's property and may be used commercially without royalties or attribution to the software author.

The software itself may not be sold, sublicensed, rented, repackaged or redistributed without prior written permission. See `LICENSE.txt` inside the distribution package for the complete terms.

Electron and Chromium notices are included separately in the Windows package.

## Feedback

Bug reports and feature suggestions are welcome through the repository's [Issues](../../issues) page. When reporting a problem, please include the Windows version, the application version, the selected rendering engine and the steps needed to reproduce the issue.

---

**Orion4D Halftone Studio V1**  
Copyright (c) 2026 Philippe Joye / Orion4D
