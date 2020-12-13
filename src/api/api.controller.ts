import { Controller, Get, Header, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
    constructor(
        private apiService: ApiService
    ) {}

    @Get(":handle")
    @Header('content-type', 'image/svg+xml')
    async getApi(@Param() params){
        console.log(params.handle);
        return this.apiService.getCodeforcesSvg(params.handle);
    }
}
