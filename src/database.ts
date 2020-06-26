import {connect} from 'mongoose';

export async function startConecction(){
 await  connect('mongodb://localhost/photo-gallery-db',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Conectado a db');
}