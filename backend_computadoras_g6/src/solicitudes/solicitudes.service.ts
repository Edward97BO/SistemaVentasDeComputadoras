import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private solicitudRepository: Repository<Solicitud>,
  ) {}

  async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    const existeSolicitud = await this.solicitudRepository.findOneBy({
      idSolicitud: createSolicitudDto.idSolicitud,
    });

    if (existeSolicitud) {
      throw new ConflictException('La Solicitud ya existe');
    }
    const solicitud = new Solicitud();
    idSolicitud: createSolicitudDto.idSolicitud.trim();
    idProducto: createSolicitudDto.idProducto.trim();
    cantidad: createSolicitudDto.cantidad;
    precio: createSolicitudDto.precio;

    return solicitud;
  }

  async findAll(): Promise<Solicitud[]> {
    return this.solicitudRepository.find();
  }

  async findOne(id: number): Promise<Solicitud> {
    const solicitud = await this.solicitudRepository.findOneBy({ id });
    if (!solicitud) {
      throw new NotFoundException(`No existe la Solicitud ${id}`);
    }
    return solicitud;
  }

  async update(
    id: number,
    updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    const solicitud = await this.solicitudRepository.findOneBy({ id });
    if (!solicitud) {
      throw new NotFoundException(`No existe la solicitud ${id}`);
    }
    const solicitudUpdate = Object.assign(solicitud, updateSolicitudDto);
    return this.solicitudRepository.save(solicitudUpdate);
  }

  async remove(id: number) {
    const Solicitud = await this.solicitudRepository.findOneBy({ id });
    if (!Solicitud) {
      throw new NotFoundException(`No existe la Solicitud ${id}`);
    }
    return this.solicitudRepository.delete(id);
  }
}
