import { join } from 'path';
import { readFileSync } from 'fs';

const CARD_TEXT_FILE_PATH = join(new URL('card_text', import.meta.url).pathname);

export const cardText = readFileSync(CARD_TEXT_FILE_PATH, 'utf-8');
