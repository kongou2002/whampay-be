import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import {
  authConfig,
  commonConfig,
  mongodbConfig,
  MongoDbModule,
} from '@pay-wallet/common';
import { AuthModule } from './auth/auth.module';
import { appConfig } from './config/config';
import { WalletModule } from './wallet/wallet.module';
import { UserModule } from './user/user.module';
import { FriendshipModule } from './friendship';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, commonConfig, mongodbConfig],
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    MongoDbModule,
    WalletModule,
    UserModule,
    AuthModule,
    FriendshipModule,
    TransactionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
