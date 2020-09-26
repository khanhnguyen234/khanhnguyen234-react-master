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
  flash_sale_unix_start: format(new Date('2017-01-01'), 'yyyy-MM-dd'),
  flash_sale_unix_end: format(new Date('2030-01-01'), 'yyyy-MM-dd'),
};
