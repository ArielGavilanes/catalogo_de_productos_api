import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id_producto')
  getProductById(@Param('id_producto') id_producto: number) {
    return this.productsService.getProductsById(id_producto);
  }

  @Post('')
  createProduct(@Body() product: ProductsDto) {
    return this.productsService.createProduct(product);
  }

  @Put(':id_producto')
  updateProduct(
    @Param('id_producto') id_producto: number,
    @Body() product: any,
  ) {
    return this.productsService.updateProduct(product, id_producto);
  }

  @Delete(':id_producto')
  deleteProduct(@Param('id_producto') id_producto: number) {
    return this.productsService.deleteProduct(id_producto);
  }
}
