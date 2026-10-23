import https from "node:https";
import fs from "node:fs";

const links_path = "./src/assets/gifs/gifs.txt";
const links_file = fs.readFileSync(links_path, 'utf-8');
const links = links_file.split(/\r?\n/);
console.log(links)
console.log(links.length)

for (let i = 0; i < links.length; ++i) {
    const link = links[i];
    const ext_start = link.lastIndexOf(".");
    const ext = link.substring(ext_start)
    const file = fs.createWriteStream(`./src/assets/gifs/` + i + ext)
    https.get(link, (response) => {
        var done = false
        var string = response.pipe(file);
        file.on('finish', () => {
            file.close();
            done = true;
        })
        if (done) { return };
    })
}