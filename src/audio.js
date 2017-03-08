new tabris.Button({
  centerX: 0, centerY: 0, width: 150,
  text: "Play"
}).on("select", sound).appendTo(tabris.ui.contentView);

function sound(){
  if( window.plugins && window.plugins.NativeAudio ) {
    
    // Preload audio resources 
    window.plugins.NativeAudio.preloadComplex( 'music', 'audio/music.mp3', 1, 1, 0, function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
    
    window.plugins.NativeAudio.preloadSimple( 'click', 'audio/click.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });
 
 
    // Play 
    window.plugins.NativeAudio.play( 'click' );
    window.plugins.NativeAudio.loop( 'music' );
 
 
    // Stop multichannel clip after 60 seconds 
    window.setTimeout( function(){
 
        window.plugins.NativeAudio.stop( 'music' );
            
        window.plugins.NativeAudio.unload( 'music' );
        window.plugins.NativeAudio.unload( 'click' );
 
    }, 1000 * 60 );
}
  
}
