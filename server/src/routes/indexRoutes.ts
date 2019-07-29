import { Router } from 'express';

import { indexControler } from '../controllers/indexController';

class indexRouter {

    public router:Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', indexControler.index);
    }
}

const indexRoutes = new indexRouter();
export default indexRoutes.router;