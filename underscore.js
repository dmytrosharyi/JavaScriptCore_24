var cars = [
{
  brandName:'Ford',
  model:"Focus",
  productionYear:2011
},
{
  brandName:'Mercedes',
  model:"GL34",
  productionYear:2018
},
{
  brandName:'Hyundai',
  model:"Coupe",
  productionYear:2008
},
{
  brandName: 'Infinity',
  model:"QX70",
  productionYear:2017
},
{
  brandName:'Honda',
  model:"Civic",
  productionYear:2004
},
{
  brandName:'Toyota',
  model:"Corolla",
  productionYear:2003
},
{
  brandName:'Toyota',
  model:"Camry",
  productionYear:2014
},
{
  brandName:'Honda',
  model:"Civic",
  productionYear:2011
},
];
console.log('Grouped by brand');
var brands = _.groupBy(cars,function(obj){return obj.brandName});
_.each(brands,console.log);

console.log('Grouped by model');
var models = _.groupBy(cars,function(obj){return obj.model});
_.each(models,console.log);

console.log('Group by production year');
var years = _.groupBy(cars,function(obj){return obj.productionYear});
_.each(years,console.log);

console.log('Filtered by production year');
var yourYear = prompt('Enter production year');
var filteredByYear = _.filter(cars,function(obj){return obj.productionYear == yourYear});
_.each(filteredByYear,console.log);

console.log('Max production year');
var maxYear = _.max(cars,function(obj){return obj.productionYear})
console.log(maxYear);

console.log('Min production year');
var minYear = _.min(cars,function(obj){return obj.productionYear})
console.log(minYear);