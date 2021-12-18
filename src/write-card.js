import path from 'path';
import fs from 'fs';
import chalkTemplate from 'chalk-template';
import boxen from 'boxen';

const currDate = new Date().toLocaleDateString();

const text = chalkTemplate`
{italic Micael Levi L. C.}

{bold     Work:} {dim (please hire me)}
{bold   GitHub:} {green https://github.com/micalevisk}
{bold LinkedIn:} {yellow https://linkedin.com/in/micalevisk}
`.trim();

const card = boxen(text, {
  padding: 1,
  float: 'lefts',
  title: currDate,
  titleAlignment: 'right',
  borderColor: 'blueBright',
  borderStyle: 'doubleSingle',
});

const CARD_TEXT_FILE_PATH = path.join(new URL('..', import.meta.url).pathname, 'card_text');
fs.writeFileSync(CARD_TEXT_FILE_PATH, card);
console.debug(`Card saved at "${CARD_TEXT_FILE_PATH}"`);
