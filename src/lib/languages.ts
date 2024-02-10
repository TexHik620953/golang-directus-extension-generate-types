const languages: {
  [slug: string]: {
    name: string;
    icon: string;
    logo: string;
  };
} = {
  ts: {
    name: "TypeScript",
    icon: `<svg style="width: 1em; height: 1em" viewBox="0 0 128 128" fill="rgb(23, 41, 64)"><path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path></svg>`,
    logo: `<svg style="width: 2em; height: 2em" viewBox="0 0 128 128"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path></svg>`,
  },
  py: {
    name: "Python",
    icon: `<svg style="width: 1em; height: 1em" fill="rgb(23, 41, 64)" viewBox="0 0 128 128"><path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path></svg>`,
    logo: `<svg style="width: 2em; height: 2em" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path></svg>`,
  },
  oas: {
    name: "OpenAPI",
    icon: `<svg style="width: 1em; height: 1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="rgb(23, 41, 64)"><path d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z"/><path d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
    logo: `<svg style="width: 2em; height: 2em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path style="fill: #85ea2d" d="M50.2,97.3C24,97.3,2.7,76,2.7,49.8S24,2.4,50.2,2.4s47.5,21.3,47.5,47.5S76.3,97.3,50.2,97.3z" /><path style="fill: #173647" d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z" /><path style="fill: #173647" d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
  },
  gotypes: {
    name: "Go types",
    icon: `<svg style="width: 1em; height: 1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="rgb(23, 41, 64)"><path d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z"/><path d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
    logo: `<svg style="width: 2em; height: 2em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path style="fill: #85ea2d" d="M50.2,97.3C24,97.3,2.7,76,2.7,49.8S24,2.4,50.2,2.4s47.5,21.3,47.5,47.5S76.3,97.3,50.2,97.3z" /><path style="fill: #173647" d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z" /><path style="fill: #173647" d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
  },
  goapi: {
    name: "Go api",
    icon: `<svg style="width: 1em; height: 1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="rgb(23, 41, 64)"><path d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z"/><path d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
    logo: `<svg style="width: 2em; height: 2em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path style="fill: #85ea2d" d="M50.2,97.3C24,97.3,2.7,76,2.7,49.8S24,2.4,50.2,2.4s47.5,21.3,47.5,47.5S76.3,97.3,50.2,97.3z" /><path style="fill: #173647" d="M50.2,4.7c24.9,0,45.1,20.2,45.1,45.1c0,24.9-20.2,45.1-45.1,45.1c-24.9,0-45.1-20.2-45.1-45.1        C5.1,24.9,25.3,4.7,50.2,4.7 M50.2,0C22.7,0,0.3,22.4,0.3,49.8s22.4,49.8,49.8,49.8S100,77.3,100,49.8S77.6,0,50.2,0L50.2,0z" /><path style="fill: #173647" d="M31.7,33.7c-0.2,1.7,0.1,3.5-0.1,5.2c-0.1,1.7-0.3,3.4-0.7,5.1c-0.5,2.4-2,4.3-4.1,5.8   c4.1,2.6,4.5,6.7,4.8,10.9c0.1,2.2,0.1,4.5,0.3,6.7c0.2,1.7,0.8,2.2,2.6,2.2c0.7,0,1.5,0,2.3,0V75c-5.3,0.9-9.6-0.6-10.7-5.1   c-0.3-1.6-0.6-3.3-0.7-5c-0.1-1.8,0.1-3.6-0.1-5.3c-0.4-4.9-1-6.5-5.7-6.8v-6.1c0.3-0.1,0.7-0.1,1-0.2c2.6-0.1,3.7-0.9,4.2-3.5   c0.3-1.4,0.4-2.9,0.5-4.3c0.2-2.8,0.1-5.6,0.6-8.4c0.7-4,3.1-5.9,7.2-6.1c1.1-0.1,2.3,0,3.6,0v5.4c-0.6,0-1,0.1-1.5,0.1   C32.1,29.8,31.9,31,31.7,33.7z M38.1,46.3L38.1,46.3c-2-0.1-3.6,1.4-3.7,3.3c-0.1,1.9,1.4,3.6,3.3,3.7h0.2c1.9,0.1,3.5-1.3,3.6-3.2   v-0.2C41.6,48,40,46.4,38.1,46.3z M50.1,46.3c-1.9-0.1-3.4,1.4-3.5,3.2c0,0.1,0,0.2,0,0.3c0,2.1,1.4,3.4,3.6,3.4   c2.1,0,3.4-1.4,3.4-3.5C53.6,47.7,52.2,46.3,50.1,46.3z M62.4,46.3c-2,0-3.6,1.5-3.6,3.5c0,2,1.6,3.5,3.5,3.5h0   c1.8,0.3,3.5-1.4,3.7-3.4C66.1,48,64.4,46.3,62.4,46.3z M79.3,46.6c-2.2-0.1-3.3-0.8-3.9-3c-0.3-1.3-0.6-2.7-0.6-4.1   c-0.2-2.6-0.1-5.2-0.3-7.7c-0.4-6.1-4.8-8.2-11.2-7.2v5.3c1,0,1.8,0,2.6,0c1.4,0,2.4,0.5,2.5,2.1c0.1,1.4,0.1,2.8,0.3,4.2   c0.3,2.8,0.4,5.6,0.9,8.3c0.4,2.3,2,3.9,3.9,5.3c-3.4,2.3-4.4,5.5-4.6,9.2c-0.1,2.5-0.2,5-0.3,7.6c-0.1,2.3-0.9,3-3.2,3.1   c-0.7,0-1.3,0.1-2,0.1v5.4c1.4,0,2.6,0.1,3.9,0c3.9-0.2,6.2-2.1,7-5.9c0.3-2.1,0.5-4.2,0.6-6.2c0.1-1.9,0.1-3.9,0.3-5.7   c0.3-3,1.6-4.2,4.6-4.4c0.3,0,0.6-0.1,0.8-0.2v-6.1C80,46.7,79.7,46.6,79.3,46.6z" /></svg>`,
  },
};

export default languages;
