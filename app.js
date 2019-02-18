$(function () {
    $(".send").click(function () {
        var arr = [];
        var arr2 = [];

        //אותיות רגילות
        arr[1] = "א";
        arr[2] = "ב";
        arr[3] = "ג";
        arr[4] = "ד";
        arr[5] = "ה";
        arr[6] = "ו";
        arr[7] = "ז";
        arr[8] = "ח";
        arr[9] = "ט";
        arr[10] = "י";
        arr[20] = "כ";
        arr[30] = "ל";
        arr[40] = "מ";
        arr[50] = "נ";
        arr[60] = "ס";
        arr[70] = "ע";
        arr[80] = "פ";
        arr[90] = "צ";
        arr[100] = "ק";
        arr[200] = "ר";
        arr[300] = "ש";
        arr[400] = "ת";

        //אותיות סופיות
        arr2[20] = "ך";
        arr2[40] = "ם";
        arr2[50] = "ן";
        arr2[80] = "ף";
        arr2[90] = "ץ";

        var data = $(".check").val().trim();
        var data2;

        if (data === "" || data === undefined || data === null) {
            $(".result").html("אנא הכנס ביטוי!").css("color", "red");
            return;
        }
        else {
            data2 = data.split('');
            var sum = 0;
            for (var i = 0; i < data2.length; i++) {
                if (data2[i] == " ")
                    continue;
                else if (arr2.includes(data2[i]))
                    sum += check2(data2[i]);
                else
                    sum += check(data2[i]);
            }
            $(".result").html(data + " = " + sum).css("color","black");
        }

        function check(ch) {
            var num = 0;
            for (var i = 1; i <= 400; i++) {
                if (arr[i] == ch) {
                    num = i;
                    break;
                }
            }
            if (num == 0)
                return 0;
            else
                return num;
        }

        function check2(ch) {
            var num = 0;
            for (var i = 20; i <= 90; i++) {
                if (arr2[i] == ch) {
                    num = i;
                    break;
                }
            }
            if (num == 0)
                return 0;
            else
                return num;
        }
    });
});