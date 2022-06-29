import Cookies from 'js-cookie'

// 存、创建
// 整个网站有效
Cookies.set('name', '张麻子');

// 有效期7天
Cookies.set('name' '张麻子', {expires: 7});

// 有效期7天，path路径下有效
Cookies.set('name', '张麻子', {expires: 7, path: ''});


// 取
// 读取cookie
Cookies.get('name');          // => '张麻子'
Cookies.get('nothing');        // => undefined

// 读取所有的cookie
Cookies.get();


// 删除
// 删除Cookie
Cookies.remove('name');

// 删除对当前页路径有效的cookie
Cookies.set('name', '张哈皮', { path: '' });
Cookies.remove('name');                               // failed
Cookies.remove('name', { path: '' });                //  success
Cookies.remove('name', { path: '', domain: '.yourdomain.com' });



