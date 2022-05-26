/*
- Run from the repo root
- Set fontSize to 14 (normal is 12.5)
- Zoom in twice (Ctrl+Num_Plus)
- Generate screenshots with `Win+Alt+PrtScr`
*/

const jimp = require("jimp");
const chokidar = require("chokidar");
const { homedir } = require("os");
const path = require("path");
const fs = require("fs");

// Save location of screenshot shortcut.
const capturePath = path.join(homedir(), "Videos", "Captures");
const outputPath = path.join(homedir(), "Videos");

console.log("Looking for new screenshots");

let count = 0;
let paths = [];

chokidar
	.watch(capturePath, {
		ignoreInitial: true,
	})
	.on("add", (filePath) => {
		if (path.extname(filePath) != ".png") {
			return;
		}

		paths.push(filePath);

		// If we have 2 new files now, so we can crop them, combine them into a new image, and delete them.
		if (paths.length == 2) {
			let composite = new jimp(1920, 1080, "#ff00ff");
			composite.quality(100);
			composite.rgba(true);

			// First image.
			jimp.read(paths[0])
				.then((img) => {
					img.crop(0, 0, 1920 / 2, 1080);
					composite.blit(img, 0, 0);

					// Second image.
					jimp.read(paths[1])
						.then((img) => {
							img.crop(1920 / 2, 0, 1920 / 2, 1080);
							composite.blit(img, 1920 / 2, 0);

							composite.write(
								path.join(outputPath, "new_" + String(count).padStart(3, "0") + ".png")
							);

							fs.rmSync(paths[0]);
							fs.rmSync(paths[1]);

							paths = [];
							count += 1;

							console.log("Generated new image");
						})
						.catch((err) => {
							console.error(err);
						});
				})
				.catch((err) => {
					console.error(err);
				});
		}
	});
