import { readFileSync } from 'fs';

const CARD_TEXT_FILE_PATH = path.join(new URL('..', import.meta.url).pathname, 'card_text');

export const cardText = readFileSync(CARD_TEXT_FILE_PATH, 'utf-8');
