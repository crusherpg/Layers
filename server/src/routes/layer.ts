import express from 'express';
import { layers } from '../data/layers';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(layers);
});

router.put('/:id/toggleVisibility', (req, res) => {
    const layer = layers.find(l => l.id === req.params.id);
    if (!layer) return res.status(404).json({ error: 'Layer not found' });

    layer.visible = !layer.visible;
    layer.lastModified = new Date();
    res.json(layer);
});

router.put('/:id/setVisibility', (req, res) => {
    const { id } = req.params;
    const { visible } = req.body;

    const layer = layers.find(l => l.id === id);
    if (!layer) return res.status(404).json({ error: 'Layer not found' });

    layer.visible = visible;
    layer.lastModified = new Date();
    res.json(layer);
});

export default router;
