import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, MessagesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
