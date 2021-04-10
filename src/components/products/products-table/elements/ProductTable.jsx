import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const ProductTable = (props) => {
    return (
        <Fragment>
            <tr>
                <td align="center" >
                    <img alt={props.name} src={`${process.env.REACT_APP_SERVER_URL}/images/products/${props.avatar}`} 
                        className='avatar img-circle img-thumbnail' height='50' width='50' />
                </td>
                <td align="center">{props.name}</td>
                <td align="center">{props.shop}</td>
                <td align="center">${props.price}</td>
                <td align="center">{props.category}</td>
                <td align="center">{props.type}</td>
                <td align="center">{props.stock}</td>
                <td align="center" width='150'>
                    <Link to={`/productos/detalles/${props.id}`} className="btn btn-outline-primary btn-sm rounded mr-1"><i className="fa fa-eye"></i></Link>
                    <Link to={`/productos/editar/${props.id}`} className="btn btn-outline-warning btn-sm rounded mr-1"><i className="fa fa-pencil"></i></Link>
                    <button type="submit" className="btn btn-outline-danger btn-sm rounded"><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        </Fragment>
    )
}

export default ProductTable;