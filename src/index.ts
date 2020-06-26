import app from './app';
import { startConecction} from  './database';

async function main(){
   startConecction()
   await app.listen(app.get('port'));
   console.log('Server on port', app.get('port'));
}
main();

