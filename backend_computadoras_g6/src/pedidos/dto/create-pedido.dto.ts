import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';

export class CreatePedidoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El id pedido no debe ser vacío' })
  @IsString({ message: 'El id pedido debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El id pedido no debe ser mayor a 100 caracteres',
  })
  readonly idPedido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El estado no debe ser vacío' })
  @IsString({ message: 'El estado debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El estado no debe ser mayor a 100 caracteres',
  })
  readonly estado: string;
}
