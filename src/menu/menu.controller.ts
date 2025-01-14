import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service.js';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // Create Menu
  @Post()
  async createMenu(@Body() createMenuDto) {
    return this.menuService.createMenu(createMenuDto);
  }

  // Create Menu Item
  @Post('item')
  async createMenuItem(@Body() createMenuItemDto) {
    return this.menuService.createMenuItem(createMenuItemDto);
  }

  // Get Menu by ID
  @Get(':id')
  async getMenuById(@Param('id') id) {
    return this.menuService.getMenuById(id);
  }

  // Get All Menus (ID and Name)
  @Get()
  async getAllMenus() {
    return this.menuService.getAllMenus();
  }

  // Update Menu Item
  @Put('item/:id')
  async updateMenuItem(@Param('id') id, @Body() updateMenuItemDto) {
    return this.menuService.updateMenuItem(id, updateMenuItemDto);
  }

  // Delete Menu Item
  @Delete('item/:id')
  async deleteMenuItem(@Param('id') id) {
    return this.menuService.deleteMenuItem(id);
  }
}