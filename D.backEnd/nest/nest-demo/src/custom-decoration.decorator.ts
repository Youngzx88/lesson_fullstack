import { SetMetadata } from '@nestjs/common';

export const CustomDecoration = (...args: string[]) => SetMetadata('custom-decoration', args);
