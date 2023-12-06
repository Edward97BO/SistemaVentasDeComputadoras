import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarritoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo codigo no debe ser vacío' })
  @IsString({ message: 'El campo codigo debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo codigo no debe ser mayor a 100 caracteres',
  })
  readonly codigo: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
  readonly cantidad: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numerico' })
  readonly idProducto: number;
}
