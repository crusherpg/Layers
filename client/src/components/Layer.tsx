import React, { useEffect, useState } from 'react';
import type { Layer } from '../types/Layer';
import { getLayers, toggleLayerVisibility } from '../api/layerApi';
import {
    Checkbox,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Button,
    Typography,
    Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
/**
* Renders a panel for managing the visibility of layers.
* @example
* LayerPanel()
* // Returns a React component displaying a list of layers with options to toggle their visibility.
* @param {void} - No arguments required.
* @returns {JSX.Element} A JSX element containing the layer visibility panel with toggle controls.
* @description
*   - Uses the `useState` hook to manage state for layers.
*   - Fetches layer data with `getLayers` on component mount using `useEffect`.
*   - Toggles layer visibility state using `toggleLayerVisibility`.
*   - UI includes checkboxes and icons indicating visibility status for each layer.
*/
export const LayerPanel: React.FC = () => {
    const [layers, setLayers] = useState<Layer[]>([]);

    useEffect(() => {
        getLayers().then(setLayers);
    }, []);

    const handleToggle = async (id: string) => {
        const updated = await toggleLayerVisibility(id);
        setLayers(prev => prev.map(layer => (layer.id === id ? updated : layer)));
    };

    const handleSetAll = (visible: boolean) => {
        setLayers(prev =>
            prev.map(layer => ({
                ...layer,
                visible,
                lastModified: new Date().toISOString(),
            }))
        );
    };

    return (
        <Box sx={{ maxWidth: 400, padding: 4 }}>
            <Typography variant="h5" gutterBottom>
                Layer Visibility
            </Typography>

            <Box display="flex" gap={2} mb={2}>
                <Button variant="contained" onClick={() => handleSetAll(true)}>
                    Show All
                </Button>
                <Button variant="outlined" onClick={() => handleSetAll(false)}>
                    Hide All
                </Button>
            </Box>

            <List>
                {layers.map(layer => (
                    <ListItem
                        key={layer.id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                onClick={() => handleToggle(layer.id)}
                                aria-label={layer.visible ? 'Hide layer' : 'Show layer'}
                            >
                                {layer.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        }
                    >
                        <Checkbox
                            checked={layer.visible}
                            onChange={() => handleToggle(layer.id)}
                            inputProps={{ 'aria-label': `Toggle ${layer.name}` }}
                        />
                        <ListItemText primary={layer.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
