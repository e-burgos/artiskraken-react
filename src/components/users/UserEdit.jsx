import React, { Component } from 'react'

class UserEdit extends Component {
    constructor(props){
        super(props);
        this.state ={
            userData: [
                {
                    id: 1,
                    dni: 'N/D',
                    password: 'N/D',
                    admin: 'N/D',
                    status: 'N/D',
                    role: 'N/D',
                    bio: 'N/D',
                    facebook: 'N/D',
                    instagram: 'N/D',
                    twitter: 'N/D',
                    shopId: 0,
                    shops: [{
                        id: 1,
                        name: 'N/D',
                    }],
                    orders: [{
                        id: 1,
                        shopId: 1
                    }],
                    comments:[{
                        id:1,
                        productId:1,
                    }],
                    addresses:[{
                        id:1,
                    }],
                }
            ],
        }
    }

    getUser = async (id) => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`);
      const user = await response.json();
      return user.data;
    };

    updateUser= async (id, data) => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`,{
          method: "post",
          headers: {
              "Content-type": "application/json"
          },
          body: data,
      });
      return await response.json();
    };  

    async componentDidMount(){
        let id = this.props.match.params.id;
        const userData = await this.getUser(id);

        this.setState({
            userData,
        })
    }

    
    render() {
        return (
           <div className="card shadow mb-4">
                <div className="card-header py-4">
                    <h6 className="m-0 font-weight-bold text-uppercase text-primary">
                        Editar Usuario {this.state.userData.name}
                    </h6>
                </div>
                <div className="card-body">
                    <form action={`/${this.state.userData.id}/edit-data`} method="POST" encType="multipart/form-data" className="needs-validation" noValidate>
                        <div className="modal-body">
                            <div className="row p-3">
                               
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="name">Nombre:</label>
                                    <input type="text" name="name" className="form-control"  defaultValue={this.state.userData.name} placeholder='Nombre de la tienda..'required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="userName">Nombre de usuario:</label>
                                    <input type="text" name="userName" className="form-control"  defaultValue={this.state.userData.userName} placeholder='Nombre de la tienda..'required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group ">
                                    <label className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="images">Foto de perfil: </label>
                                    <small> Imagen actual: {this.state.userData.avatar}</small>
                                    <input type="file" id="avatar" name="avatar" className="form-control" data-show-preview="true" />
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="email">Email:</label>
                                    <input type="text" name="email" className="form-control" placeholder='Ingrese un email'defaultValue={this.state.userData.email} required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="bio">Sobre mí:</label>
                                    <input type="text" name="bio" id="bio" className="form-control"  placeholder='Bio..'defaultValue={this.state.userData.bio}  required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="phone">Teléfono:</label>
                                    <input type="text" name="phone" className="form-control" placeholder='Ej:2283546271'defaultValue={this.state.userData.phone} required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="twitter">Twitter:</label>
                                    <input type="text" name="twitter" className="form-control" placeholder='http://www.twitter.com/usuario' defaultValue={this.state.userData.twitter} required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="facebook">Facebook:</label>
                                    <input type="text" name="facebook" className="form-control" placeholder='http://www.facebook.com' defaultValue={this.state.userData.facebook} required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                                <div className="col-lg-6 col-md-6 form-group">
                                    <label  className="text-xs font-weight-bold text-primary text-uppercase" htmlFor="instagram">Instagram:</label>
                                    <input type="text" name="instagram" className="form-control" placeholder='http://www.instagram.com' defaultValue={this.state.userData.instagram} required/>
                                    <div className="valid-feedback">Ok válido!</div>
                                    <div className="invalid-feedback">Complete este campo</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-transparent d-flex justify-content-between align-items-center">
                            <div>
                                <a href="/comercios" className="btn btn-outline-primary mr-2">Volver</a>
                                <button className="btn btn-warning" type="submit">Editar Usuario</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserEdit;