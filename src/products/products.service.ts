import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Products } from './entity/products.entity';
import { ProductsDto } from './dto/products.dto';
import { ProductsInterface } from './interface/products.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async getAllProducts(): Promise<ProductsInterface[]> {
    return await this.productsRepository.find();
  }

  async getProductsById(id_producto: number): Promise<any> {
    const productFound = await this.productsRepository.findOneBy({
      id_producto: id_producto,
    });

    return productFound;
  }

  async createProduct(product: ProductsDto): Promise<any> {
    const newProduct = await this.productsRepository.create(product);
    return await this.productsRepository.save(newProduct);
  }

  async updateProduct(
    product: Partial<ProductsDto>,
    id_producto: number,
  ): Promise<any> {
    return await this.productsRepository.update(id_producto, product);
  }

  async deleteProduct(id_producto: number): Promise<any> {
    return await this.productsRepository.delete(id_producto);
  }
}
