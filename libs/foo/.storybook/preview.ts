import 'zone.js';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, Preview } from '@storybook/angular';

const preview: Preview = {
//   decorators: [
//     applicationConfig({
//       providers: [provideNoopAnimations()],
//     }),
//   ],
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
};

export default preview;
