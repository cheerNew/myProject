var zz=getzz()
    var pageno=1 ; //当前页
    var pagesize=2; //每页多少条信息
    if(zz.length % pagesize==0){
        var  pageall =zz.length/pagesize ;
    }else{
        var  pageall =parseInt(zz.length/pagesize)+1;
    }   //一共多少页
    change(1);

    function getzz() {
        var a = $("#idData li");
        var zz =new Array(a.length);
        for(var i=0;i <a.length;i++){
            zz[i]=a[i].innerHTML;
        } //div的字符串数组付给zz
        return zz;
    }
    function change(e){
        pageno=e;
        if(e<1){
            e=1;pageno=1;//就等于第1页 ， 当前页为1
        }
        if(e>pageall){  //如果输入页大于最大页
            e=pageall;pageno=pageall; //输入页和当前页都=最大页
        }
        $("#all").html("");//全部清空
        var html="";
        for(var i=0;i<pagesize;i++){
            html += '<li>' + zz[(e-1)*pagesize+i] +'</li>';//创建一页的li列表
            if(zz[(e-1)*pagesize+i+1]==null) break;//超出最后的范围跳出
        }
        $("ul#idData").html(html);//给ul列表写入html
        var ye="";
        for(var j=1;j<=pageall;j++){
            if(e==j){
                ye=ye+"<span><a href='#' class='page_one' onClick='change("+j+")' style='color:#FF0000'>"+j+"</a></span> "
            }else{
                ye=ye+"<a href='#' class='page_one'  onClick='change("+j+")'>"+j+"</a> "
            }
        }
        var pageContent="";
        pageContent +='第<span id=\"a2\">'+pageno+'/</span>';
        pageContent +='<span id="a1" style="margin-right: 2%;">'+pageall+'页</span>';
        var netPage = pageno+1;
        var shangPag = pageno-1;
        pageContent +='<a href="#" class="page_net" style="margin-right: 0.4%;" onClick="change('+shangPag+')">上一页</a>';
        pageContent +='<span id="a3">'+ye+'</span>';
        pageContent +='<a href="#" class="page_net" onClick="change('+netPage+')">下一页</a>';
        $("#page").html(pageContent);
    }