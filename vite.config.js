import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
	],
	server: {
		host: '0.0.0.0', // Umożliwi dostęp z innych urządzeń
		port: 5173      // (opcjonalnie) port do użycia
	}

});
