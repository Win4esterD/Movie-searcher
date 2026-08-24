import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Dropdown } from './Dropdown';
import { getMoviesReleaseDates } from '@/utils';

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const dataArray = [
  'Govno',
  'Zalupa',
  'Penis',
  'Her',
  'Davalka',
  'Hui',
  'Blyadina',
];

const dataArray2 = [
  { label: 'Popularity', value: 'popularity_desc', disabled: false },
  { label: 'Rating', value: 'rating_desc' },
  { label: 'Disabled', value: 'disabled', disabled: true },
];

export const Primary = {
  args: {
    searchParams: {},
    label: 'Dropdown',
    data: dataArray,
    filter: 'primary-filter',
  },
} satisfies Story;

export const WithSearchParams = {
  args: {
    ...Primary.args,
    searchParams: {
      page: '1',
      query: 'My great query',
      primary_release_year: '13.09.1991',
      popularity_desc: '',
    },
  },
} satisfies Story;

export const ReleaseYear = {
  args: {
    searchParams: {},
    label: 'Release year',
    placeholder: '"Select release year"',
    data: getMoviesReleaseDates(),
    filter: 'WithSearchParams-filter',
  },
} satisfies Story;

export const NoLabel = {
  args: {
    searchParams: {},
    placeholder: 'No label',
    data: getMoviesReleaseDates(),
    filter: 'WithSearchParams-filter',
  },
} satisfies Story;

export const NoPlaceholder = {
  args: {
    ...Primary.args,
    label: 'No label',
    searchParams: {
      page: '1',
      query: 'My great query',
      primary_release_year: '13.09.1991',
      popularity_desc: '',
    },
  },
} satisfies Story;

export const WithPlaceholder = {
  args: {
    searchParams: {
      page: '1',
      query: 'My great query',
      primary_release_year: '13.09.1991',
      popularity_desc: '',
    },
    data: dataArray,
    filter: 'WithSearchParams-filter',
    label: 'With placeholder',
  },
};

export const WithExtendedDataArray = {
  args: {
    searchParams: {},
    data: dataArray2,
    label: 'With extended array',
  },
};

export const WithEmptyArray = {
  args: {
    searchParams: {},
    data: [],
    label: 'With empty data array',
  },
};

export const DataArrayUndefined = {
  args: {
    searchParams: {},
    label: 'Data array undefined',
  },
};
