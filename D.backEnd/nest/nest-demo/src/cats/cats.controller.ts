import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Headers, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { MyHeaders } from 'src/myHeaders/my-headers.decorator';
import { ChangecontextFilter } from 'src/changecontext.filter';
import { AaaException } from 'src/exception/aException';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  // @UseFilters(ChangecontextFilter)
  findAll(@MyHeaders('accept') headers1,@Headers('accept') headers2) {
    console.log(
      "headers1",headers1
    )
    console.log(
      "headers2",headers2
    )
    // throw new AaaException('aaa','bbb')
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
