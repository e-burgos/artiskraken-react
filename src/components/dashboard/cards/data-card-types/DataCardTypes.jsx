import React, { Component } from 'react';
import TypeInfo from './elements/TypeInfo';
import SkeletonCard from '../../../../assets/images/skeleton-card.gif'

class DataCardTypes extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            typesData: [
                {   
                    id: 1,
                    name: 'N/D',
                    description: 'N/D',
                    count: 0
                },
                {   
                    id: 2,
                    name: 'N/D',
                    description: 'N/D',
                    count: 0
                }
            ]
        }
    }

    async allTypes(){
        const response = await fetch(`${process.env.REACT_APP_API_URL}/types`);
        const types = await response.json();
        return types.data;
    };

    async componentDidMount(){
        const typesData = await this.allTypes()
        this.setState({
          typesData,
          loading: false
        });

    }

    render() {
        if(this.state.loading){
            return (
                <div className="d-flex justify-content-center flex-column">
                    <img alt="loading" src={SkeletonCard} width="100%" className="mb-3"/>
                </div>
            );
        }
        return (			
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-uppercase text-primary">Tipos de Cervezas</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            this.state.typesData.map((type) => {
                                return(
                                    <TypeInfo 
                                        key={type.id}
                                        name={type.name}
                                        description={type.description}
                                        count={type.count}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }  
}

export default DataCardTypes;