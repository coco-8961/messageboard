$(document).ready(function(){
    var id=0;    
    //新增
    $("#addmsg").click(function(){
        //取彈跳視窗input的值
        var name = $("#add_name").val();
        var content = $('#add_content').val();
        var myDate = new Date().toLocaleString();
        console.log(name,content,myDate);
        //新增內文
        id++;
        $("tbody").append(
            $("<tr>")
                .attr({
                    "id":"message",
                })
                .append(
                    $("<th>")
                        .attr(
                            "id","msg_id",
                        )
                        .text(id),
                    $("<td>")
                        .attr(
                            "id","msg_name",
                        )
                        .text(name),
                    $("<td>")
                        .attr(
                            "id","msg_content",
                        )
                        .text(content),
                    $("<td>")
                        .attr(
                            "id","msg_time",
                        )
                        .text(myDate),
                    $("<td>")
                        .append(
                            $("<button>")
                                .attr({
                                    "type":"button",
                                    "class":"btn btn-warning",
                                    "id":"bt_edit",
                                    "data-toggle":"modal",
                                    "data-target":"#editModalCenter",
                                })
                                .text("編輯")
                        ),
                    $("<td>")
                        .append(
                            $("<button>")
                                .attr({
                                    "type":"button",
                                    "class":"btn btn-danger",
                                    "id":"bt_del",
                                })
                                .text("刪除")
                        )
            )
        )
        //清空input的值
        $("#add_name").val("");
        $("#add_content").val("");
    })

    //刪除
    $("#allmessage").on("click","#bt_del",function(){
        $(this).parents("tr").remove();
    })

    //編輯
    $("#allmessage").on("click","#bt_edit",function(){
        edit_msg = $(this).parent();
        //拿留言板的值
        var name = edit_msg.siblings("#msg_name").text();
        var content = edit_msg.siblings("#msg_content").text();
        console.log(name,content);

        //將值放入input
        $("#edit_name").val(name);
        $("#edit_content").val(content);
        // $("#edit_name").attr({
        //     "value":name,
        // });
        // $("#edit_content").html(content);
    })
    $("#editmsg").click(function(){
        //取彈跳視窗input的值
        var editname = $("#edit_name").val();
        var editcontent = $('#edit_content').val();
        var editmyDate = new Date().toLocaleString();
        console.log(editname,editcontent,editmyDate);
        //變更內容
        edit_msg.siblings("#msg_name").text(editname);
        edit_msg.siblings("#msg_content").text(editcontent);
        edit_msg.siblings("#msg_time").text(editmyDate);
    }) 
})