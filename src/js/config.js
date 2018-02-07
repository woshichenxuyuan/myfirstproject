require.config({
    // baseUrl:'js'


    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'carousel':'../lib/carousel/carousel',
        'gdsZoom':'../lib/zoom/zoom',
        
    },
    shim:{
        // 设置依赖
        'carousel':['jquery'],
        'gdsZoom' :['jquery']
    }
});
