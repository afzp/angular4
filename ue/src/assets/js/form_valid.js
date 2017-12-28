var verify = { 
   verifyfield:function(obj){
        var flag=true;
        var tip=obj.attr("tips") || "该项";
        var v=obj.val();
        var mi=obj.attr("min");
        var ma=obj.attr("maxlen");
        if(obj.is("[required]") && $.trim(v)==''){
            verify.setTips(tip+'为必填项，不能为空',obj);
            flag=false;
        }else if(obj.is("[maxlen]") && $.trim(v).length> ma){
            verify.setTips(tip+'最多只能输入'+ma+'位,请重新输入',obj);
            flag=false;
        }else if(obj.is("[min]") && $.trim(v).length< mi){
            verify.setTips(tip+'不能少于'+mi+'位,请重新输入',obj);
            flag=false;
        }else if(obj.is("[email]")){
            var regstr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regstr.test(v)){
                verify.setTips(tip+'格式不正确，请重新输入。', obj);
                flag = false;
            }
        }else if(obj.is("[phone]")){
            var regstr = /(^(([0\+]?\d{1,3}-)?(0\d{2,3}-)?)?\d{6,8}(-\d{2,6})?$)|(^\(0\d{2,3}\)\d{6,8}(-\d{2,6})?$)|(^(0)?1[345678]\d{9}$)/i;
            if(!regstr.test(v)){
                verify.setTips(tip+'格式不正确，请重新输入。', obj);
                flag = false;
            }
        }else if(obj.is("[rep]")){
            var na=obj.attr("rep");
            var v2=obj.parents("form").find("input[name="+na+"]").val();
            if(v!=v2){
                verify.setTips('两次输入密码不一致，请重新输入', obj);
                return false;
            }
        }
        return flag;
    },
    setTips:function(msg,obj){
        obj.parent().find(".tips").text(msg);
    },
    removeTips:function(obj){
        obj.parent().find(".tips").text(" ");
    }
}