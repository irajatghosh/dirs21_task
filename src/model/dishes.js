class DishesModel {
  constructor(
    name,
    description,
    category,
    availableTime,
    price,
    preparationTime,
    count
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.availableTime = availableTime;
    this.price = price;
    this.preparationTime = preparationTime;
    this.count = count;
  }
}

export default DishesModel;
