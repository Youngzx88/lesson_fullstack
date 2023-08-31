import { Controller, Module, forwardRef } from '@nestjs/common';
import { BeforeControllerController } from './before-controller.controller';

@Controller('after-controller')
@Module({
  imports: [
    forwardRef(() => BeforeControllerController)     
  ]
})
export class AfterControllerController {
  
}
