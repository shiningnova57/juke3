juke.config(function ($stateProvider) {
    // define a something state
    $stateProvider.state('albumList', {
    	url:"/albums",
        templateUrl: '/templates/albums.html',
        resolve: {
        	albums: function(AlbumFactory) {
        		return AlbumFactory.fetchAll();
        	}
        },
        controller: "AlbumsCtrl"   
    });

    $stateProvider.state('album', {
    	url:"/albums/:albumId",
        templateUrl: '/templates/album.html',
        controller: "AlbumCtrl"   
    });

});


