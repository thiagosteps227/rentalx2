import { ICreateCarDTO } from "@modules/accounts/dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";



interface ICarsRepository {
    create(data: ICreateCarDTO): Promise <Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    
}

export { ICarsRepository };