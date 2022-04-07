import { resolve } from 'path';
import { readFileSync } from 'fs';

const CARD_TEXT_FILE_PATH = resolve('card_text');

export const cardText = readFileSync(CARD_TEXT_FILE_PATH, 'utf-8');
