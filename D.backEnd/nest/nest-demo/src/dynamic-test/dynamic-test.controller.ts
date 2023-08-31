import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { DynamicTestService } from './dynamic-test.service';
import { CreateDynamicTestDto } from './dto/create-dynamic-test.dto';
import { UpdateDynamicTestDto } from './dto/update-dynamic-test.dto';

@Controller('dynamic-test')
export class DynamicTestController {
  constructor(private readonly dynamicTestService: DynamicTestService,
    @Inject('CONFIG_OPTIONS') private configOptions: Record<string,any>) {}

  @Post()
  create(@Body() createDynamicTestDto: CreateDynamicTestDto) {
    return this.dynamicTestService.create(createDynamicTestDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions)
    return this.dynamicTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDynamicTestDto: UpdateDynamicTestDto) {
    return this.dynamicTestService.update(+id, updateDynamicTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicTestService.remove(+id);
  }
}
