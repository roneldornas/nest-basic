import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'NkX%;TCV+nDcW)v7hG!,EdMH{c.G~YfXCv*7;@Ay[8?kM)5j~eg(-"3d!9yXQG[>`AM.j5]dyY:T&VRkbtc*,e?t?(k9]a@g>62jZv+W4V$.',
    }),
  ],
})
export class AuthModule {}
