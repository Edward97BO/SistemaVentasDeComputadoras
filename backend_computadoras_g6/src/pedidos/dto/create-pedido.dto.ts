import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo Cliente debe estar definido' })
  @IsNumber({}, { message: 'El campo Cliente debe ser de tipo numérico' })
  readonly idCliente: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Código no debe ser vacío' })
  @IsString({ message: 'El campo Código debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo Código no debe ser mayor a 10 caracteres',
  })
  readonly codigo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El estado no debe ser vacío' })
  @IsString({ message: 'El estado debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El estado no debe ser mayor a 100 caracteres',
  })
  readonly estado: string;
}
