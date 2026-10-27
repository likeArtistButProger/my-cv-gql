import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Module({
  providers: [ExperienceService]
})
export class ExperienceModule {}
