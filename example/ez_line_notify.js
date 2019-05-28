function ezNotify() {

    // 要傳送的訊息內容
    var msg = '';

    // Notify 發行的權杖token
    var token = 'XXXXXXXXXXXXXXX';

    // Google Sheet URI
    var spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';

    // Sheet Data 存取的工作表以及範圍
    var rangeName = 'Class Data!A2:F';

    // 呼叫 Google Sheet API 並將結果儲存為變數
    var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;

    // 如果資料獲取失敗 Log 一個失敗的訊息，Log 將會顯示於 專案 > 查看 > 紀錄
    if (!values) {
        Logger.log('No data found.');
    } else {

        // 針對每一列獲取資料
        for (var row = 0; row < values.length; row++) {

            // 將資料儲存於 msg 變數中
            msg += '\n姓名：' + values[row][0] + ', 主修：' + values[row][4];
        }

    }

    // 連結 Line Notify API，並且呼叫 Notify 發送訊息
    UrlFetchApp.fetch('https://notify-api.line.me/api/notify', {
        'headers': { 'Authorization': 'Bearer ' + token },
        'method': 'post',
        'payload': { 'message': msg }
    });

}
