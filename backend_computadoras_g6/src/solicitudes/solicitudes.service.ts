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
    private SolicitudeRepository: Repository<Solicitud>,
  ) {}

  async create(createSolicitudeDto: CreateSolicitudDto): Promise<Solicitud> {
    const existeSolicitude = await this.SolicitudeRepository.findOneBy({
      idSolicitud: createSolicitudeDto.idSolicitud,
    });

    if (existeSolicitude) {
      throw new ConflictException('La Solicitud ya existe');
    }

    const Solicitude = new Solicitude();
    Solicitude.idSolicitud = createSolicitudeDto.idSolicitud.trim();
    Solicitude.idProducto = createSolicitudeDto.idProducto.trim();
    Solicitude.cantidad = createSolicitudeDto.cantidad.trim();
    Solicitude.precio = createSolicitudeDto.precio.trim();

    const SolicitudeBd = await this.SolicitudeRepository.save(Solicitude);
    delete Solicitude.clave;
    return SolicitudeBd;
  }

  async findAll(): Promise<Solicitud[]> {
    return this.SolicitudeRepository.find();
  }

  async findOne(id: number): Promise<Solicitud> {
    const Solicitude = await this.SolicitudeRepository.findOneBy({ id });
    if (!Solicitude) {
      throw new NotFoundException(`No existe la Solicitud ${id}`);
    }
    return Solicitude;
  }

  async update(
    id: number,
    updateSolicitudeDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    const Solicitude = await this.SolicitudeRepository.findOneBy({ id });
    if (!Solicitude) {
      throw new NotFoundException(`No existe la solicitud ${id}`);
    }
    const SolicitudeUpdate = Object.assign(Solicitude, updateSolicitudeDto);
    return this.SolicitudeRepository.save(SolicitudeUpdate);
  }

  async remove(id: number) {
    const Solicitude = await this.SolicitudeRepository.findOneBy({ id });
    if (!Solicitude) {
      throw new NotFoundException(`No existe el Solicitude ${id}`);
    }
    return this.SolicitudeRepository.delete(id);
  }
}
