import * as React from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import _isEmpty from 'lodash-es/isEmpty';
import { Grid, Image } from '@khanhnguyen234/react-components';
import { useForm } from 'react-hook-form';
import { DEFAULT_PRODUCT, FORM_PROPS } from '../../const';
import * as styles from './styles.scss';
import ReactPlayer from 'react-player';

const AdminProductCreate = ({ product, handleSubmitForm }) => {
  const { register, handleSubmit, errors, getValues } = useForm({
    defaultValues: DEFAULT_PRODUCT,
  });

  const registerFactory = React.useCallback(
    (name, validate?) => {
      const form = _isEmpty(product) ? DEFAULT_PRODUCT : product;
      const field = FORM_PROPS[name];
      const value = form[FORM_PROPS[name]];
      const error = errors[field];

      let props = {
        label: field,
        name: field,
        value: value,
        inputRef: register,
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
      } as any;

      if (validate) {
        props = {
          ...props,
          inputRef: register(validate),
          error: !!errors[field],
          helperText: error?.type,
        };
      }

      return props;
    },
    [register, errors, product],
  );

  const onSubmit = (data) => {
    handleSubmitForm(data);
  };

  return (
    <form noValidate autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
        <Grid item md={6} container spacing={2}>
          <Grid item xs={4}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              labelPlacement="start"
              {...registerFactory(FORM_PROPS.flash_sale)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="date"
              {...registerFactory(FORM_PROPS.flash_sale_unix_start)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="date"
              {...registerFactory(FORM_PROPS.flash_sale_unix_end)}
            />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            {...registerFactory(FORM_PROPS.name, {
              required: true,
              maxLength: 80,
            })}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            {...registerFactory(FORM_PROPS.description, {
              required: true,
              maxLength: 1000,
            })}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            {...registerFactory(FORM_PROPS.price, {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField type="text" {...registerFactory(FORM_PROPS.image_url)} />
        </Grid>
        <Grid item xs={6}>
          <TextField type="text" {...registerFactory(FORM_PROPS.video_url)} />
        </Grid>
        <Grid item container className={styles.mediaBlock} spacing={4}>
          <Grid item xs={6}>
            <Image src={product && product[FORM_PROPS.image_url]} />
          </Grid>
          <Grid item xs={6}>
            <ReactPlayer
              url={product && product[FORM_PROPS.video_url]}
              controls
              loop
              playing={true}
              width="100%"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default React.memo(AdminProductCreate);
