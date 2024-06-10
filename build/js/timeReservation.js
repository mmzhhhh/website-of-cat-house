function bookTime() {
    var time = document.getElementById('selectTime').value;
    var selectDate = new Date(time);
    var now = new Date();

    if (time != '') {
        if (selectDate.getTime() < now.getTime()) {
            alert('不能预约过去的时间，请选择未来的时间.')
        } else {
            alert('您已成功预时间：' + selectDate.getFullYear() + " 年 " + (selectDate.getMonth() + 1) + " 月 " + selectDate.getDate() + " 日.");
            window.location.href = './catInformation.html';
        }
    } else {
        alert('您还没选择预约时间.');
    }
}