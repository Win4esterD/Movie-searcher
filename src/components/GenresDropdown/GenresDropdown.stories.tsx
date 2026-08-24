import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { GenresDropdown } from './GenresDropdown';

const meta = {
  component: GenresDropdown,
} satisfies Meta<typeof GenresDropdown>;

export default meta;

const data = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Since Fiction' },
  { id: 3, name: 'Fantasy' },
  { id: 4, name: 'Documental' },
  { id: 5, name: 'Govno' },
  { id: 6, name: 'Sci-Fi' },
  { id: 7, name: 'Rom-Com' },
  { id: 8, name: 'U.S.A.' },
] satisfies {
  name: string;
  id: number;
}[];

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    placeholder: 'Genres dropdown',
    data: data,
    searchParams: {},
  },
} satisfies Story;

export const WithoutPlaceholder = {
  args: {
    ...Primary.args,
    placeholder: undefined,
  },
} satisfies Story;

export const NoData = {
  args: {
    ...Primary.args,
    data: undefined,
  },
};

export const SelectedGenre = {
  args: {
    ...Primary.args,
    searchParams: {
      with_genres: '4',
    },
  },
} satisfies Story;
