import { handler } from './build/handler.js';
import express from 'express';

const app = express();

// statyczne pliki z build/client
app.use(express.static('build/client'));

app.use(handler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`SvelteKit is running on port ${port}`);
});
