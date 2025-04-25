import type { Meta, StoryObj } from '@storybook/angular';
import { FooComponent } from './foo.component';

const meta: Meta<FooComponent> = {
  component: FooComponent,
  title: 'FooComponent',
};
export default meta;
type Story = StoryObj<FooComponent>;

export const Primary: Story = {
  args: {},
};
