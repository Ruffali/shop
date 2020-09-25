import React, { Component } from 'react';
import './App.scss';
import Store from './components/Store/Store';
import Show from './components/Show/Show';
import Nav from './components/Nav/Nav';

class App extends Component {
  state = {
    clothes: [
      {
        id: '001',
        name: 'Funky Prints T-shirt',
        img: 'https://www.freepngimg.com/thumb/polo%20shirt/30-polo-shirt-png-image.png',
        new: true,
        price: '65.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '002',
        name: 'Amazing T-Shirt',
        img: 'https://i.pinimg.com/originals/3e/e3/dc/3ee3dc6405026c801bf6b87840488b68.png',
        new: false,
        price: '105.99',
        total: '0',
        quantity: "0",
      },
      {
        id: '003',
        name: 'Graphix T-shirt',
        img: 'https://www.itailor.nl/images/product/shirt/it145-1.png',
        new: true,
        price: '77.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '004',
        name: 'Elite Cotton Prints',
        img: 'https://i.pinimg.com/originals/fb/e0/61/fbe061bf4e60ad0f1e067b2c213399aa.png',
        new: false,
        price: '224.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '005',
        name: 'Urban Hero T-shirt',
        img: 'https://static.owayo-cdn.com/newhp/img/designs/designRenderings/radtrikotspro/design_etape_variante_a_1.png',
        new: false,
        price: '29.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '006',
        name: 'T-Shirt Happy Prints',
        img: 'https://i.pinimg.com/originals/21/25/1e/21251edafc54ad0e03322b605cea76be.png',
        new: true,
        price: '88.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '007',
        name: 'Tee for Me',
        img: 'https://i.pinimg.com/originals/97/b0/c4/97b0c4aa26dd494379eb6e2498fd5539.png',
        new: false,
        price: '58.99',
        total: '0',
        quantity: "0",
      },
      {
        id: '008',
        name: 'Art Ink T-shirt',
        img: 'https://lh3.googleusercontent.com/proxy/-nHctSoaKeWrcyl3u80-RX7Bq0o7WuRAnbGC4d4pA0HrsOX9rtK2uUY_yafIMqQM5PPoIO_zlCV0w6BoEMdQpDI0d4UpkmiLJqRSFPCXIUCRaXeznQuEvTBFbyhPxZ0',
        new: true,
        price: '117.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '009',
        name: 'PersonaliTe',
        img: 'https://clipart.info/images/ccovers/1534042530adidas-cristiano-ronaldo-juventus-jersey-png.png',
        new: false,
        price: '1089.00',
        total: '0',
        quantity: "0",
      },
      {
        id: '010',
        name: 'T-Shirt Tee for Me',
        img: 'https://www.uokpl.rs/fpng/f/565-5659096_ncaa-football-arizona.png',
        new: false,
        price: '259.00',
        total: '0',
        quantity: "0",
      },
    ],
    remember: 0
  }

  onStoreHandler = (quantity, id) => {
    // const clothes = [...this.state.clothes]
    // let remember = this.state.remember;
    // let product = clothes.find(elem => elem.id === id);

    // product.quantity++;
    // let product_total = product.price * product.quantity;
    // product.total = product_total;

    // this.setState({
    //   remember: ++remember,
    //   clothes: clothes 
    // })
    console.log(quantity);
  }

  onRemoveHandler = (id) => {
    let clothes = [...this.state.clothes];
    let remember = this.state.remember;
    let product = clothes.find(elem => elem.id === id);

    product.quantity--;
    let product_total = product.total - product.price;
    product.total = product_total;

    this.setState({
      remember: --remember,
      clothes: clothes 
    })
  }

  render() {
    return (
      <div className="app">
        <Nav quantity={this.state.remember} />
        <div className="Stores">
          <Store 
          onCardHandler={() => { this.onStoreHandler(this.props.quantity, this.props.id) }} 
          clothes={this.state.clothes}/>
        </div>

        {this.state.clothes.map((item) => (
          <Show key={item.id}
            onRemoveHandler={() => { this.onRemoveHandler(item.id) }}
            result={item.total}
            price={item.price}
            image={item.img}
            name={item.name}
            quantity={item.quantity} />
        ))}
      </div>
    );
  }
}

export default App;
