import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index() {
    return await this.userService.index();
  }

  @Get(':id')
  async show(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.show(id);
  }

  @UseInterceptors(LogInterceptor)
  @Post()
  async store(@Body() { email, name, password }: CreateUserDTO) {
    return await this.userService.store({ email, name, password });
  }

  @Put(':id')
  async update(
    @Body() { email, name, password }: UpdatePutUserDTO,
    @ParamId() id: string,
  ) {
    return await this.userService.update(id, { email, name, password });
  }

  @Patch(':id')
  async partialUpdate(
    @Body() { email, name, password }: UpdatePatchUserDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return await this.userService.updatePartial(id, { email, name, password });
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.delete(id);
  }
}
