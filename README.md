# selfweb 個人網站

## CodePen 製作前端模板
[初版前端模板](https://codepen.io/killuakuo/pen/VwQqOeb)
簡單寫一個前端，讓後來想輸入的資料可以放到前端裡面。

## MVC
建立 **server file** 放置MVS架構的三個資料夾，然後在額外補上route file。

### Model file
用來放置所有模型的JS

### Viwe file
所有前端顯示的資源，但是我沒有用到會前後綁定的JS，所以這個資料夾是放好看的。

或是根本不會出現在 GitHub裡。

### Control file
用來組合 Model file 裡的 function，讓Api可以透過新的Function來接收、傳遞資料。

### Routes file
可以接收Api 的地方，判斷使用者的資料。

## 紀錄8/1
這時完成了基本的 API 架構，很久沒有使用 Fetch 來 call 資料，花了一點時間成功讓前端、後端可以相通。

### API
```
href: [HOSTNAME]/api/data/?keyword=""&type=""
Method: GET
Description: 取得學習歷程
```

| Field      | Type   | Description                                            |
|:---------- | ------ |:------------------------------------------------------ |
| id         | varchar| data id                                                |
| title      | varchar| data title                                             |
| image      | varchar| data image                                             |
| directions | varchar| data directions                                        |
| type       | varchar| data type                                              |
| time_date  | varchar| data time                                              |

目前也只用到 Get 功能。


## 紀錄8/3
* 修改上次沒有做完的 Bug
* 打字打太快，有些地方就被漏掉了 QQ

## 紀錄8/4
* 新增篩選功能，可以更簡單的查詢資料
* 新增了首頁、404頁面、About頁面
* 正在製作編輯頁面