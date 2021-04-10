import React, {Component} from "react";
import DataCardSmall from './elements/DataCardSmall'
import SkeletonSmall from '../../../../assets/images/skeleton-small.gif'

  class DataCardsSmallContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        smallCardData: [
          {
            id: 1,
            title: 'Cantidad de Productos',
            color: 'primary',
            value: 0,
            icon: 'fa-clipboard-list'
          },
          {
            id: 2,
            title: 'Cantidad de Comercios',
            color: 'success',
            value: 0,
            icon: 'fa-store'
          },
          {
            id: 3,
            title: 'Cantidad de Usuarios',
            color: 'warning',
            value: 0,
            icon: 'fa-users'
          },
        ],
      };
    };

    async productsCounter(){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/count`);
      const count = await response.json();
      return count.data;
    };

    async shopsCounter(){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/shops/count`);
      const count = await response.json();
      return count.data;
    };

    async usersCounter(){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/count`);
      const count = await response.json();
      return count.data;
    };

    async componentDidMount() {

      const productsCounter = await this.productsCounter();
      const usersCounter = await this.usersCounter();
      const shopsCounter = await this.shopsCounter();

      const smallCardData = [
          {
            id: 1,
            title: 'Cantidad de Productos',
            value: productsCounter,
            icon: 'fa-clipboard-list'
          },
          {
            id: 2,
            title: 'Cantidad de Comercios',
            color: 'success',
            value: shopsCounter,
            icon: 'fa-store'
          },
          {
            id: 3,
            title: 'Cantidad de Usuarios',
            color: 'warning',
            value: usersCounter,
            icon: 'fa-users'
          },
        ];

        this.setState({
          smallCardData,
          loading: false,
        });
      
    };

    render(){
      if(this.state.loading){
        return (
          <div className="d-flex justify-content-center">
            <img alt="loading" src={SkeletonSmall} width="30%" className="mr-5 mb-3"/>
            <img alt="loading" src={SkeletonSmall} width="30%"className="mr-5 mb-3"/>
            <img alt="loading" src={SkeletonSmall} width="30%" className="mb-3"/>
          </div>
        );
      }
      
      return (
        <div className="row">
          {
            this.state.smallCardData.map((element) => {
              return (
                <DataCardSmall
                  key={element.id} 
                  title={element.title}
                  color={element.color}
                  value={element.value}
                  icon={element.icon}
                />
              )
            })
          }
        </div>
      );
    }
}


export default DataCardsSmallContainer;
