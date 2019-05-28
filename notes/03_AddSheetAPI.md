# 03 加入 Google Sheet API

使用 Google 試算表來作為我們的簡易資料庫，存放需要的資料並擷取用作訊息來傳送。

## 建立試算表並修改腳本

1. 進入你的 [Google Cloud Drive](https://drive.google.com)
2. 新增一個 Google 試算表
   本專案使用[官方範例](https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit)

   **你必須將共用權限設定為公開。**
   請記下你的試算表網址中的 URI：
   - 假設網址為 `https://docs.google.com/spreadsheets/d/abCD1234/edit`，則 URI 為 `abCD1234`

3. 修改你的腳本程式碼如下(可參考[範例](https://github.com/saltchang/ez-line-notify/blob/master/example/ez_line_notify.js)的註解說明)：

    ```javascript

    function yourProjectName() {

        var msg = '';

        var token = YourNotifyToken;

        var spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
        var rangeName = 'Class Data!A2:F';
        var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
        if (!values) {
            Logger.log('No data found.');
        } else {

            for (var row = 0; row < values.length; row++) {
            msg += '\n姓名：' + values[row][0] + ', 主修：' + values[row][4];
            }

        }

        UrlFetchApp.fetch('https://notify-api.line.me/api/notify',{
                    'headers':{ 'Authorization': 'Bearer ' + token },
                    'method': 'post',
                    'payload': { 'message': msg}
                });
    }

    ```

4. 在專案上方的工作列選擇 **資源>進階Google服務>啟用GoogleSheetAPI**
5. 執行專案，Google 將會提示你授權，如果出現無法授權頁面，選擇 **進階>繼續前往(不安全)**
6. 執行成功，你會在你的 Line 看見 Notify 傳送的訊息：

    ```text
    【你的權杖名稱】

    姓名：Alexandra, 主修：English
    姓名：Andrew, 主修：Math
    姓名：Anna, 主修：English
    姓名：Becky, 主修：Art
    姓名：Benjamin, 主修：English
    姓名：Carl, 主修：Art
    姓名：Carrie, 主修：English
    姓名：Dorothy, 主修：Math
    姓名：Dylan, 主修：Math
    姓名：Edward, 主修：English
    姓名：Ellen, 主修：Physics
    姓名：Fiona, 主修：Art
    姓名：John, 主修：Physics
    姓名：Jonathan, 主修：Math
    姓名：Joseph, 主修：English
    姓名：Josephine, 主修：Math
    姓名：Karen, 主修：English
    姓名：Kevin, 主修：Physics
    姓名：Lisa, 主修：Art
    姓名：Mary, 主修：Physics
    姓名：Maureen, 主修：Physics
    姓名：Nick, 主修：Art
    姓名：Olivia, 主修：Physics
    姓名：Pamela, 主修：Math
    姓名：Patrick, 主修：Art
    姓名：Robert, 主修：English
    姓名：Sean, 主修：Physics
    姓名：Stacy, 主修：Math
    姓名：Thomas, 主修：Art
    姓名：Will, 主修：Math
    ```

## Next

- [04 - 設定專案自動執行](https://github.com/saltchang/ez-line-notify/blob/master/notes/04_ProjectAutoRun.md)
