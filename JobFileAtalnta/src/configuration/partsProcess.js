const PartsProcessOptions = [
  {
    part: 'A3011-Left SUPPORT BLOCK XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 12.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 94.5) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 84.5) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 12.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 94.5) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide + 84.5) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 199.0) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 222.0) / 3
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 231.0) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER OX-O 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 309.0) / 2
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 387.0) / 3
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OX-O 2S LS HYB',
    lengthFormula: (wide, height) => {
      return wide - 229.5
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return (wide - 558.0) / 4
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 103.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 103.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OX-O',
    lengthFormula: (wide, height) => {
      return height - 103.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 103.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A279 FIXED SNAP-ON XO-OX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 83.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON XOX 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 83.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON OX-O 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 83.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON OXXO 2S LS HYB',
    lengthFormula: (wide, height) => {
      return height - 83.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 9.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 88.0) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 82.0) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 9.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 88.0) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide + 82.0) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 196.0) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 221.0) / 3
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 226.7) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER OX-O 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 JAMB GROOVE COVER OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 312.0) / 2
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 394.5) / 3
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OX-O 2S HYB',
    lengthFormula: (wide, height) => {
      return wide - 229.5
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return (wide - 560.5) / 4
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OX-O 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A279 FIXED SNAP-ON XO-OX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON XOX 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON OX-O 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A279 FIXED SNAP-ON OXXO 2S HYB',
    lengthFormula: (wide, height) => {
      return height - 80.5
    },
    process: [{ name: 'A279', process: 'A279' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XO-OX 2S LS PVCB',
    lengthFormula: (wide, height) => {
      return (wide + 12.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XOX 2S LS PVC',
    lengthFormula: (wide, height) => {
      return (wide + 94.5) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK OXXO 2S LS PVC',
    lengthFormula: (wide, height) => {
      return (wide + 84.5) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XO-OX 2S LS PVC',
    lengthFormula: (wide, height) => {
      return (wide + 12.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XOX 2S LS PVC',
    lengthFormula: (wide, height) => {
      return (wide + 94.5) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK OXXO 2S LS PVC',
    lengthFormula: (wide, height) => {
      return (wide + 84.0) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XO-OX 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 9.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK XOX 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 88.0) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Left SUPPORT BLOCK OXXO 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 82.0) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XO-OX 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 9.5) / 2
    },
    process: [{ name: 'A3011', process: 'A3011-Right' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK XOX 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 88.0) / 3
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3011-Right SUPPORT BLOCK OXXO 2S PVC',
    lengthFormula: (wide, height) => {
      return (wide + 82.0) / 4
    },
    process: [{ name: 'A3011', process: 'A3011-Left' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XO-OX HYB',
    lengthFormula: (wide, height) => {
      return (wide - 114.5) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XOX HYB',
    lengthFormula: (wide, height) => {
      return (wide - 185.0) / 3
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER OXXO HYB',
    lengthFormula: (wide, height) => {
      return (wide - 57.0) / 2
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XO-OX  WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER XOX WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A3005 HEAD GROOVE COVER OXXO WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A3005', process: 'A3005' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XO-OX HYB',
    lengthFormula: (wide, height) => {
      return (wide - 238.5) / 2
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XOX HYB',
    lengthFormula: (wide, height) => {
      return (wide - 385.0) / 3
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OXXO HYB',
    lengthFormula: (wide, height) => {
      return (wide - 414.0) / 4
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XO-OX  WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD XOX WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A268 HORIZONTAL SASH CLAD OXXO WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - height
    },
    process: [{ name: 'A268', process: 'A268' }],
  },
  {
    part: 'A269 HORIZONTAL SASH CLAD XO-OX HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XOX HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OXXO HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XO-OX  WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD XOX WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
  {
    part: 'A269 VERTICAL SASH CLAD OXXO WITH MP HYB',
    lengthFormula: (wide, height) => {
      return wide - 100.5
    },
    process: [{ name: 'A269', process: 'A269' }],
  },
]

export default PartsProcessOptions
