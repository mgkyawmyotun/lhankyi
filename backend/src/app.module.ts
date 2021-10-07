import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeskEntity } from './desks/desk.entity';
import { DesksModule } from './desks/desks.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { isProduction } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: isProduction() ? true : false,
      entities: [User, DeskEntity],
      synchronize: true,
      extra: isProduction()
        ? {
            ssl: {
              rejectUnauthorized: false,
            },
          }
        : false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }): { req: Request; headers: Headers } => {
        return {
          req: req,
          headers: req.headers,
        };
      },
    }),
    UsersModule,
    DesksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
