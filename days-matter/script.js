/**
 * Apply Query
 */

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

window.onload = () => {

    /** Card Round-radius */
    if (getQueryStringByName('round') == 'true')
        document.getElementById('card').classList.add('round');

    /** Card Background */
    let gradient = (["1"].indexOf(getQueryStringByName('gradient')) >= 0) ?
        getQueryStringByName('gradient') : '1';
    document.getElementById('card').classList.add(`gradient-${gradient}`);

    /** Days Matter */
    let day = getQueryStringByName('day') == '' ?
        (new Date().getFullYear() + 1) + '/01/01' :
        getQueryStringByName('day');
    let name = getQueryStringByName('name') == '' ?
        (new Date().getFullYear() + 1) + ' 年元旦' :
        getQueryStringByName('name');
    let now = new Date().getTime(),
        target = new Date(day).getTime(),
        title = target > now ? `${name}还有` : `${name}已经`;
    let days = Math.ceil(Math.abs(target - now) / 1000 / 60 / 60 / 24),
        date = day.split('/').join('-'),
        text = target > now ? '目标日' : '起始日';
    document.getElementById('days').innerHTML = days;
    document.getElementById('title').innerHTML = title;
    document.getElementById('date').innerHTML = `${text}：${date}`;
}