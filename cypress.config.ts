import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: '**/*.test.ts',
        video: false,
        viewportWidth: 1200,
    },
})
