import { resolve } from 'path';
import fs from 'fs';
import chalkTemplate from 'chalk-template';
import boxen from 'boxen';

const currDate = new Date().toLocaleDateString();

const text = chalkTemplate`
{italic Micael Levi L. C.}

{bold     Work:} {dim (please hire me)}
{bold   GitHub:} {green https://github.com/micalevisk}
{bold LinkedIn:} {yellow https://linkedin.com/in/micalevisk}
{bold Telegram:} {blue https://t.me/micalevisk}
{bold Trace me:} {red https://codetrace.com/users/micalevisk}

                              {italic.dim "Memento mori."}
`.trim();

const card = boxen(text, {
  padding: 1,
  float: 'lefts',
  title: currDate,
  titleAlignment: 'right',
  borderColor: 'blueBright',
  borderStyle: 'doubleSingle',
});

const CARD_TEXT_FILE_PATH = resolve('card_text');
fs.writeFileSync(CARD_TEXT_FILE_PATH, card);
console.debug(`Card saved at "${CARD_TEXT_FILE_PATH}"`);
