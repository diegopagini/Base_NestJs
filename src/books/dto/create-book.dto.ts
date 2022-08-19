import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';

// DTO = Data Transfer Object
export class BookDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(1000)
  pages: number;
}
