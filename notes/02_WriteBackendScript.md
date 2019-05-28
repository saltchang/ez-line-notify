# 02 建立後端腳本

專案後端使用 JavaScript 作為開發語言，並部署於 Google Apps Script 平台上。

## 撰寫測試腳本

1. 進入 [Google Apps Script](https://script.google.com/home)，並點選 **「新增指令碼」**
2. 在腳本中加入下列程式碼：

   ```javascript
   function yourProjectName {

       UrlFetchApp.fetch('https://notify-api.line.me/api/notify',{
             'headers':{ 'Authorization': 'Bearer ' + YourToken },
             'method': 'post',
             'payload': { 'message': 'Hello, World'}
         });

   }
   ```

    其中，`YourToken`必須替換成你剛剛發行的權杖 Token

3. 點選工作列的執行來測試程式。(Google 可能會提示你需要授權。)
4. 執行完畢，你將會在你剛剛所發行的權杖群組中看見測試訊息：`Hello, World`
5. 你可以任意替換所要傳送的訊息，例：

    ```javascript

    var msg = 'Iron Man';

    UrlFetchApp.fetch('https://notify-api.line.me/api/notify',{
          'headers':{ 'Authorization': 'Bearer ' + YourToken },
          'method': 'post',
          'payload': { 'message': 'I am ' + msg + '!'}
      });

    ```

    執行結果：`I am Iron Man!`

## Next

- [03 - 加入 Google Sheet API](https://github.com/saltchang/ez-line-notify/blob/master/notes/03_AddSheetAPI.md)
