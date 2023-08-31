import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicTestDto } from './create-dynamic-test.dto';

export class UpdateDynamicTestDto extends PartialType(CreateDynamicTestDto) {}
