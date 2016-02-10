juke.config(function ($stateProvider) {
    // define a something state
    $stateProvider
    .state('artistList', {
    	url:"/artists",
        // that renders the following 
        templateUrl: 'templates/artists.html',
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll()
            }
        },
        controller: "ArtistsCtrl"   
    })
    .state('artist', {
        url:"/artists/:artistId",
        templateUrl: 'templates/artist.html',
        controller: "ArtistCtrl"
    })
    .state('artist.albums', {
        url:"/artists/:artistId/albums",
        templateUrl: "templates/artistAlbums.html",
        controller: "ArtistCtrl"
    })
    .state('artist.songs', {
        url:"/artists/:artistId/songs",
        templateUrl: "templates/artistSongs.html",
        controller: "ArtistCtrl"
    })

});


        