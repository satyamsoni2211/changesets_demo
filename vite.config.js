import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {

        emptyOutDir: true,
        outDir: 'dist',
        lib: {
            entry: 'index.js',
            formats: ['cjs', 'es'],
            fileName: (format, name) => {
                const map = new Map();
                map.set('cjs', `${name}.cjs`);
                map.set('es', `${name}.mjs`);
                return map.get(format);
            },
        },
        sourcemap: true,

    }
})