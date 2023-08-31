import { Injectable } from '@nestjs/common';
import { CreateDynamicTestDto } from './dto/create-dynamic-test.dto';
import { UpdateDynamicTestDto } from './dto/update-dynamic-test.dto';

@Injectable()
export class DynamicTestService {
  create(createDynamicTestDto: CreateDynamicTestDto) {
    return 'This action adds a new dynamicTest';
  }

  findAll() {
    return `This action returns all dynamicTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicTest`;
  }

  update(id: number, updateDynamicTestDto: UpdateDynamicTestDto) {
    return `This action updates a #${id} dynamicTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicTest`;
  }
}
