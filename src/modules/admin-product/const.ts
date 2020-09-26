import { DEFAULT_IMAGE_URL } from '../../lib/const';
import { format } from 'date-fns';

export const FORM_PROPS = {
  name: 'name',
  description: 'description',
  price: 'price',
  image_url: 'image_url',
  video_url: 'video_url',
  flash_sale: 'flash_sale',
  flash_sale_unix_start: 'flash_sale_unix_start',
  flash_sale_unix_end: 'flash_sale_unix_end',
};

export const DEFAULT_PRODUCT = {
  image_url: DEFAULT_IMAGE_URL,
  flash_sale_unix_start: '2020-05-24T10:30',
  flash_sale_unix_end: '2020-12-24T10:30',
};
