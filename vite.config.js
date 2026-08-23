import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { pathToFileURL } from 'url'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      {
        name: 'spotify-dev-api',
        configureServer(server) {
          server.middlewares.use('/api/spotify', async (req, res) => {
            try {
              const moduleUrl = `${pathToFileURL(path.resolve(process.cwd(), 'api/spotify.js')).href}?t=${Date.now()}`;
              const { getSpotifyData } = await import(moduleUrl);
              const data = await getSpotifyData();
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ isPlaying: false, isOffline: true, error: err.message }));
            }
          });
        }
      }
    ],
    server: {
      host: true,
      allowedHosts: true,
    },
    assetsInclude: ['**/*.glb'],
  };
})
