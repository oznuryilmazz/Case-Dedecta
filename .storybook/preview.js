import '../src/app.css';

/** @type { import('@storybook/svelte-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#1e1e2e' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    a11y: {
      test: "todo"
    },
    layout: 'centered',
  },
};

export default preview;
