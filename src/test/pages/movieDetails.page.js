var MovieDetailsPage = function() {
  var _self = this;
  var dvdButton = element.all(by.css('.find_dvd .ui-button-text')).first();
  var searchInput = element.all(by.css('#buttonset0_StoreDialog .search-location-field #buttonset0_StorePicker_SearchBox')).first();

  this.clickHoldDvd = function() {
    return dvdButton.click();
  }

  this.getLocationSearchInput = function() {
    return searchInput;
  }

  this.searchFor = function(seachQry) {
    searchInput.clear();
    return searchInput.sendKeys(seachQry, protractor.Key.ENTER);
  }

};
module.exports = new MovieDetailsPage();