$(document).ready(function() {
    var MAX_COUNT_IN_ONE_LINE = 10;
    var MIN_SIZE = 150;
    var MARGIN_VALUE = 20;
    var SPACE_BETWEEN_IMAGES = 10;
    var $waterfall = $('.waterfall');
    var lastTime = new Date().getTime();


    // get client visual content height
    var getClientHeight = function () {
        if (document.compatMode === 'CSS1Compat') {
            return document.documentElement.clientHeight;
        } else {
            return document.body.clientHeight;
        }
    };

    // get single image width after resizing
    var getImageWidth = function () {
        var clientWidth = document.body.clientWidth;
        var count = MAX_COUNT_IN_ONE_LINE;
        var singleWidth = 0;

        while (count > 0) {
            singleWidth =  ((clientWidth - MARGIN_VALUE) - count * SPACE_BETWEEN_IMAGES) / count;

            if (singleWidth < MIN_SIZE && count === 1) {
                singleWidth = MIN_SIZE; 
                count = 0;
            } else if (singleWidth < MIN_SIZE) {
                count--; 
            } else {
                count = 0;
            }
        }
    
        return singleWidth;
    };

    // get image elements
    var getImageElements = function (images) {
        if (!$.isArray(images)) {
            return ''; 
        }

        var result = [];
        var width = getImageWidth();

        for (var i = 0; i < images.length; i++) {
            result.push(createSingleImage(width, images[i]));
        }

        return result;
    };

    // initial
    var initial = function () {
        $waterfall.append(getImageElements(imageArr));
    };

    // adjust the size of image after resizing
    var adjustImageWidth = function () {
        var singleWidth = getImageWidth(); 
        var images = $('.single-image', $waterfall);

        images.each(function(index, item) {
            $(item).css({
                'width': singleWidth + 'px',
                'height': singleWidth + 'px'
            });
        });
    }
    
    // resizing event handler
    $(window).resize(function () {
        var currentTime = new Date().getTime();

        if (currentTime - lastTime > 30) {
            lastTime = currentTime;
            adjustImageWidth();
        }
    });

    // scroll event handler
    $(window).scroll(function (e) {
        var scrollHeight = document.body.scrollHeight;
        var scrollTop = document.body.scrollTop;
        var clientHeight = getClientHeight();

        if (scrollHeight === scrollTop + clientHeight) {
            initial(); 
        }
    });

    initial();
});

var createSingleImage = function (width, url) {
    var randomIndex = Math.floor(Math.random() * 10);
    var randomColor = ['#123221', '#2196F3', '#273', '#631', '#BF360C', '#840321', '#ffa', '#006064', '#aa3', '#607D8B'];
    var $result = $('<a class="single-image"></a>').css({
        'background': randomColor[randomIndex],
        'width': width + 'px',
        'height': width + 'px',
        'margin-left': '5px',
        'margin-right': '5px'
    });

    var image = document.createElement('img');
    
    image.onload = function (e) {
    };

    image.src = url;
    $result.append(image);

    return $result;
};

var imageArr = [
    'https://ooo.0o0.ooo/2017/06/11/593d48cba5754.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cb5d1ee.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cb5ce2b.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cb81d15.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cb29291.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cb5e92a.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d48cad0681.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d4968a9914.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d496908b65.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d4968c4be3.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d4969063e9.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d499a1d10c.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d499712771.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d4997860d3.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d4996644cf.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d49d664ba5.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d49d972241.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d49d90df8c.jpeg',
    'https://ooo.0o0.ooo/2017/06/11/593d49d430c16.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2be2034f.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2db5f334.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2f2e3b97.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2f27e666.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2f29667b.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d2f263b6f.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3264cfdb.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d32621d60.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d32620819.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d325d64f8.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d35450e09.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3546369f.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3542e59c.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3544b2d9.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d35406fac.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d388a2a14.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d388b656d.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d38764569.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d38774b12.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3872d606.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3b4ec6ac.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3b469b31.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3b4eb5b3.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3b4cd1a5.jpeg',
    'https://ooo.0o0.ooo/2017/06/18/5945d3b4c1439.jpeg'
];
