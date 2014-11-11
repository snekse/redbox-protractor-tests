var MovieListPage = require('./pages/movieList.page.js');
var MovieDetailsPage = require('./pages/movieDetails.page.js');

var defaultSleep = browser.params.defaultSleep; 

describe('Redbox homepage', function() {
  it('should have a menu item called Movies', function() {
    browser.get('http://www.redbox.com/');
    //browser.get('http://www.redbox.com/movies#rating=g');
    var moviesNavLink = element(by.id('moviesbutton')).element(by.tagName('a'));

    browser.wait(function() {
    	return moviesNavLink.isPresent();
    })
    
    expect(moviesNavLink.isPresent()).toBe(true);

    describe('when the Movies link is clicked', function() {
    	moviesNavLink.click();
    	browser.wait(function() {
            return MovieListPage.pageIsReady();
        })

    	it('should have more All Ratings movies than G rated movies', function() {

            MovieListPage.ensureRatingsFilterSetToAll();

            //browser.debugger();
            //browser.pause(5998);

            var anyRatingCount = MovieListPage.getMovieCount();
            expect(anyRatingCount).toBeGreaterThan(20);

            MovieListPage.selectedRatedG();

            var ratedGCount = MovieListPage.getMovieCount();
            expect(ratedGCount).toBeLessThan(20);


            describe('when the user clicks hold for pickup', function() {
                MovieListPage.selectFirstMovie();
                browser.sleep(defaultSleep);

                it('should show a popup to enter a zip', function() {
                    MovieDetailsPage.clickHoldDvd();
                    browser.sleep(defaultSleep);

                    expect(MovieDetailsPage.getLocationSearchInput().isPresent()).toBe(true);

                    MovieDetailsPage.searchFor('68144');
                    browser.sleep(defaultSleep * 3);

                });
            })
        })
    })
  });
});