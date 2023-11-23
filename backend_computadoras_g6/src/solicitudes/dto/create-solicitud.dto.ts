import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSolicitudDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo Pedido debe estar definido' })
  @IsNumber({}, { message: 'El campo Pedido debe ser de tipo numérico' })
  readonly idPedido: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo Producto debe estar definido' })
  @IsNumber({}, { message: 'El campo Producto debe ser de tipo numérico' })
  readonly idProducto: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Código no debe ser vacío' })
  @IsString({ message: 'El campo Código debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo Código no debe ser mayor a 10 caracteres',
  })
  readonly codigo: string;
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
