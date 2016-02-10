'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($stateParams, $scope, $log, PlayerFactory, AlbumFactory) {
  AlbumFactory.fetchById($stateParams.albumId)
    .then(album => {
      $scope.album = album;
    })
    .catch($log.error);

  // $scope.$on('viewSwap', function (event, data) {
  //   if (data.name !== 'oneAlbum') return $scope.showMe = false;
  //   $scope.showMe = true;
  //   AlbumFactory.fetchById(data.id)
  //   .then(album => {
  //     $scope.album = album;
  //   })
  //   .catch($log.error);
  // });

  // main toggle
  // $scope.

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function (albums, $scope, $log, PlayerFactory, AlbumFactory) {

    $scope.albums = albums;


  // $scope.showMe = true;

  // $scope.$on('viewSwap', function (event, data) {
  //   $scope.showMe = (data.name === 'allAlbums');
  // });

  // $scope.viewOneAlbum = function (album) {
    // $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  // };

  // AlbumFactory.fetchAll()
  // .then(albums => {
  //   $scope.albums = albums;
  // })
  // .catch($log.error); // $log service can be turned on and off; also, pre-bound

});

