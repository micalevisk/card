import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const CARD_TEXT_FILE_PATH = join(__dirname, 'card_text');

export const cardText = readFileSync(CARD_TEXT_FILE_PATH, 'utf-8');
