import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRepository } from './repositories/admin.repository';

@Module({
  imports: [TypeOrmModule.forRoot(AdminRepository)],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
