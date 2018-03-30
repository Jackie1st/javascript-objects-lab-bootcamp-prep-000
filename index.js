var recipes = {};
function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value})
}
function updateObjectWithKeyAndValue(recipe, key, value) {
  var newRecipe = {prop: 1, prop2: 2};
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value; 
  recipe = {prop: 1, prop2: 2, prop3: 3};
  return recipe;
}
function deleteFromObjectByKey(recipe, key) {
    var draftRecipe = Object.assign({}, recipe)
    delete draftRecipe.prop;
    return draftRecipe;
  }
  function destructivelyDeleteFromObjectByKey(recipe, key) {
      delete recipe.prop;
      return recipe;
  }
  function destructivelyDeleteFromObjectByKey(recipe, key) {}
  