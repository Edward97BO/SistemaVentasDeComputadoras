import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSolicitudDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo idSolicitud no debe ser vacío' })
  @IsString({ message: 'El campo idSolicitud debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo idSolicitud no debe ser mayor a 100 caracteres',
  })
  readonly idSolicitud: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo idProducto no debe ser vacío' })
  @IsString({ message: 'El campo idProducto debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo idProducto no debe ser mayor a 100 caracteres',
  })
  readonly idProducto: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsString({ message: 'El campo cantidad debe ser de tipo cadena' })
  @MaxLength(60, {
    message: 'El campo cantidad no debe ser mayor a 60 caracteres',
  })
  readonly cantidad: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsString({ message: 'El campo precio debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo precio no debe ser mayor a 50 caracteres',
  })
  readonly precio: number;
}
