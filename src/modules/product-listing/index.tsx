import * as React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product-card';
import * as styles from './styles.scss';

const ProductListing = () => {
  const products = [
    {
      id: "1",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name:
        'Chuột không dây game thủ Divipard Q3 Led All New Version',
      price: 20000,
    },
    {
      id: "2",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name:
        '[GIÁ SỐC] CHĂN HÈ TRẦN BÔNG 1m6x2m COTTON CAO CẤP - MỀN TRẦN BÔNG COTTON - MỀM MỊN',
      price: 20000,
    },
    {
      id: "3",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "4",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "5",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "6",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "100000000",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "7",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "8",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
    {
      id: "9",
      image:
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/119144692_4318524144886701_6213507037967993982_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=qS7mmXOm5kQAX89annT&_nc_ht=scontent.fsgn2-4.fna&oh=39311f960dace10d9f4983c5286b76e2&oe=5F82BE08',
      name: 'product 1',
      price: 20000,
    },
  ];

  const handleClickCard = (name) => {
    // TODO: pushState not work switch component
    // window.history.pushState(null, null, `/detail`);
  };
  return (
    <React.Fragment>
      <div className={styles.productListing}>
        {products.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleClickCard(item.name)}
          >
            <Link to="/detail">
              <ProductCard
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default React.memo(ProductListing);
