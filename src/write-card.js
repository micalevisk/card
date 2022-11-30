import { join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import chalkTemplate from 'chalk-template';
import boxen from 'boxen';
import { generateQrCode } from './generate-qrcode.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const currDate = new Date().toLocaleDateString();

const text = chalkTemplate`
{italic Micael Levi L. C.}

{bold     Work:} {yellow Mid-level Software Developer at Tarken}
{bold   GitHub:} {green https://github.com/micalevisk}
{bold LinkedIn:} {dim https://linkedin.com/in/micalevisk}
{bold Telegram:} {blue https://t.me/micalevisk}
{bold Trace me:} {red https://codetrace.com/users/micalevisk}

                              {italic.dim "Memento mori."}
${await generateQrCode('https://github.com/micalevisk')}
`.trim();

const card = boxen(text, {
  padding: 1,
  float: 'lefts',
  title: currDate,
  titleAlignment: 'right',
  borderColor: 'blueBright',
  borderStyle: 'doubleSingle',
});

const CARD_TEXT_FILE_PATH = join(__dirname, '..', 'card_text');
fs.writeFileSync(CARD_TEXT_FILE_PATH, card);
console.debug(`Card saved at "${CARD_TEXT_FILE_PATH}"`);
