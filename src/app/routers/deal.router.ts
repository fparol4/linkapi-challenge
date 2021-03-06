import { Router } from 'express'
import { ARouter } from '../abstracts/router.abstract'
import { ControllerAdapter } from '../adapters/controller.adapter'
import DealController from '../controllers/deal.controller'
import DealValidator from '../validators/deal.validator'

export class DealRouter extends ARouter {
  public readonly router: Router
  public readonly basePath: string = '/deals'

  public routes (): void {
    this.router.get('/', DealValidator.index, ControllerAdapter.adapt(DealController.index))
    this.router.post('/', DealValidator.store, ControllerAdapter.adapt(DealController.store))
    this.router.get('/aggregated', DealValidator.aggregate, ControllerAdapter.adapt(DealController.aggregated))
    this.router.get('/:id', ControllerAdapter.adapt(DealController.show))
  }
}
