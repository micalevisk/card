## development guide

```bash
npm install

npm run build

npm start

npm run format:fix

cp .env.example .env
export $(grep -v '^#' .env | xargs)
npm run release:check
```
