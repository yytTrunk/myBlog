//微信缩放
var baseWidth = 750;
if( /Android (\d+\.\d+)/.test( navigator.userAgent ) ) {
    var version = parseFloat( RegExp.$1 );
    if( version > 2.3 ) {
        var phoneScale = parseInt( window.screen.width ) / baseWidth;
        document.write( '<meta name="viewport" content="width=' + baseWidth + ', minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', user-scalable=no, target-densitydpi=device-dpi">' );
    } else {
        document.write( '<meta name="viewport" content="width=' + baseWidth + ', user-scalable=no, target-densitydpi=device-dpi">' );
    }
} else {
    document.write( '<meta name="viewport" content="width=' + baseWidth + ', user-scalable=no, target-densitydpi=device-dpi">' );
}