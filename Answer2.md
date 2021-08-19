## 【問題２】答え合わせ

### ランキング画面の確認

![Monaca](/readme-img/Monaca.png)

* ランキング画面を確認しましょう
 * アプリで「ランキングを見る」をタップすると以下のようにランキングが表示されます

![ans2-1](/readme-img/ans2-1.png)

* 上図は３回遊んだ場合の例です。複数回遊んで、ランキングが表示されることを確認しましょう！

### コードの答え合わせ

![Monaca](/readme-img/Monaca.png)

* 模範解答は以下です

```js
// **********【問題２】ランキングを表示しよう！**********
// 保存先クラスを作成
var highScore = ncmb.DataStore("GameScore");
// scoreの降順でデータ5件を取得するように設定する
highScore.order("score", true)
         .limit(5)
         .fetchAll()
         .then(function(results){
             // 検索に成功した場合の処理
             console.log("検索に成功しました。");
             // テーブルにデータをセット
             setData(results);
         })
         .catch(function(error){
             // 検索に失敗した場合の処理
             console.log("検索に失敗しました。エラー:" +error);
         });
// **************************************************
```
