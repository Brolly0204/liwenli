(function() {
__inline('./lib/base.js');
var isInApp = /baidumap_IPHO|baidumap_ANDR/.test(navigator.userAgent);
var srcFrom = 'yy_' + Page.config.fr + '_promotion' + Page.config.pageId;
var isWeixin = navigator.userAgent.match(/MicroMessenger/);
var downclient = ['<div style="text-align:center;">',
        '<p>本活动仅限百度地图/百度糯米客户端参加，</p>',
        '<p>请点击下方链接前往下载</p>',
        '<a href="http://map.baidu.com/zt/y2015/mapdownload/" style="display:inline-block;margin-top:.2rem;text-decoration:underline;color:#4CA5F1;">点击下载</a>',
        '</div>'];
Page.event.on('hoteldetail', function (uid) {
    var _srcFrom = srcFrom;
    location.href = 'baidumap://map/place/detail?uid=' + uid + '&param='
        + encodeURIComponent(JSON.stringify({src_from: _srcFrom}))
        + '&src=yunying&show_type=detail_page';
    if (!isInApp) {
        var url = 'http://map.baidu.com/mobile/webapp/place/detail/qt=ninf&uid=' + uid + '&src_from=' + _srcFrom;
        Page.api.openHotel(url);
    }
});

Page.event.on('hotellist', function (cid, city, x, y) {
    var _srcFrom = srcFrom;
    var target = $.os.ios ? 'list_page_wise' : 'hotel_list_from_wise';
    var url = [
        'baidumap://map/component?comName=hotel&target=' + target + '&popRoot=no&param={"ldata":{"src_from":"',
        _srcFrom,
        '"},"pl_wise_price_section":"","nearby_search":"0","city":"',
        cid || 1,
        '","business_name":"","district_name":"","lbs_st":"","pl_reserve_start_time":"","qid":"","target":"hotel_list_from_wise","word":"' + (city || '') + '酒店' + '","nb_x":"',
        x || '',
        '","nb_y":"',
        y || '',
        '","pl_brand_id_section":"","pl_sort_type":"distance","resid":"01"}&src_from=',
        _srcFrom
    ].join('');
    location.href = url;
    if (isInApp) {
        return;
    }

    var param = [
        'c=' + cid,
        'qt=s',
        'pl_data_type=hotel',
        'industry=hotel',
        'wd=酒店',
        'pl_reserve_provider=wise',
        'pl_filt_type_section=1',
        'from=' + _srcFrom,
        'src_from=' + _srcFrom,
        'hidenav=1&hidefooter=1',
        'third_party=yunying',
    ];
    if (x && y) {
        param.push('center_rank=1');
        param.push('nb_x=' + x);
        param.push('nb_y=' + y);
    }

    var url = 'http://map.baidu.com/mobile/webapp/search/search/' + param.join('&');
    Page.api.openHotel(url);
});
Page.event.on('hotelchannel', function () {
     var target = $.os.ios ? 'hotel_search_channel_wise' : 'hotel_search_channel';
    location.href = 'baidumap://map/component?comName=hotel&popRoot=no&target=' + target + '&param='+ encodeURIComponent(JSON.stringify({
        src_from: srcFrom
    }));
    if (isInApp) {
        return;
    }
    
    var url = 'http://map.baidu.com/mobile/webapp/place/hotelzt/&third_party=yunying&hidenav=1&hidefooter=1&src_from=' + srcFrom;
    Page.api.openHotel(url);
});
Page.api.share = function () {

    var data = Page.config;
    var url = location.href;
    if (isInApp) {
        nativeAppAdapter.smartShare([{
            src: 'sina_weibo',
            text: data.content,
            url: url,
            pic: data.imageUrl
        }, {
            src: 'weixin',
            title: data.title,
            text: data.content,
            url: url,
            pic: data.imageUrl,
            contentType: 'text'
        }, {
            src: 'weixin_friend',
            title: data.title,
            text: data.content,
            url: url,
            pic: data.imageUrl,
            contentType: 'text'
        }], true);
    } else if (/MicroMessenger/.test(navigator.userAgent)) {
        $('#wx-mask').show().one('tap', function () {
            $('#wx-mask').hide();
        });
    }
}
Page.api.login = function () {
    location.href = 'http://wappass.baidu.com/passport/?authsite=0&adapter=apps&sms=1&loginLink=1&u='
        + encodeURIComponent(location.href);
};
var cache = false;
var html5Geo = Page.api.getCurrentPosition;
Page.api.getCurrentPosition = function (success, error) {
    // 客户端内取loc 百度墨卡托坐标
    var loc = Page.utils.getParam('loc');
    if (loc && isInApp) {
        if (cache) {
            success(cache);
            return;
        }
        loc = loc.slice(1, loc.length - 1);
        var coords = loc.split(',');
        Page.api.geo({
            coords: {
                longitude: coords[0],
                latitude: coords[1]
            }
        }, function (result) {
            cache = result;
            success(cache);
        }, error);
    } else {
        if (isInApp) {
            error();
        } else {
            html5Geo(success, error);
        }
    }
};

Page.api.openHotel = function (url) {
    if (Page.config.type + '' === '1') {
        location.href = url;
        return;
    }
    if (!isWeixin) {
        setTimeout(function () {
            Page.ui.tip.open(downclient.join(''));
            // location.href = url;
        }, 2000);
    } else {
        Page.ui.tip.open(downclient.join(''));
        // location.href = url;
    }
}

$(document).on('DOMContentLoaded', function () {
    nativeAppAdapter.weixinShare([
        {
            src: 'friend',
            contentType: 'text',
            title: Page.config.title,
            text: Page.config.content,
            url: location.href,
            pic: Page.config.imageUrl
        },
        // 微信好友
        {
            src: 'weixin',
            contentType: 'text',
            text: Page.config.content,
            url: location.href,
            title: Page.config.title,
            pic: Page.config.imageUrl
        }
    ]);
});
})();