import * as React from 'react';
// import {
//   Button,
//   TextField,
//   FormControlLabel,
//   Checkbox,
// } from '@material-ui/core';
import _isEmpty from 'lodash-es/isEmpty';
import { Grid, Image } from '@khanhnguyen234/react-components';
import { DEFAULT_PRODUCT, FORM_PROPS } from '../../const';
import * as styles from './styles.scss';
import ReactPlayer from 'react-player';
import { unixToDatetimeLocal } from '../../../../utils/date';

function getProps(form, name) {
  const field = FORM_PROPS[name];
  const value = form[FORM_PROPS[name]];

  const props = {
    label: field,
    name: field,
    value: value,
    variant: 'outlined',
    size: 'small',
    fullWidth: true,
    InputLabelProps: { shrink: true },
  } as any;

  return props;
}

const AdminProductCreate = ({ product, errMes, handleSubmitForm }) => {
  const [form, setForm] = React.useState(
    _isEmpty(product) ? DEFAULT_PRODUCT : product,
  );

  React.useEffect(() => {
    if (product && !_isEmpty(product)) {
      setForm({
        ...product,
        [FORM_PROPS.flash_sale_unix_start]: unixToDatetimeLocal(
          product[FORM_PROPS.flash_sale_unix_start],
        ),
        [FORM_PROPS.flash_sale_unix_end]: unixToDatetimeLocal(
          product[FORM_PROPS.flash_sale_unix_end],
        ),
      });
    } else {
      setForm(DEFAULT_PRODUCT);
    }
  }, [product]);

  const handleChange = (name, event) => {
    setForm({
      ...form,
      [name]: event.target.value,
    });
  };

  const handleChangeFlashSale = (event) => {
    setForm({
      ...form,
      [FORM_PROPS.flash_sale]: event.target.checked,
    });
  };

  return (
    <Grid container spacing={2}>
      {!!errMes && <Grid item>{errMes}</Grid>}
      <Grid item xs={6}>
        {/*<Button*/}
        {/*  fullWidth*/}
        {/*  variant="contained"*/}
        {/*  color="primary"*/}
        {/*  size="large"*/}
        {/*  type="submit"*/}
        {/*  onClick={() => handleSubmitForm(form)}*/}
        {/*>*/}
        {/*  CREATE*/}
        {/*</Button>*/}
      </Grid>
      <Grid item md={6} container spacing={2}>
        <Grid item xs={4}>
          {/*<FormControlLabel*/}
          {/*  control={*/}
          {/*    <Checkbox*/}
          {/*      checked={!!form[FORM_PROPS.flash_sale]}*/}
          {/*      color="primary"*/}
          {/*      onChange={handleChangeFlashSale}*/}
          {/*    />*/}
          {/*  }*/}
          {/*  labelPlacement="start"*/}
          {/*  label={FORM_PROPS.flash_sale}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={4}>
          {/*<TextField*/}
          {/*  type="datetime-local"*/}
          {/*  {...getProps(form, FORM_PROPS.flash_sale_unix_start)}*/}
          {/*  onChange={(e) => handleChange(FORM_PROPS.flash_sale_unix_start, e)}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={4}>
          {/*<TextField*/}
          {/*  type="datetime-local"*/}
          {/*  {...getProps(form, FORM_PROPS.flash_sale_unix_end)}*/}
          {/*  onChange={(e) => handleChange(FORM_PROPS.flash_sale_unix_start, e)}*/}
          {/*/>*/}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        {/*<TextField*/}
        {/*  type="text"*/}
        {/*  {...getProps(form, FORM_PROPS.name)}*/}
        {/*  onChange={(e) => handleChange(FORM_PROPS.name, e)}*/}
        {/*/>*/}
      </Grid>
      <Grid item xs={4}>
        {/*<TextField*/}
        {/*  type="text"*/}
        {/*  {...getProps(form, FORM_PROPS.description)}*/}
        {/*  onChange={(e) => handleChange(FORM_PROPS.description, e)}*/}
        {/*/>*/}
      </Grid>
      <Grid item xs={4}>
        {/*<TextField*/}
        {/*  type="number"*/}
        {/*  {...getProps(form, FORM_PROPS.price)}*/}
        {/*  onChange={(e) => handleChange(FORM_PROPS.price, e)}*/}
        {/*/>*/}
      </Grid>
      <Grid item xs={6}>
        {/*<TextField*/}
        {/*  type="text"*/}
        {/*  {...getProps(form, FORM_PROPS.image_url)}*/}
        {/*  onChange={(e) => handleChange(FORM_PROPS.image_url, e)}*/}
        {/*/>*/}
      </Grid>
      <Grid item xs={6}>
        {/*<TextField*/}
        {/*  type="text"*/}
        {/*  {...getProps(form, FORM_PROPS.video_url)}*/}
        {/*  onChange={(e) => handleChange(FORM_PROPS.video_url, e)}*/}
        {/*/>*/}
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
            muted
            width="100%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(AdminProductCreate);
