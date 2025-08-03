import express from 'express';
import cors from 'cors';
import layersRouter from './routes/layer';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/layers', layersRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
