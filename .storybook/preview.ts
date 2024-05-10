import type { Preview } from "@storybook/react";

const preview: Preview = {
  // 모든 컴포넌트에도 공통적으로 적용하고 싶은 파라미터들
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
