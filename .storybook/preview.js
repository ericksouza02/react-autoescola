import GlobalStyle from '../src/styles/GlobalStyle';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (storyFn) => (
      <>
        <GlobalStyle/>
        {storyFn()}
      </>
    ),
  ],
};

export default preview;
