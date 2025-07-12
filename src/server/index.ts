import express from 'express';
import { router } from './routes';

const port = Number(process.env.PORT) || 3000;
const basename = '/hw/store';

const app = express();

app.use(express.json());
app.use(basename, express.static('dist', { index: false }));
app.use(basename, router);

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://0.0.0.0:${port}${basename}`);
});