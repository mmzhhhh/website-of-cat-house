$(function () { 
    // 正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^1[3-9]\d{9}$/;

    // 引用用户信息输入
    const emailInput = $('#email');
    const phoneInput = $('#phone');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');

    //错误信息引用
    const emailError = $('#emailError');
    const phoneError = $('#phoneError');
    const passwordError = $('#passwordError');
    const confirmPasswordError = $('#confirmPasswordError');

    //隐藏所有错误信息
    emailError.hide();
    phoneError.hide();
    passwordError.hide();
    confirmPasswordError.hide();

    //验证方法
    function vaildEmail() {
        if (emailRegex.test(emailInput.val())) {
            emailError.hide();
        } else {
            emailError.show();
        }
    }

    function vaildPhone() {
        if (phoneRegex.test(phoneInput.val())) {
            phoneError.hide();
        } else {
            phoneError.show();
        }
    }

    function vaildPwd() {
        if (passwordInput.val().length <= 6) {
            passwordError.text("Must be longer than 6").show();
        } else {
            passwordError.hide();
        }
    }

    function vaildConfirmPwd() {
        if(passwordInput.val()==confirmPasswordInput.val()){
                confirmPasswordError.hide();
            }else{
                confirmPasswordError.text("Not Same")
                confirmPasswordError.show();
            }
    }

    //输入监听
    emailInput.on('input', vaildEmail);
    phoneInput.on('input', vaildPhone);
    passwordInput.on('input', vaildPwd)
    confirmPasswordInput.on('input',vaildConfirmPwd);

    //最终提交再验证一遍
    $('#registrationForm').on('submit',function (event) { 
        event.preventDefault();
        vaildEmail();
        vaildPhone();
        vaildPwd();
        vaildConfirmPwd();
        //如果错误可见阻止提交
        if(emailError.is(':visible')||phoneError.is(':visible')||passwordError.is(':visible')||confirmPasswordError.is(':visible')){
            alert('请检查您的错误');
        }else {
            //使用浏览器保存注册的邮箱和密码
            localStorage.setItem('email',emailInput.val());
            localStorage.setItem('pwd',passwordInput.val());
            alert('注册成功');
            window.location.href = '../../build/login.html';

        }
     })

 })