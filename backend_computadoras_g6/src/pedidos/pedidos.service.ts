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
    private PedidoRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const existePedido = await this.PedidoRepository.findOneBy({
      idPedido: createPedidoDto.idPedido,
    });

    if (existePedido) {
      throw new ConflictException('La Pedido ya existe');
    }

    const Pedido = new Pedido();
    Pedido.idPedido = createPedidoDto.idPedido.trim();
    Pedido.estado = createPedidoDto.estado.trim();

    const PedidoBd = await this.PedidoRepository.save(Pedido);
    delete Pedido.clave;
    return PedidoBd;
  }

  async findAll(): Promise<Pedido[]> {
    return this.PedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const Pedidoe = await this.PedidoRepository.findOneBy({ id });
    if (!Pedidoe) {
      throw new NotFoundException(`No existe la Pedido ${id}`);
    }
    return Pedidoe;
  }
  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const Pedido = await this.PedidoRepository.findOneBy({ id });
    if (!Pedido) {
      throw new NotFoundException(`No existe la Pedido ${id}`);
    }
    const PedidoUpdate = Object.assign(Pedido, updatePedidoDto);
    return this.PedidoRepository.save(PedidoUpdate);
  }

  async remove(id: number) {
    const Pedido = await this.PedidoRepository.findOneBy({ id });
    if (!Pedido) {
      throw new NotFoundException(`No existe el Pedido ${id}`);
    }
    return this.PedidoRepository.delete(id);
  }
}
