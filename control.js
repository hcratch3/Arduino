function check(event) {
    if (event.currentTarget.value == "file") {
        return;
    }

    if (event.currentTarget.value == "save") {
        save();
    }

    if (event.currentTarget.value == "load") {
        alert("Not currently supported.");
    }

    if (event.currentTarget.value == "exit") {
        if (window.confirm("本当にEXITしていいですか？\nOKを押すと保存されません\nまた、新しいプロジェクトがロードされます")) {
            location.reload();
            return result
        } else {
            return
        }
    }
}

function save() {

    // 入力ダイアログを表示 ＋ 入力内容を user に代入
    msg = window.prompt("ファイル名を入力してください", "");

    // 入力内容が tama の場合は example_tama.html にジャンプ
    if (msg == null && msg == ' ') {

        alert("ファイル名が指定されていません\nもう一度やり直してください")

    }

    // 入力内容が hana の場合は example_hana.html にジャンプ
    else if (msg != null) {
        const text = document.getElementById("source").innerText

        const blob = new Blob([text], { type: 'text/plain' });
        const aTag = document.createElement('a');
        aTag.href = URL.createObjectURL(blob);
        aTag.target = '_blank';
        aTag.download = msg + ".ino";
        aTag.click();
        URL.revokeObjectURL(aTag.href);

    }

    // 空の場合やキャンセルした場合は警告ダイアログを表示
    else {

        window.alert('キャンセルされました');

    }

}
