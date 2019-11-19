import { Request, Response } from 'express';
const indexhandler = (req: Request, res: Response) => {
    res.render('index', {
        title: 'index',
    })
}

export default indexhandler;