import { Request, Response } from 'express';
import { BaseController } from './base.controller';
import { bandModel } from '../models';

export class BandController extends BaseController {
    public async findAll(
        request: Request, 
        response: Response
    ): Promise<void> {
        try {
            const items = await bandModel.find();
        
            response.status(200).send(items);
        } catch (e) {
            response.status(404).send(e.message);
        }
    }

    public async findById(
        request: Request, 
        response: Response
    ): Promise<void> {
        try {
            const item = await bandModel
                .findById(request.params.id)
                .populate('concerts')
                .exec();
        
            response.status(200).send(item);
        } catch (e) {
            response.status(404).send(e.message);
        }
    }
}