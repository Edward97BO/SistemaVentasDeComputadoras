import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const existePedido = await this.pedidoRepository.findOneBy({
      codigo: createPedidoDto.codigo,
    });

    if (existePedido) {
      throw new ConflictException('El Pedido ya existe');
    }

    return this.pedidoRepository.save({
      idCliente: createPedidoDto.idCliente,
      codigo: createPedidoDto.codigo.trim(),
      estado: createPedidoDto.estado.trim(),
    });
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOneBy({ id });
    if (!pedido) {
      throw new NotFoundException(`No existe el Pedido ${id}`);
    }
    return pedido;
  }
  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOneBy({ id });
    if (!pedido) {
      throw new NotFoundException(`No existe el Pedido ${id}`);
    }
    const PedidoUpdate = Object.assign(Pedido, updatePedidoDto);
    return this.pedidoRepository.save(PedidoUpdate);
  }

  async remove(id: number) {
    const pedido = await this.pedidoRepository.findOneBy({ id });
    if (!pedido) {
      throw new NotFoundException(`No existe el Pedido ${id}`);
    }
    return this.pedidoRepository.delete(id);
  }
}
