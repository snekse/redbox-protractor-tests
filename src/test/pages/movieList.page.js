var MovieListPage = function() {
  var _self = this;
  var ratingFilterId = 'productfilter3_Ratings';
  var boxWrappers = element.all(by.css('.box-wrapper'))
  var ratingsFilter = element(by.id(ratingFilterId));
  var ratingOptions = ratingsFilter.all(by.tagName('option'));
  
  this.pageIsReady = function() {
    return ratingsFilter.isPresent();
  }

  this.getMovies = function() {
    return boxWrappers;
  }

  this.getMovieCount = function() {
    return _self.getMovies().count();
  }

  this.selectFirstMovie = function() {
    return _self.getMovies().first().click()
    .then( function() {
      return browser.sleep(2000.0);
    });
  }

  this.ensureRatingsFilterSetToAll = function() {
    var anyRating = ratingOptions.first();
    anyRating.getAttribute('selected')
        .then(function(attr) {
          if (attr !== 'selected') {
            ratingsFilter.click().then(function() {
                anyRating.click();
            })
          }
        })
  }

  this.selectedRatedG = function() {
    browser.sleep(2000.0);
    var ratedG = ratingOptions.get(1);
    ratingsFilter.click().then(function() {
      ratedG.click();
    })
  }

};
module.exports = new MovieListPage();