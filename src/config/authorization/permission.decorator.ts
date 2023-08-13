import { SetMetadata } from '@nestjs/common';

export const Permission = (action:string,subject: any) => SetMetadata('permission', {subject,action});