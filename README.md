# Layer Visibility App (MERN Stack)

This is a full-stack application that provides a CAD-style layer visibility panel. Users can view a list of drawing layers, toggle their visibility individually, or use bulk controls to show or hide all layers at once. 

## Technologies Used

### Frontend
- React with TypeScript
- Material UI (MUI)
- Axios for HTTP requests
- Vite for fast build and development

### Backend
- Node.js with Express
- TypeScript
- REST API design

## Project Structure
```
├── client/ # React frontend
│ └── src/
│ ├── components/ # React components (e.g., LayerPanel)
│ ├── api/ # Axios API wrappers
│ ├── types/ # Shared TypeScript interfaces
│ └── App.tsx, main.tsx
└── server/ # Express backend
└── src/
├── data/ # In-memory layer store
├── routes/ # API endpoints
└── server.ts # Entry point
```

## How to run
### Backend
- cd server
- npm install
- npm run dev
### Frontend
- cd client
- npm install
- npm run dev
- The application will be available at: http://localhost:5173

### API Endpoints
- GET /layers
    Returns a list of all available layers.
- PUT /layers/:id/toggleVisibility
    Toggles the visibility of a single layer.
- PUT /layers/:id/setVisibility
    Explicitly sets the visibility of a layer (used for bulk operations like "Show All").