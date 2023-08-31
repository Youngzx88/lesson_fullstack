import { Controller, Module, forwardRef } from '@nestjs/common';
import { AfterControllerController } from './after-controller.controller';

@Controller('before-controller')
@Module({
  imports: [
    forwardRef(() => AfterControllerController)
  ]
})
export class BeforeControllerController {

}
